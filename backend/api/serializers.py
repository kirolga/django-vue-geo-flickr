from rest_framework import serializers
from . models import FlickrPhoto


class FlickrPhotoSerializer(serializers.ModelSerializer):

    class Meta:

        model = FlickrPhoto
        fields = '__all__'
