from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _


class FlickrPhoto(models.Model):
    flickr_id = models.BigIntegerField(
        unique=True,
        verbose_name=_("Flickr's id of image")
    )
    owner_id = models.CharField(
        max_length=100,
        verbose_name=_("Owner's image id from flickr service")
    )
    title = models.TextField(
        blank=True,
        verbose_name=_("Title of the image")
    )
    picture = models.URLField(
        verbose_name=_("URL address of the picture")
    )
    geom = models.PointField(
        srid=4326,
        verbose_name=_("Geometry")
    )
