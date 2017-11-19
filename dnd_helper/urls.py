"""dnd_helper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.views import LoginView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView, RedirectView

from auth.forms import DnDAuthenticationForm
from dnd.views import DnDHelperMainView
from dnd_helper import settings
from dnd.urls import urlpatterns as dnd_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^auth/', include('auth.urls')),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/images/favicon.ico')),
    url(r'^r/login/$', LoginView.as_view(authentication_form=DnDAuthenticationForm, template_name='auth/login.html'), name='dnd-login'),
    url(r'^r/.*$', DnDHelperMainView.as_view(), name='react-application'),
    url(r'^$', TemplateView.as_view(template_name="base/index.html"))
]

urlpatterns += dnd_urls

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()

