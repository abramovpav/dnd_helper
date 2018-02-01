from __future__ import unicode_literals

from django.db import models

from core.models import CoreSoftDeletionModel
from core.orm_utils import CoreModel
from dnd_library.constants import DEFAULT_STATS_VALUE, BASE_DEFENCE_VALUE, BASE_HP_VALUE
from dnd_library.models import Race
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
    # stats
    strength = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    dexterity = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    constitution = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    intelligence = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    wisdom = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    charisma = models.SmallIntegerField(default=DEFAULT_STATS_VALUE)
    # current stats
    experience = models.IntegerField(default=0)
    hit_points = models.IntegerField(default=0)
    hp_per_lvl = models.SmallIntegerField(default=0)
    hp_bonus = models.SmallIntegerField(default=0)

    armor = models.SmallIntegerField(default=0)
    armor_modifier = models.SmallIntegerField(default=0)
    shield = models.SmallIntegerField(default=0)

    fortitude_modifier = models.SmallIntegerField(default=0)
    reflex_modifier = models.SmallIntegerField(default=0)
    will_modifier = models.SmallIntegerField(default=0)

    journal_records = models.ManyToManyField(HeroJournalRecord, related_name='journals')

    @property
    def full_name(self):
        return (' '.join([self.first_name, self.last_name])).strip()

    @property
    def level(self):
        return get_level_by_experience(self.experience)  # TODO: calculate level properly

    @property
    def armor_class(self):
        return BASE_DEFENCE_VALUE + (self.level / 2) + self.armor + self.shield + self.armor_modifier

    @property
    def fortitude(self):
        return BASE_DEFENCE_VALUE + (self.level / 2) + max(self.strength, self.constitution) + self.fortitude_modifier

    @property
    def reflex(self):
        return BASE_DEFENCE_VALUE + (self.level / 2) + max(self.dexterity, self.intelligence) + self.reflex_modifier

    @property
    def will(self):
        return BASE_DEFENCE_VALUE + (self.level / 2) + max(self.wisdom, self.charisma) + self.will_modifier

    @property
    def max_hp(self):
        return BASE_HP_VALUE + self.constitution + ((self.level - 1) * self.hp_per_lvl) + self.hp_bonus
