# ALX_TaskManagement

Task Management App (Django + React) - README
Overview

This is a simple Task Management Application developed using Django for the backend and React for the frontend.
It allows users to perform basic CRUD operations (Create, Retrieve, Update, Delete) on tasks.

Backend Setup (Django)

1. Create and activate a virtual environment:
   python3 -m venv venv
   source venv/bin/activate

2. Install required packages:
   pip install django djangorestframework django-cors-headers

3. Create the Django project and app:
   django-admin startproject task_project
   cd task_project
   python manage.py startapp taskapi

4. Add 'rest_framework', 'corsheaders', and 'taskapi' to INSTALLED_APPS in settings.py.
5. Configure CORS and other middleware settings.
6. Create Task model in taskapi/models.py and run migrations:
   python manage.py makemigrations
   python manage.py migrate

7. Create serializers, views, and URLs for CRUD operations.
8. Start the development server:
   python manage.py runserver

Frontend Setup (React)

1. In the root folder (same level as task_project), create the React app:
   npx create-react-app task-frontend
   cd task-frontend

2. Install Axios:
   npm install axios

3. Update App.js, TaskList.js, TaskForm.js, and api.js to interact with the Django backend.
4. Start the frontend server:
   npm start

API Endpoints

- GET /api/tasks/           - List all tasks
- POST /api/tasks/          - Create a new task
- GET /api/tasks/<id>/      - Retrieve a specific task
- PUT /api/tasks/<id>/      - Update a task
- DELETE /api/tasks/<id>/   - Delete a task

Testing the API

Use Postman or curl to test API endpoints, or test through the React frontend after starting both the Django and React servers.

Common Errors & Fixes

- If React shows crypto-related error with Webpack (e.g., 'error:0308010C:digital envelope routines::unsupported'):
  Run: export NODE_OPTIONS=--openssl-legacy-provider

- Ensure CORS is properly configured to allow requests from http://localhost:3000

