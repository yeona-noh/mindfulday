# Generated by Django 5.0.6 on 2024-07-14 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yoga', '0003_yogacontents_thumnails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='yogacontents',
            name='thumnails',
            field=models.ImageField(default='media/media/default.jpg', upload_to='media/yoga/%Y/%m/%d'),
        ),
    ]
