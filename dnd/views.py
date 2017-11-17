from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render

# Create your views here.
from django.urls import reverse
from django.views.generic import TemplateView

from dnd_helper.settings import STATIC_URL


class DnDHelperMainView(LoginRequiredMixin, TemplateView):
    template_name = 'react/index.html'

    def get_login_url(self):
        return reverse('dnd-login')

    def get_context_data(self, **kwargs):
        ctx = {
            'BASE_URL': reverse('react-application'),
            'STATIC_URL': STATIC_URL,
        }
        kwargs.update(ctx)
        return super(DnDHelperMainView, self).get_context_data(**kwargs)
