# TeamNull To-Do List App

## Overview
This is the first release of the TaskMasters To-Do List App, developed for COMP229 - Web Application Development. The app is a RESTful API built with Node.js, Express, and MongoDB, allowing users to manage tasks with full CRUD functionality and user authentication using JWT.
### Features
- User authentication (register and login) with JWT.
- CRUD operations for tasks (Create, Read, Update, Delete).
- MongoDB database for persistent storage.
- Follows MVC architecture.
### API Endpoints

#### Authentication:
```
POST /api/auth/register - Register a new user (Body: { "username": "testuser", "password": "123" })
POST /api/auth/login - Login and get a JWT token (Body: { "username": "testuser", "password": "123" })
```
#### Tasks (Requires JWT token in Authorization: Bearer <token> header for protected routes):
```
POST /api/tasks - Create a new task (Body: { "title": "New task" }).
GET /api/tasks - Get all tasks.
GET /api/tasks/:id - Get a single task by ID.
PUT /api/tasks/:id - Update a task (Body: { "completed": true }).
DELETE /api/tasks/:id - Delete a task.
```
#### Project Structure
- Server.js - Main application file.
- controllers/ - Task controller for handling API logic.
- models/ - Mongoose models for User and Task.
- routes/ - API routes for authentication and tasks.
- middleware/ - JWT authentication middleware.## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AmirMugh/COMP229-ToDo.git
   cd COMP229-ToDo
   ```
2. **Install Dependencies**:
```bash
npm install
```
3. **Set Up Environment Variables**:
Create a .env file in the root directory.
Add the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Replace your_mongodb_connection_string with your MongoDB URI (e.g., from MongoDB Atlas).
Replace your_jwt_secret with a secure secret key for JWT (e.g., a random string).

Run the Application:
```bash
node Server.js
```
The server will run on *http://localhost:3000*.

## Notes
This project is the backend API for a To-Do List App. The frontend UI is planned for a future release.
For more details, see the **External Design Document (EDD)** submitted as part of the project deliverables.

## Authors

- [@AmirMugh](https://www.github.com/AmirMugh)

