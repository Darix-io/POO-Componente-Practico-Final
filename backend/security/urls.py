from django.urls import path
from .views import HomePageView, LoginPageView, logout_view

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("login/", LoginPageView.as_view(), name="login"),
    path("logout/", logout_view, name="logout"),
]
