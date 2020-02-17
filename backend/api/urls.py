from django.conf.urls import url, include
from .views import SearchView, AlbumView
from rest_framework import routers
from django.urls import path
# router = routers.DefaultRouter()
# router.register(r'search', SearchView)

urlpatterns = [
    path('search', SearchView),
    path('album', AlbumView.as_view({'get': 'list', 'post': 'create'}))
]