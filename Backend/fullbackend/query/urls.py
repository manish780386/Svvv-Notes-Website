from django.urls import path
from .views import create_query

urlpatterns = [
    path("query/", create_query),
]
