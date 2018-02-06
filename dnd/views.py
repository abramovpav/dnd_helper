from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.urls import reverse
from django.views.generic import TemplateView
from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from dnd.models import Hero
from dnd.serializers import HeroSerializer, FullHeroSerializer, CommitDamageSerializer, CommitHealSerializer, \
    HeroRestSerializer, CommitTmpHpBonusSerializer
from dnd_library.constants import RestType
from dnd_library.serializers import SpellSerializer


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


class DnDBasicViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, )  # TokenAuthentication)
    permission_classes = (IsAuthenticated, )


class HeroesViewSet(DnDBasicViewSet):
    serializer_class = HeroSerializer

    def get_queryset(self):
        return Hero.objects.filter(user=self.request.user)


class HeroViewSet(DnDBasicViewSet):
    serializer_class = FullHeroSerializer

    def get_queryset(self):
        return Hero.objects.filter(user=self.request.user)

    def spells_list(self, request, pk):
        hero = self.get_object()
        queryset = self.filter_queryset(hero.spells.all())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = SpellSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = SpellSerializer(queryset, many=True)
        return Response(serializer.data)

    def apply_rest(self, request, pk):
        hero = self.get_object()
        serializer = HeroRestSerializer(instance=hero, data=request.data)
        serializer.is_valid(raise_exception=True)
        hero = serializer.save()

        serializer = self.get_serializer(hero)
        return Response(serializer.data)

    def apply_damage(self, request, pk):
        hero = self.get_object()
        serializer = CommitDamageSerializer(instance=hero, data=request.data)
        serializer.is_valid(raise_exception=True)
        hero = serializer.save()
        return Response({
            'committedDamage': serializer.validated_data['damage_value'],
            'totalDamage': hero.damage_taken,
        })

    def apply_heal(self, request, pk):
        hero = self.get_object()
        serializer = CommitHealSerializer(instance=hero, data=request.data)
        serializer.is_valid(raise_exception=True)
        hero = serializer.save()
        return Response({
            'committedHeal': serializer.validated_data['heal_value'],
            'totalDamage': hero.damage_taken,
            'healings_used': hero.healings_used,
        })

    def apply_tmp_hp(self, request, pk):
        hero = self.get_object()
        serializer = CommitTmpHpBonusSerializer(instance=hero, data=request.data)
        serializer.is_valid(raise_exception=True)
        hero = serializer.save()
        return Response({
            'committedHPBonus': serializer.validated_data['tmp_hp_value'],
            'totalTmpBonus': hero.hp_tmp_bonus,
        })
