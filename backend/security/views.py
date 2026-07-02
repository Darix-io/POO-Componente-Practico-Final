from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.views import View


class LoginPageView(View):
    template_name = "login.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect("home")
        return render(request, self.template_name, {"title": "Iniciar sesión"})

    def post(self, request, *args, **kwargs):
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "")

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")

        return render(request, self.template_name, {"title": "Iniciar sesión", "error": "Credenciales inválidas"})


class HomePageView(LoginRequiredMixin, View):
    login_url = "login"
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {"title": "Inicio", "user": request.user})


def logout_view(request):
    logout(request)
    return redirect("login")
