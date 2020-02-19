from .views import SearchView, AlbumView
from django.urls import path


urlpatterns = [
    path('search', SearchView),
    path('album', AlbumView.as_view({'get': 'list', 'post': 'create'}))
]
