# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-01 20:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dnd', '0010_hero_experience'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeroJournalRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('added_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=20)),
                ('text', models.TextField(blank=True, max_length=2048)),
                ('tags', models.CharField(blank=True, max_length=128)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='hero',
            name='journal_records',
            field=models.ManyToManyField(related_name='heroes', to='dnd.HeroJournalRecord'),
        ),
    ]