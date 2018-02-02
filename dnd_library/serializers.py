from rest_framework import serializers

from dnd_library.models import Spell


class SpellSerializer(serializers.ModelSerializer):
    hero_class = serializers.SerializerMethodField()
    race = serializers.SerializerMethodField()

    def get_hero_class(self, obj):
        return obj.hero_class.name if obj.hero_class else None

    def get_race(self, obj):
        return obj.race.name if obj.race else None

    class Meta:
        model = Spell
        fields = ('id', 'name', 'description', 'race', 'hero_class', 'level', 'type', 'usage_type', 'action_type',
                  'attack_type', 'range', 'keywords', 'aim', 'attack_against', 'attack_ability', 'hit',
                  'miss', 'other')
