# Generated by Django 5.1.3 on 2024-11-10 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Название')),
                ('text', models.TextField(verbose_name='Рецепт')),
                ('category', models.CharField(choices=[('Первые блюда', 'Первые блюда'), ('Вторые блюда', 'Вторые блюда'), ('Закуски', 'Закуски'), ('Салаты', 'Салаты'), ('Десерты', 'Десерты')], max_length=32, verbose_name='Категория')),
            ],
        ),
    ]
