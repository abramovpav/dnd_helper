from django.conf.urls import url
from django.views.generic import TemplateView

from auth.views import AuthView
from dnd.views import HeroesViewSet

urlpatterns = [
    url(r'^api/heroes/$', HeroesViewSet.as_view({'get': 'list', 'post': 'create'}))
]
