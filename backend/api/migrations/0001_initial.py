# Generated by Django 3.0.3 on 2020-02-16 21:12

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FlickrPhoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flickr_id', models.BigIntegerField(unique=True, verbose_name="Flickr's id of image")),
                ('owner_id', models.CharField(max_length=100, verbose_name="Owner's image id from flickr service")),
                ('title', models.TextField(blank=True, verbose_name='Title of the image')),
                ('picture', models.URLField(verbose_name='URL address of the picture')),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=4326, verbose_name='Geometry')),
            ],
        ),
    ]