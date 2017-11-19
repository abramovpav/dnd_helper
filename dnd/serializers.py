from rest_framework import serializers

from dnd.models import Hero


class HeroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hero
        fields = serializers.ALL_FIELDS
