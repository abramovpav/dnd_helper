# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-26 12:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dnd', '0005_heroinventory_items'),
    ]

    operations = [
        migrations.AddField(
            model_name='heroinventory',
            name='notes',
            field=models.TextField(blank=True, default='', max_length=2048),
        ),
    ]
