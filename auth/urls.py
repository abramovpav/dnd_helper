from django.conf.urls import url
from django.views.generic import TemplateView

from auth.views import AuthView

urlpatterns = [
    url(r'login$', AuthView.as_view())
]