# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-06 14:50
from __future__ import unicode_literals

from django.core.management import call_command
from django.db import migrations


def load_fixture(apps, schema_editor):
    call_command('loaddata', 'heroclass_1.json')
    call_command('loaddata', 'spells_0.json')


def unload_fixture(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0016_auto_20180206_1058'),
    ]

    operations = [
        migrations.RunPython(load_fixture, unload_fixture)
    ]