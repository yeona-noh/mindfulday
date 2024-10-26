# Generated by Django 5.0.6 on 2024-07-05 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MeditateContents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('videos', models.FileField(upload_to='media/')),
                ('length', models.CharField(choices=[('10-20 min', '10-20 min'), ('30-60 min', '30-60 min'), ('60 min and more', '60 min or longer')], default='10-20 min', max_length=20)),
            ],
        ),
    ]
