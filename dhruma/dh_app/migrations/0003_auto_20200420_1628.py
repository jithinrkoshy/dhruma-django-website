# Generated by Django 2.1.5 on 2020-04-20 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dh_app', '0002_auto_20200420_1218'),
    ]

    operations = [
        migrations.AddField(
            model_name='treemodel',
            name='slide1',
            field=models.ImageField(blank=True, upload_to='tree'),
        ),
        migrations.AddField(
            model_name='treemodel',
            name='slide2',
            field=models.ImageField(blank=True, upload_to='tree'),
        ),
        migrations.AddField(
            model_name='treemodel',
            name='slide3',
            field=models.ImageField(blank=True, upload_to='tree'),
        ),
        migrations.AddField(
            model_name='treemodel',
            name='tree_info_p1',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='treemodel',
            name='tree_info_p2',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='treemodel',
            name='tree_info_p3',
            field=models.TextField(blank=True),
        ),
    ]