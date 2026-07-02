import json

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse


class UserModelTests(TestCase):
    def test_create_user_with_email(self):
        User = get_user_model()
        user = User.objects.create_user(email="test@example.com", password="12345678")

        self.assertEqual(user.email, "test@example.com")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(email="admin@example.com", password="12345678")

        self.assertEqual(admin_user.email, "admin@example.com")
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)


class LoginApiTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(email="login@example.com", password="12345678")

    def test_login_page_renders(self):
        response = self.client.get(reverse("login"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Iniciar sesión")

    def test_json_login_returns_success_for_valid_credentials(self):
        response = self.client.post(
            reverse("login"),
            data=json.dumps({"email": "login@example.com", "password": "12345678"}),
            content_type="application/json",
            HTTP_X_REQUESTED_WITH="XMLHttpRequest",
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

    def test_json_login_returns_error_for_invalid_credentials(self):
        response = self.client.post(
            reverse("login"),
            data=json.dumps({"email": "login@example.com", "password": "wrong-password"}),
            content_type="application/json",
            HTTP_X_REQUESTED_WITH="XMLHttpRequest",
        )

        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
