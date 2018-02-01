from rest_framework import serializers

from dnd.models import Hero, HeroInventory
from dnd_library.models import Race


class InventorySerializer(serializers.ModelSerializer):

    class Meta:
        model = HeroInventory
        fields = serializers.ALL_FIELDS


class HeroSerializer(serializers.ModelSerializer):
    race = serializers.SerializerMethodField()

    def get_race(self, obj):
        return obj.race.name

    class Meta:
        model = Hero
        fields = ('id', 'full_name', 'race', 'level', 'experience', 'race')


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ('id', 'name', 'size', 'speed', 'vision')


class FullHeroSerializer(serializers.ModelSerializer):
    race = RaceSerializer()
    inventory = InventorySerializer()

    class Meta:
        model = Hero
        fields = ('id', 'first_name', 'last_name', 'age', 'height', 'weight', 'organization', 'race', 'strength',
                  'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'experience', 'hit_points',
                  'hp_per_lvl', 'hp_bonus', 'armor', 'armor_modifier', 'shield', 'fortitude_modifier',
                  'reflex_modifier', 'will_modifier', 'full_name', 'level', 'armor_class', 'fortitude', 'reflex',
                  'will', 'max_hp', 'inventory')

