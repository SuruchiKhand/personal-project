from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Drug(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    creator = models.ForeignKey(User,on_delete=models.CASCADE, related_name="drugs", null="True", default=None)
    

    def __str__(self):
        return f"DRUG: {self.name}"
        
class Comment(models.Model):
    user = models.CharField(max_length=100)
    drug = models.ForeignKey(Drug, on_delete=models.CASCADE,related_name='comments')
    body = models.CharField(max_length=5000)
    created_date = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"COMMENT: {self.body}"