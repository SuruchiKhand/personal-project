from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_auth import handle_login, handle_logout
from .views import *
from .openfda_api import get_openfda_data
from .reddit_api import get_reddit_data

#create Router instance
router = DefaultRouter()

#add in the views sets that will manage resource actions
router.register("drugs", DrugViewSet, basename="drug")
router.register("comments", CommentViewSet, basename="comment")
router.register("users", UserViewSet, basename="user")

#generate urls
urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
    path("openfda_api/",handle_openfda_api),
    path("reddit_api/",handle_reddit_api)

]
