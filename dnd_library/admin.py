# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from dnd_library.models import Race, HeroClass, Spell


class SpellAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'race', 'hero_class')
    list_display_links = ('id', 'name')


admin.site.register(Race)
admin.site.register(HeroClass)
admin.site.register(Spell, SpellAdmin)
