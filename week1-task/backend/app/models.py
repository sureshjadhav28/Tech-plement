from django.db import models

# Create your models here.
class Quote(models.Model):
    author = models.CharField(max_length=100)
    quote = models.TextField(max_length=1000)