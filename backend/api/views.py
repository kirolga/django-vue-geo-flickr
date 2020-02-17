from rest_framework.permissions import AllowAny
from flickrapi import FlickrAPI
from django.conf import settings
from django.http import JsonResponse
from .models import FlickrPhoto
from .serializers import FlickrPhotoSerializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from django.contrib.gis.geos import Point
from django.db import IntegrityError


class AlbumView(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = FlickrPhotoSerializer
    queryset = FlickrPhoto.objects.all()

    def create(self, request):
        flickr = FlickrAPI(
            settings.FLICKR_KEY,
            settings.FLICKR_SECRET,
            format="parsed-json"
        )
        data = request.data
        location = flickr.photos.geo.getLocation(
            photo_id=request.data['flickr_id'])
        loc = location['photo']['location']
        data.update(
            {'geom': Point(float(loc['longitude']),
                           float(loc['latitude'])).wkt
             })

        serializer = FlickrPhotoSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except IntegrityError as ex:
            return JsonResponse({'message': ex.message})
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)


def SearchView(request):
    bbox = request.POST.dict()['bbox']
    flickr = FlickrAPI(
        settings.FLICKR_KEY,
        settings.FLICKR_SECRET,
        format="parsed-json"
    )
    poi = flickr.photos.search(bbox=bbox)
    photos = poi["photos"]
    for photo in photos['photo']:
        photo['img'] = 'http://farm{farm_id}.staticflickr.com/{server_id}/{id}_{secret}.jpg'.format(
            farm_id=photo['farm'],
            server_id=photo['server'],
            id=photo['id'],
            secret=photo['secret'])
        photo['is_saved'] = FlickrPhoto.objects.filter(
            flickr_id=photo['id']).exists()
    return JsonResponse(photos)
