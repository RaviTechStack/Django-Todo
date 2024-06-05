from django.db import models

# Create your models here.
class todo(models.Model):
    todoId = models.AutoField(primary_key= True, null=False)
    todoContent = models.CharField(max_length=255, null=False)