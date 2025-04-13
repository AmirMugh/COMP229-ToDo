# ✅ TaskMaster - TeamNull To-Do List App

> Final Submission for **COMP229 – Web Application Development**  
> By Amir Mughrabi ([GitHub @AmirMugh](https://github.com/AmirMugh))

---

## 📌 Overview

**TaskMaster** is a full-featured productivity app allowing users to manage daily tasks efficiently with secure login, user management, and persistent cloud-based data storage.
---

## 🌐 Deployment Links

- 🔗 **Frontend (Vercel)**: https://todoapp-bay-nu.vercel.app  
- 🔗 **Backend (Render)**: https://taskmaster-api-w0br.onrender.com

> MongoDB Atlas cluster is whitelisted to accept cloud deployment requests.
---

## 🌟 Features

### 🌐 Frontend
- 🎯 Responsive UI with Bootstrap 5 and Framer Motion
- 🔐 JWT Auth – Login & Sign Up with persistent token
- 🌗 Dark / 🌞 Light theme toggle
- ✅ Task Management – Add, edit, delete, complete
- 👤 Profile Page – See your username and signup date
- 👥 Users Page – View all users (admin-style)
- 🌀 Smooth scroll, animated sections, and SVG illustrations

### 🧠 Backend (API)
- RESTful Express API
- JWT-based Authentication
- Secure Passwords with bcrypt
- MongoDB with Mongoose (timestamps enabled)
- MVC architecture

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
- bcryptjs
- jsonwebtoken
- body-parser
- cors
- dotenv

---

## 📂 Folder Structure
```
📦 project-root
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # Navbar, Footer, PrivateRoute
│   │   ├── pages/        # Home, Login, Signup, Tasks, MyProfile, Users
│   │   ├── context/      # AuthContext, ThemeContext
│   │   ├── api/          # Axios instance
│   │   ├── styles/       # CSS files
│   │   └── main.jsx
│   └── public/           # SVGs, images
├── models/               # user.js, task.js
├── routes/               # authRoutes.js, taskRoutes.js
├── Server.js             # Express backend with API routes
├── .env                  # Environment variables
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

### 2. Environment Configuration
Create a `.env` file in the root:
```
MONGO_URI=mongodb+srv://<your-user>:<your-pass>@cluster0.mongodb.net/todo_app?retryWrites=true&w=majority
JWT_SECRET=yourStrongSecret
PORT=3000
```

### 3. Install Dependencies

#### Backend:
```bash
npm install
```

#### Frontend:
```bash
cd client
npm install
```

### 4. Run Locally

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

---

## 👤 Author
- Amir Mughrabi  
  [GitHub @AmirMugh](https://github.com/AmirMugh)