# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-02 11:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_library', '0004_auto_20180202_1003'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='race',
            name='abilities',
        ),
        migrations.RemoveField(
            model_name='race',
            name='languages',
        ),
        migrations.RemoveField(
            model_name='race',
            name='skills',
        ),
    ]