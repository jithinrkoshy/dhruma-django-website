# Generated by Django 2.1.5 on 2020-04-20 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dh_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message',
            field=models.TextField(max_length=264),
        ),
    ]
