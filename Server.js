const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_app')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Route handlers
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Optional default route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List App API!');
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
