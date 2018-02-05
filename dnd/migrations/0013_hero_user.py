# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-02 09:18
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dnd', '0012_auto_20180201_2038'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='heroes', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]