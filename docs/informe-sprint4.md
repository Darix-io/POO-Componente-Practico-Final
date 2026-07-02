# Informe Sprint 4 - Frontend de autenticación y experiencia de usuario

## Objetivo
Mejorar la experiencia del login con un diseño responsive, accesible y preparado para una arquitectura modular del frontend.

## Cambios realizados
- Se implementó un layout split-screen con branding institucional UNEMI en la parte izquierda.
- Se reforzó la accesibilidad del formulario con etiquetas, roles ARIA y mensajes de error visibles.
- Se añadió un diseño responsive para dispositivos móviles.
- Se creó una clase ApiClient con Axios para centralizar las peticiones HTTP y los encabezados CSRF.
- Se añadió AuthService para encapsular la lógica de autenticación.
- Se implementó LoginController para validar, bloquear doble submit y gestionar el estado de carga.
- Se documentaron los principios SOLID aplicados en esta capa: Single Responsibility, Dependency Inversion y Open/Closed.

## Principios SOLID aplicados
- Single Responsibility: ApiClient, AuthService y LoginController tienen responsabilidad única.
- Dependency Inversion: el controlador depende de una abstracción de servicio y no de la implementación concreta.
- Open/Closed: el flujo puede ampliarse con nuevos comportamientos sin modificar la lógica central del controlador.

## Checklist final
- [x] Layout split-screen Bootstrap 5
- [x] Branding UNEMI a la izquierda
- [x] Formulario accesible con ARIA
- [x] Responsive móvil
- [x] Clase ApiClient con Axios
- [x] post(url, data) con headers CSRF
- [x] Manejo centralizado de errores
- [x] Clase AuthService con login(email, password)
- [x] Manejo de respuesta true/false
- [x] Clase LoginController con validación, spinner y doble submit
- [x] login.css y app.css
- [x] Documentación SOLID en el informe
- [x] Checklist final del sprint
