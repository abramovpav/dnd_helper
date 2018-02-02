from django.conf.urls import url

from dnd_library.views import SpellsViewSet

urlpatterns = [
    url(r'^api/spells/$', SpellsViewSet.as_view({'get': 'list'}))
]

