# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from dnd_library.models import Spell
from dnd_library.serializers import SpellSerializer


class DnDBasicViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, )  # TokenAuthentication)
    permission_classes = (IsAuthenticated, )


class SpellsViewSet(DnDBasicViewSet):
    serializer_class = SpellSerializer
    queryset = Spell.objects.all()
