from django.contrib import admin

# Register your models here.
from dnd.models import Hero, HeroInventory


class HeroInventoryInline(admin.StackedInline):
    model = HeroInventory


class HeroAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name')
    list_display_links = ('id', 'first_name', 'last_name')
    inlines = (HeroInventoryInline, )


admin.site.register(Hero, HeroAdmin)
