from django.urls import reverse
from django.views.generic import TemplateView
from rest_framework.response import Response
# Create your views here.
from rest_framework.views import APIView

from dnd_helper.settings import STATIC_URL


class AuthView(APIView):

    def get(self, request):
        return Response('Hello')


class DnDHelperMainView(TemplateView):  #, LoginRequiredMixin):
    template_name = 'react/index.html'

    # def get_login_url(self):
    #     return reverse('login')

    def get_context_data(self, **kwargs):
        ctx = {
            'BASE_URL': reverse('react-application'),
            'STATIC_URL': STATIC_URL,
        }
        kwargs.update(ctx)
        return super(DnDHelperMainView, self).get_context_data(**kwargs)

