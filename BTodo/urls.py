from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index),
    path("addtodo", views.addtodo),
    path("update/<id>", views.update),
    path("delete/<id>", views.delete),
    path("retreive/<id>", views.new_update),
    path("addtod", views.adding)
]