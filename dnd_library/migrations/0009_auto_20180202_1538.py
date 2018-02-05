# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-02 15:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0008_auto_20180202_1533'),
    ]

    operations = [
        migrations.RenameField(
            model_name='spell',
            old_name='ability',
            new_name='attack_ability',
        ),
        migrations.RenameField(
            model_name='spell',
            old_name='attack',
            new_name='attack_again',
        ),
        migrations.RemoveField(
            model_name='spell',
            name='damage',
        ),
        migrations.AddField(
            model_name='spell',
            name='hit',
            field=models.CharField(default='1d8', max_length=128),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='spell',
            name='miss',
            field=models.CharField(default='', max_length=128),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='spell',
            name='hero_class',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='dnd_library.HeroClass'),
        ),
        migrations.AlterField(
            model_name='spell',
            name='other',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='spell',
            name='race',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='dnd_library.Race'),
        ),
    ]