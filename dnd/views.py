from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
from django.urls import reverse
from django.views.generic import TemplateView
from rest_framework import viewsets

from dnd.models import Hero
from dnd.serializers import HeroSerializer, FullHeroSerializer


class DnDHelperMainView(LoginRequiredMixin, TemplateView):
    template_name = 'react/index.html'

    def get_login_url(self):
        return reverse('dnd-login')

    def get_context_data(self, **kwargs):
        ctx = {
            'BASE_URL': reverse('react-application')
        }
        kwargs.update(ctx)
        return super(DnDHelperMainView, self).get_context_data(**kwargs)


# api
class HeroesViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = FullHeroSerializer
