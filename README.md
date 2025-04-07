# TeamNull To-Do List App

## Overview
This is the first release of the TaskMasters To-Do List App, developed for COMP229 - Web Application Development. The app is a full-stack MERN application with user authentication, task management, theming, and modern frontend UI using React, Bootstrap, and Framer Motion.

---

## 🌟 Features
- JWT-based authentication system (Sign up, Login, Logout).
- Responsive, theme-aware UI (light/dark toggle).
- Animated transitions and page effects using Framer Motion.
- Persistent login session stored with JWT.
- RESTful API for managing tasks (Create, Read, Update, Delete).
- Profile page with token-based decoding (username and registration date).
- View all registered users (protected route).

---

## 🛠️ Technologies Used
**Frontend**:
- React + Vite
- React Router DOM
- Bootstrap 5
- Framer Motion
- JWT Decode
- React Icons

**Backend**:
- Node.js + Express
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for authentication
- body-parser
- cors

---

## 📂 Project Structure
```
📦 project-root
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # Navbar, Footer, PrivateRoute
│   │   ├── pages/        # Home, Login, Signup, Tasks, MyProfile, Users
│   │   ├── context/      # AuthContext, ThemeContext
│   │   ├── api/          # Axios instance
│   │   ├── styles/       # Home.css etc.
│   │   └── main.jsx
│   └── public/           # SVGs, images
├── models/               # User.js, Task.js
├── routes/               # authRoutes.js, taskRoutes.js
├── Server.js             # Express server and MongoDB connection
└── README.md
```

---

## 🔐 Authentication Routes
```
POST   /api/auth/register   # Register a new user
POST   /api/auth/login      # Log in and receive JWT token
GET    /api/auth/users      # Get all users (protected)
```

## ✅ Task Routes (requires token)
```
POST   /api/tasks           # Add new task
GET    /api/tasks           # List all tasks
PUT    /api/tasks/:id       # Update task
DELETE /api/tasks/:id       # Delete task
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AmirMugh/COMP229-ToDo.git
cd COMP229-ToDo
```

### 2. Install Dependencies
#### Backend:
```bash
npm install
```
##### Include the required dependencies:
```bash
npm install express mongoose bcryptjs jsonwebtoken cors body-parser
```

#### Frontend:
```bash
cd client
npm install
```
##### Includes:
```bash
npm install framer-motion react-router-dom jwt-decode bootstrap react-icons
```

### 3. Run the Project
#### Backend:
```bash
node Server.js
```
Runs at: http://localhost:3000

#### Frontend:
```bash
cd client
npm run dev
```
Runs at: http://localhost:5173

> Note: This project uses a local MongoDB instance located at:
> `mongodb://localhost:27017/todo_app`
> You can modify it inside `Server.js` if needed.
---

## 👤 Author
- Amir Mughrabi  
  [GitHub @AmirMugh](https://github.com/AmirMugh)
