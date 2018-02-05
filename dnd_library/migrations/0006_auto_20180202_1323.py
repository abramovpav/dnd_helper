# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-02 13:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0005_auto_20180202_1103'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeroClass',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='Spell',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField(max_length=512)),
                ('level', models.PositiveSmallIntegerField(default=1)),
                ('type', models.CharField(choices=[(b'attack', b'Attack'), (b'ritual', b'Ritual'), (b'utility', b'Utility')], max_length=16)),
                ('class_spell', models.BooleanField(default=False)),
                ('usage_type', models.CharField(choices=[(b'at-will', b'At Will'), (b'daily', b'Daily'), (b'encounter', b'Encounter')], max_length=16)),
                ('action_type', models.CharField(choices=[(b'exceptions', b'Exceptions'), (b'free', b'Free'), (b'interrupt', b'Interrupt'), (b'minor', b'Minor'), (b'move', b'Move'), (b'no action', b'No Action'), (b'opportunity', b'Opportunity'), (b'standard', b'Standard')], max_length=16)),
                ('attack_type', models.CharField(choices=[(b'area_burst', b'Area Burst'), (b'blast', b'Blast'), (b'close_burst', b'Close Burst'), (b'personal', b'Personal'), (b'ranged', b'Ranged'), (b'touch', b'Touch'), (b'wall', b'Wall'), (b'weapon', b'Weapon')], max_length=16)),
                ('range', models.CharField(max_length=16)),
                ('keywords', models.CharField(blank=True, max_length=128)),
                ('hero_class', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='dnd_library.HeroClass')),
            ],
        ),
        migrations.AlterField(
            model_name='race',
            name='size',
            field=models.CharField(choices=[(b'big', b'Big'), (b'gigantic', b'Gigantic'), (b'medium', b'Medium'), (b'small', b'Small')], max_length=7),
        ),
        migrations.AlterField(
            model_name='race',
            name='vision',
            field=models.CharField(choices=[(b'dark', b'Dark Vision'), (b'low-light', b'Low Light Vision'), (b'normal', b'Normal Vision')], max_length=128),
        ),
        migrations.AddField(
            model_name='spell',
            name='race',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='dnd_library.Race'),
        ),
    ]