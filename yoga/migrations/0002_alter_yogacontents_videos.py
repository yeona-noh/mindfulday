# Generated by Django 5.0.6 on 2024-07-05 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yoga', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='yogacontents',
            name='videos',
            field=models.FileField(upload_to='media/yoga/%Y/%m/%d/'),
        ),
    ]