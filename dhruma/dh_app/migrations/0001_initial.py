# Generated by Django 2.1.5 on 2020-04-20 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=264)),
                ('phone', models.CharField(max_length=264)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='TreeModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tree_class', models.CharField(max_length=264)),
                ('tree_name', models.CharField(max_length=264)),
                ('tree_pic', models.ImageField(blank=True, upload_to='tree')),
            ],
        ),
    ]
