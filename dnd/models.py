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
    strength = models.PositiveSmallIntegerField()
    constitution = models.PositiveSmallIntegerField()
    agility = models.PositiveSmallIntegerField()
    intelligence = models.PositiveSmallIntegerField()
    wisdom = models.PositiveSmallIntegerField()
    charisma = models.PositiveSmallIntegerField()
    ability_points = models.PositiveSmallIntegerField()
    current_hp = models.PositiveSmallIntegerField(default=1)

    def save(self, *args, **kwargs):
        self.inventory = HeroInventory()

        return super(Hero, self).save(*args, **kwargs)


class HeroInventory(models.Model):
    hero = models.OneToOneField('Hero', related_name='inventory')
    gold_coins = models.PositiveIntegerField(default=0)
    silver_coins = models.PositiveIntegerField(default=0)
    copper_coins = models.PositiveIntegerField(default=0)
    items = models.ManyToManyField('dnd_library.InventoryItem', related_name='inventories')
    notes = models.TextField(max_length=2048, blank=True, default='')
