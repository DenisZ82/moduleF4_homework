from django.db import models


class Recipes(models.Model):

    CATEGORY = [
        ('Первые блюда', 'Первые блюда'),
        ('Вторые блюда', 'Вторые блюда'),
        ('Закуски', 'Закуски'),
        ('Салаты', 'Салаты'),
        ('Десерты', 'Десерты'),
    ]

    name = models.CharField(max_length=128, verbose_name='Название')
    text = models.TextField(verbose_name='Рецепт')
    category = models.CharField(max_length=32, choices=CATEGORY, verbose_name='Категория')

    def __str__(self):
        return f'{self.name} | {self.category}'

# Create your models here.
