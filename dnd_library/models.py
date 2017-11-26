# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from rest_framework.fields import JSONField

SMALL, MEDIUM, BIG, GIGANTIC = 'small', 'medium', 'big', 'gigantic'
VISION_CHOICES = (
    (SMALL, 'Small'),
    (MEDIUM, 'Medium'),
    (BIG, 'Big'),
    (GIGANTIC, 'Gigantic')
)


class Race(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(max_length=2048)
    size = models.CharField(max_length=7, choices=VISION_CHOICES)
    speed = models.PositiveSmallIntegerField()
    vision = models.CharField(max_length=128)
    languages = models.CharField(max_length=128)
    skills = models.CharField(max_length=128)
    abilities = models.CharField(max_length=128)
    traits = models.CharField(max_length=128)


class InventoryItem(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(max_length=512, default='')
    notes = models.TextField(max_length=512, blank=True, default='')
    data = JSONField(default={})
