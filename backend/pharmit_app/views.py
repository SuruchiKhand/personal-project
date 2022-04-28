from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .views_auth import handle_login, handle_logout
from .openfda_api import get_openfda_data
from .reddit_api import get_reddit_data
from django.http import HttpResponse

# viewsets are DRW magic
# viewssets will handle incoming requests from the client, process them and send JSON responses
# handles list, create, detail, update, partial update, delete

class DrugViewSet(ModelViewSet):
    queryset = Drug.objects.all()
    serializer_class = DrugSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)
        

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# this method exists in ModelViewSet or below
    def get_permissions(self):  
        if self.request.method == "POST":
            return(permissions.AllowAny(),)
        elif self.request.method == "PATCH":
            return(permissions.IsAuthenticated(),)
        return (permissions.IsAdminUser(),)
    
#Third Party Apis

def handle_openfda_api(requests):
    print("I am here")
    if requests.method == "GET":
        params = requests.GET

        try:
            date = params['date']
            print ( "params:", params)
            data = get_openfda_data(date,10)
            print("DATA",data)
            return HttpResponse(data,status=200)
        except Exception as e:
            print("exception",e)
            return HttpResponse("Something wrong: ", e,status=400)

def handle_reddit_api(requests):
    print("I am here inisde reddit api")
    if requests.method == "GET":
        params = requests.GET

        try:
            query = params['q']
            print ( "params:", params)
            data = get_reddit_data(query,5)
            print("DATA",data)
            return HttpResponse(data,status=200)
        except Exception as e:
            print("exception",e)
            return HttpResponse("Something wrong: ", e,status=400)