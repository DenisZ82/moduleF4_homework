from .models import *
from rest_framework import serializers


class RecipesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'name', 'text', 'category']


class NameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'name', 'category']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipes
        fields = ['category']
