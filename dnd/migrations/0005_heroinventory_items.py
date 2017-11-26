# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-26 12:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0003_inventoryitem'),
        ('dnd', '0004_auto_20171126_1219'),
    ]

    operations = [
        migrations.AddField(
            model_name='heroinventory',
            name='items',
            field=models.ManyToManyField(related_name='inventories', to='dnd_library.InventoryItem'),
        ),
    ]
