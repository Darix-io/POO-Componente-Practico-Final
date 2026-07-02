# Product Backlog - Modelo QR UNEMI

## Historias de Usuario

### HU1 - Iniciar sesión en el sistema
Como administrador, quiero iniciar sesión en el sistema para acceder a las funciones de gestión.
- Prioridad: Alta
- Puntos: 3
- Horas estimadas: 8
- Criterios de aceptación:
  - El usuario puede ingresar correo y contraseña.
  - El sistema valida credenciales.
  - Se muestra un mensaje de error si las credenciales son inválidas.

### HU2 - Registrar usuarios del sistema
Como administrador, quiero registrar usuarios para controlar su acceso al campus.
- Prioridad: Alta
- Puntos: 5
- Horas estimadas: 12
- Criterios de aceptación:
  - Se pueden crear usuarios con datos básicos.
  - El sistema guarda la información correctamente.
  - El usuario queda disponible para asignación de acceso.

### HU3 - Generar código QR para un usuario
Como administrador, quiero generar un código QR asociado a un usuario para habilitar su acceso.
- Prioridad: Alta
- Puntos: 5
- Horas estimadas: 12
- Criterios de aceptación:
  - El sistema genera un QR único por usuario.
  - El QR se puede visualizar y descargar.
  - El QR queda asociado al registro correspondiente.

### HU4 - Registrar entrada o salida mediante QR
Como usuario, quiero escanear mi QR para registrar mi ingreso o salida del recinto.
- Prioridad: Alta
- Puntos: 8
- Horas estimadas: 16
- Criterios de aceptación:
  - El sistema detecta el QR escaneado.
  - Se registra el evento de acceso correctamente.
  - Se guarda la fecha y hora de la acción.

### HU5 - Consultar historial de accesos
Como administrador, quiero ver el historial de accesos para revisar entradas y salidas.
- Prioridad: Media
- Puntos: 5
- Horas estimadas: 10
- Criterios de aceptación:
  - Se listan los registros de acceso.
  - Se pueden filtrar por fecha o usuario.
  - La información se muestra de forma clara.

### HU6 - Visualizar dashboard de control
Como administrador, quiero ver un panel con métricas básicas para monitorear el sistema.
- Prioridad: Media
- Puntos: 3
- Horas estimadas: 8
- Criterios de aceptación:
  - Se muestra un resumen de usuarios y accesos.
  - El dashboard carga correctamente.
  - La información es actualizada desde la base de datos.

### HU7 - Gestionar permisos y estados de usuarios
Como administrador, quiero activar o desactivar usuarios y asignar permisos para controlar quién puede entrar.
- Prioridad: Media
- Puntos: 5
- Horas estimadas: 10
- Criterios de aceptación:
  - Se puede cambiar el estado del usuario.
  - Se pueden administrar permisos básicos.
  - Los cambios quedan guardados correctamente.

## Priorización sugerida
1. HU1 - Inicio de sesión
2. HU2 - Registro de usuarios
3. HU3 - Generación de QR
4. HU4 - Registro de acceso
5. HU5 - Historial de accesos
6. HU6 - Dashboard
7. HU7 - Gestión de permisos

## Propuesta de tablero en Jira/Trello
Columnas recomendadas:
- Backlog
- Por hacer
- En progreso
- En revisión
- Hecho

## Recomendación de flujo
- Cada HU debe dividirse en tareas técnicas más pequeñas.
- Se recomienda mover una HU a “En progreso” solo cuando tenga un responsable claro.
- Para Jira, usar etiquetas como: backend, frontend, auth, qr, access, dashboard.
