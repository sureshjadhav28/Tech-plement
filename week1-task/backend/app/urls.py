from django.urls import path
from app import views

urlpatterns = [
    path('quote/',views.Quotelist.as_view(),)
]