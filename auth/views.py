from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView
from rest_framework.decorators import api_view

from rest_framework.response import Response

# Create your views here.
from rest_framework.views import APIView

from dnd_helper.settings import STATIC_URL


class AuthView(APIView):

    def get(self, request):
        return Response('Hello')


class StudyLandingView(TemplateView):  #, LoginRequiredMixin):
    template_name = 'react/index.html'

    # def get_login_url(self):
    #     return reverse('study-login')

    # def get_resources_context_types(self):
    #     content_types_dict = ContentType.objects.get_for_models(Worksheet, Video, Game)
    #     return {
    #         model.__name__: ctype.id for model, ctype in content_types_dict.iteritems()
    #     }

    def get_context_data(self, **kwargs):
        ctx = {
            # 'GRADES': GRADES.as_dict,
            # 'CATEGORIES': CATEGORIES.as_dict,
            # 'TOPICS': TOPICS.as_dict,
            # 'TOPICS_MAPPING': {}, # TOPICS_MAPPING.as_dict
            # 'RESOURCE_CONTENT_TYPES': self.get_resources_context_types()
            'BASE_URL': reverse('study'),
            'STATIC_URL': STATIC_URL,
        }
        kwargs.update(ctx)
        return super(StudyLandingView, self).get_context_data(**kwargs)

