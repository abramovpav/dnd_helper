# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-19 21:15
from __future__ import unicode_literals

from django.core.management import call_command
from django.db import migrations


def load_fixture(apps, schema_editor):
    call_command('loaddata', 'races_0.json')


def unload_fixture(apps, schema_editor):
    Race = apps.get_model("dnd_library", "Race")
    Race.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_fixture, unload_fixture)
    ]