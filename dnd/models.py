from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Hero(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    age = models.SmallIntegerField(default=25)
    height = models.SmallIntegerField(default=180)
    weight = models.SmallIntegerField(default=80)
    organization = models.CharField(max_length=40)
