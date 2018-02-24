# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-06 10:58
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0015_auto_20180206_0951'),
    ]

    operations = [
        migrations.RenameField(
            model_name='heroclass',
            old_name='base_hits',
            new_name='base_hp',
        ),
        migrations.RenameField(
            model_name='heroclass',
            old_name='healing_per_day',
            new_name='healing_count',
        ),
        migrations.RenameField(
            model_name='heroclass',
            old_name='hits_depends_on',
            new_name='hp_depends_on',
        ),
        migrations.RenameField(
            model_name='heroclass',
            old_name='hits_per_level',
            new_name='hp_per_level',
        ),
    ]