# Generated by Django 5.0.6 on 2024-07-05 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meditate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meditatecontents',
            name='videos',
            field=models.FileField(upload_to='media/meditate/%Y/%m/%d/'),
        ),
    ]