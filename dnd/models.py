from __future__ import unicode_literals

from django.contrib.auth import get_user_model
from django.db import models

from core.models import CoreSoftDeletionModel
from core.orm_utils import CoreModel
from dnd_library.constants import DEFAULT_STATS_VALUE, BASE_DEFENCE_VALUE, BASE_HP_VALUE, HeroStats
from dnd_library.models import Race, Spell, HeroClass
from dnd_library.utils import get_level_by_experience


class HeroJournalRecord(CoreModel):
    title = models.CharField(max_length=20)
    text = models.TextField(max_length=2048, blank=True)
    tags = models.CharField(max_length=128, blank=True)


class Hero(CoreSoftDeletionModel):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    age = models.SmallIntegerField(default=25)
    height = models.SmallIntegerField(default=180)
    weight = models.SmallIntegerField(default=80)
    organization = models.CharField(max_length=40, blank=True)
    race = models.ForeignKey(Race)
    hero_class = models.ForeignKey(HeroClass)

    # stats

    strength = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)
    dexterity = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)
    constitution = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)
    intelligence = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)
    wisdom = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)
    charisma = models.PositiveSmallIntegerField(default=DEFAULT_STATS_VALUE)

    # current stats

    experience = models.IntegerField(default=0)
    hit_points = models.IntegerField(default=0)
    hp_per_lvl = models.PositiveSmallIntegerField(default=0)
    hp_bonus = models.PositiveSmallIntegerField(default=0)

    # defense

    armor = models.PositiveSmallIntegerField(default=0)
    armor_modifier = models.PositiveSmallIntegerField(default=0)
    shield = models.PositiveSmallIntegerField(default=0)

    fortitude_modifier = models.PositiveSmallIntegerField(default=0)
    reflex_modifier = models.PositiveSmallIntegerField(default=0)
    will_modifier = models.PositiveSmallIntegerField(default=0)

    # other

    journal_records = models.ManyToManyField(HeroJournalRecord, related_name='heroes', blank=True)

    spells = models.ManyToManyField(Spell)

    user = models.ForeignKey(get_user_model(), related_name='heroes')

    @property
    def full_name(self):
        return (' '.join([self.first_name, self.last_name])).strip()

    @property
    def level(self):
        return get_level_by_experience(self.experience)

    @property
    def armor_class(self):
        return BASE_DEFENCE_VALUE + (self.level / 2) + self.armor + self.shield + self.armor_modifier

    @property
    def fortitude(self):
        strength_modifier = self.ability_modifier(HeroStats.STRENGTH)
        constitution_modifier = self.ability_modifier(HeroStats.CONSTITUTION)
        max_modifier = max(strength_modifier, constitution_modifier)
        return BASE_DEFENCE_VALUE + (self.level / 2) + max_modifier + self.fortitude_modifier

    @property
    def reflex(self):
        dexterity_modifier = self.ability_modifier(HeroStats.DEXTERITY)
        intelligence_modifier = self.ability_modifier(HeroStats.INTELLIGENCE)
        max_modifier = max(dexterity_modifier, intelligence_modifier)
        return BASE_DEFENCE_VALUE + (self.level / 2) + max_modifier + self.reflex_modifier + self.shield

    @property
    def will(self):
        wisdom_modifier = self.ability_modifier(HeroStats.WISDOM)
        charisma_modifier = self.ability_modifier(HeroStats.CHARISMA)
        max_modifier = max(wisdom_modifier, charisma_modifier)
        return BASE_DEFENCE_VALUE + (self.level / 2) + max_modifier + self.will_modifier

    @property
    def max_hp(self):
        return BASE_HP_VALUE + self.constitution + ((self.level - 1) * self.hp_per_lvl) + self.hp_bonus

    def ability_modifier(self, ability_name):
        return (getattr(self, ability_name, 0) - 10) / 2

    def save(self, *args, **kwargs):
        self.inventory = HeroInventory()

        return super(Hero, self).save(*args, **kwargs)

    def add_new_spell(self, spell):
        if (spell.race == self.race or spell.hero_class == self.hero_class) and spell.level <= self.level:
            # TODO: check other conditions like limits per level and others
            self.spells.add(spell)
            return True

        return False


class HeroInventory(models.Model):
    hero = models.OneToOneField('Hero', related_name='inventory')
    gold_coins = models.PositiveIntegerField(default=0)
    silver_coins = models.PositiveIntegerField(default=0)
    copper_coins = models.PositiveIntegerField(default=0)
    items = models.ManyToManyField('dnd_library.InventoryItem', related_name='inventories', blank=True)
    notes = models.TextField(max_length=2048, blank=True, default='')
