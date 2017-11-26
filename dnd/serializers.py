from rest_framework import serializers

from dnd.models import Hero, HeroInventory


class HeroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hero
        fields = serializers.ALL_FIELDS


class InventorySerializer(serializers.ModelSerializer):

    class Meta:
        model = HeroInventory
        fields = serializers.ALL_FIELDS


class FullHeroSerializer(serializers.ModelSerializer):

    inventory = InventorySerializer()

    class Meta:
        model = Hero
        fields = serializers.ALL_FIELDS
