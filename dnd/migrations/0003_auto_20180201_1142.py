# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-01 11:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dnd', '0002_auto_20180201_1131'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='added_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hero',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
