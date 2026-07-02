# Modelo QR UNEMI

Sistema de control de acceso mediante códigos QR para la UNEMI.

## Stack tecnológico
- Backend: Django 6 + Python 3.12
- Base de datos: MySQL 8
- Frontend: React/Vite (por definir en sprints posteriores)
- Gestión de variables: python-decouple

## Requisitos previos
- Python 3.12
- MySQL 8 en funcionamiento
- Entorno virtual activado

## Instalación y ejecución
1. Crear y activar el entorno virtual:
   - python -m venv .venv
   - .venv\Scripts\activate
2. Instalar dependencias:
   - pip install -r requirements.txt
3. Crear un archivo .env basado en .env.example
4. Crear la base de datos en MySQL
5. Ejecutar migraciones:
   - python manage.py migrate
6. Iniciar el servidor:
   - python manage.py runserver

## Estado del Sprint 1
- Estructura base del repositorio creada
- Configuración de entorno y variables de entorno lista
- Conexión con MySQL verificada
- Migraciones iniciales aplicadas

## Documentación adicional
- Ver [ROADMAP.md](ROADMAP.md) para el plan de los 11 sprints.
- Ver [BACKLOG.md](BACKLOG.md) para el Product Backlog con 7 historias de usuario, estimaciones y tablero sugerido.
- Ver [docs/uml/README.md](docs/uml/README.md) para el modelado UML del Sprint 3.
- Ver [docs/informe-sprint3.md](docs/informe-sprint3.md) para la sección del informe sobre modelado UML.
