# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-02 14:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0007_remove_spell_class_spell'),
        ('dnd', '0013_hero_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='hero_class',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='dnd_library.HeroClass'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hero',
            name='spells',
            field=models.ManyToManyField(to='dnd_library.Spell'),
        ),
    ]
