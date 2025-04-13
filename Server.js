require('dotenv').config();
const app = express();
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');


const corsOptions = {
  origin: "https://todoapp-bay-nu.vercel.app",
  credentials: true
};

app.use(cors(corsOptions)); // Enable CORS
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Route handlers
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Optional default route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List App API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
