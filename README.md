# Progress Tracker

Progress Tracker is a full-stack web application for managing learning goals.  
It allows users to create, edit, and track goals through a React frontend connected to a Django REST API backend.

The project was built to practice full-stack architecture, API design, and frontend state management.

---

## Features

- Create new learning goals
- View all goals retrieved from the backend API
- Edit existing goals
- Delete goals
- Immediate UI updates after creating, editing, or deleting goals (no full re-fetch required)
- Loading state during API requests
- Error handling for failed requests
- Modular React component structure

---

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Django
- Django REST Framework

### Development Tools
- Git / GitHub
- WSL environment
- SQLite database (development)

---

## Architecture

The application follows a separated frontend/backend architecture.

React UI
↓
Axios HTTP Requests
↓
Django REST API
↓
SQLite Database


React manages UI state and communicates with the Django backend through REST API endpoints.

State updates are handled locally after successful API mutations to avoid unnecessary data re-fetching.

---

## Project Structure

frontend/
src/
components/
GoalForm.jsx
GoalList.jsx
GoalItem.jsx
App.jsx

backend/
goals/
config/


Component responsibilities:

- **GoalForm** – handles goal creation input
- **GoalList** – renders the list of goals
- **GoalItem** – displays a single goal and handles editing/deletion
- **App** – manages application state and API communication

---

## Running the Project

### Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Backend server runs on:
http://127.0.0.1:8000

---

### Frontend
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## API Endpoints
GET /api/goals/
POST /api/goals/
PATCH /api/goals/{id}/
DELETE /api/goals/{id}/

---

## Future Improvements

- Goal completion tracking
- Session logging for each goal
- User authentication
- PostgreSQL database for production
- UI styling and improved UX
