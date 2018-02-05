from rest_framework import serializers

from dnd.models import Hero, HeroInventory
from dnd_helper import settings
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
                  'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'experience', 'damage_taken',
                  'hp_per_lvl', 'hp_permanent_bonus', 'hp_tmp_bonus', 'armor', 'armor_modifier', 'shield',
                  'fortitude_modifier', 'reflex_modifier', 'will_modifier', 'full_name', 'level', 'armor_class',
                  'fortitude', 'reflex', 'will', 'max_hp', 'inventory')


class CommitDamageSerializer(serializers.Serializer):
    # TODO: validate damage
    damage_value = serializers.IntegerField(min_value=0, max_value=settings.MAX_DAMAGE_TO_HERO)

    def update(self, instance, validated_data):
        damage_value = validated_data['damage_value']

        instance.damage_taken += damage_value
        instance.save()
        return instance
