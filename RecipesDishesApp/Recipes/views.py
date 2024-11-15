from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .models import *

class RecipeViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer

class CategoryViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Recipes.objects.values('category').distinct()
    serializer_class = CategorySerializer

# Create your views here.
