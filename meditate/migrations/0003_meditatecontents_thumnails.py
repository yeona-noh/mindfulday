# Generated by Django 5.0.6 on 2024-07-14 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meditate', '0002_alter_meditatecontents_videos'),
    ]

    operations = [
        migrations.AddField(
            model_name='meditatecontents',
            name='thumnails',
            field=models.ImageField(default='media/default.jpg', upload_to='media/meditate/%Y/%m/%d'),
        ),
    ]
