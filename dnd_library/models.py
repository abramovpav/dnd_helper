# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.postgres.fields import JSONField
from django.db import models

from dnd_library.constants import CreatureSize, CreatureVision, SpellUsageType, ActionType, RangeType, SpellType


class Race(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(max_length=2048)
    size = models.CharField(max_length=7, choices=CreatureSize.choices())
    speed = models.PositiveSmallIntegerField()
    vision = models.CharField(max_length=128, choices=CreatureVision.choices())
    traits = models.CharField(max_length=128)
    features = JSONField(default={})

    @property
    def abilities(self):
        return self.features.get('abilities', {})

    @property
    def languages(self):
        return self.features.get('languages', [])

    @property
    def skills(self):
        return self.features.get('skills', {})

    def __str__(self):
        return u'<Race: {0}>'.format(self.name)

    def __unicode__(self):
        return u'<Race: {0}>'.format(self.name)


class HeroClass(models.Model):
    name = models.CharField(max_length=16)

    def __str__(self):
        return u'<HeroClass: {0}>'.format(self.name)

    def __unicode__(self):
        return u'<HeroClass: {0}>'.format(self.name)


class InventoryItem(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(max_length=512, default='')
    notes = models.TextField(max_length=512, blank=True, default='')
    data = JSONField(default={})


class Spell(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(max_length=512)
    race = models.ForeignKey(Race, null=True, blank=True)
    hero_class = models.ForeignKey(HeroClass, null=True, blank=True)
    level = models.PositiveSmallIntegerField(default=1)
    type = models.CharField(max_length=16, choices=SpellType.choices())
    usage_type = models.CharField(max_length=16, choices=SpellUsageType.choices())
    action_type = models.CharField(max_length=16, choices=ActionType.choices())
    attack_type = models.CharField(max_length=16, choices=RangeType.choices())
    range = models.CharField(max_length=16)
    keywords = models.CharField(max_length=128, blank=True)
    aim = models.CharField(max_length=64)
    attack_against = models.CharField(max_length=16)
    attack_ability = models.CharField(max_length=16)
    hit = models.CharField(max_length=128)
    miss = models.CharField(max_length=128, null=True, blank=True)
    other = models.TextField(max_length=512, blank=True)

    def __str__(self):
        return u'<Spell: {0}>'.format(self.name)

    def __unicode__(self):
        return u'<Spell: {0}>'.format(self.name)



