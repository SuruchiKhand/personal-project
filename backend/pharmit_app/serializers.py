
from rest_framework import serializers 
from django.contrib.auth.hashers import make_password
from .models import *


class DrugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drug
        fields = ["id", "name", "creator"]
    
    creator = serializers.PrimaryKeyRelatedField(read_only=True)
    
    def perform_create(self, instance):
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id","user", "drug","body", "created_date" ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)

      
    

