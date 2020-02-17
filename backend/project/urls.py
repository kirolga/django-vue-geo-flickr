from django.contrib import admin
from django.urls import include, path
from .views import index_view

urlpatterns = [
    path('', index_view, name='index'),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]
