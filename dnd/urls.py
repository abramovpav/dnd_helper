from django.conf.urls import url
from django.views.generic import TemplateView

from auth.views import AuthView
from dnd.views import HeroesViewSet, HeroViewSet

urlpatterns = [
    url(r'^api/heroes/$', HeroesViewSet.as_view({'get': 'list', 'post': 'create'})),
    url(r'^api/heroes/(?P<pk>\d+)$', HeroViewSet.as_view({'get': 'retrieve'})),
]
