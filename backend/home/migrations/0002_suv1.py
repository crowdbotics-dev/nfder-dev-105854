# Generated by Django 2.2.28 on 2023-07-31 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Suv1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bcncj', models.BigIntegerField()),
                ('bcdh', models.BigIntegerField()),
            ],
        ),
    ]
