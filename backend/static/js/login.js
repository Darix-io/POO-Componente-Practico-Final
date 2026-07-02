class ApiClient {
  constructor() {
    this.csrfToken = this.getCsrfToken();
  }

  getCsrfToken() {
    const metaToken = document.querySelector('meta[name="csrf-token"]')?.content || '';
    if (metaToken) {
      return metaToken;
    }

    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='));

    return cookieValue ? cookieValue.split('=')[1] : '';
  }

  post(url, data) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };

    if (this.csrfToken) {
      headers['X-CSRFToken'] = this.csrfToken;
    }

    return axios.post(url, data, {
      headers,
      xsrfCookieName: 'csrftoken',
      xsrfHeaderName: 'X-CSRFToken'
    }).catch((error) => {
      throw this.handleError(error);
    });
  }

  handleError(error) {
    if (error.response) {
      return new Error(error.response.data?.message || 'Error del servidor');
    }
    return new Error('No fue posible completar la solicitud');
  }
}

class AuthService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async login(email, password) {
    const response = await this.apiClient.post('/login/', { email, password });
    return response?.data?.success === true;
  }
}

class LoginController {
  constructor(authService, form, messageBox, submitButton) {
    this.authService = authService;
    this.form = form;
    this.messageBox = messageBox;
    this.submitButton = submitButton;
    this.isSubmitting = false;
  }

  bindEvents() {
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (this.isSubmitting) {
      return;
    }

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      this.showMessage('Completa todos los campos', 'danger');
      return;
    }

    this.isSubmitting = true;
    this.setLoading(true);

    try {
      const success = await this.authService.login(email, password);
      if (success) {
        window.location.href = '/';
      } else {
        this.showMessage('Credenciales inválidas', 'danger');
      }
    } catch (error) {
      this.showMessage(error.message, 'danger');
    } finally {
      this.isSubmitting = false;
      this.setLoading(false);
    }
  }

  setLoading(isLoading) {
    this.submitButton.disabled = isLoading;
    this.submitButton.querySelector('.btn-label').classList.toggle('d-none', isLoading);
    this.submitButton.querySelector('.spinner-border').classList.toggle('d-none', !isLoading);
  }

  showMessage(message, type) {
    this.messageBox.className = `alert alert-${type}`;
    this.messageBox.textContent = message;
    this.messageBox.classList.remove('d-none');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const messageBox = document.getElementById('form-message');
  const submitButton = document.getElementById('submit-btn');

  if (!form || !messageBox || !submitButton) {
    return;
  }

  const apiClient = new ApiClient();
  const authService = new AuthService(apiClient);
  const controller = new LoginController(authService, form, messageBox, submitButton);
  controller.bindEvents();
});
