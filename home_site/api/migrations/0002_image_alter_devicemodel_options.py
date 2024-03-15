# Generated by Django 4.2.2 on 2024-03-02 18:35

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="images")),
                ("small_image", models.ImageField(upload_to="images")),
            ],
        ),
        migrations.AlterModelOptions(
            name="devicemodel",
            options={"verbose_name": "Device", "verbose_name_plural": "Devices"},
        ),
    ]
