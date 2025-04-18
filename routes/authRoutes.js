const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register a new user
router.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({ username: req.body.username, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !await bcrypt.compare(req.body.password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // ✅ Refetch to ensure createdAt is included
  const freshUser = await User.findById(user._id);

  const token = jwt.sign({
    id: freshUser._id,
    username: freshUser.username,
    createdAt: freshUser.createdAt?.toISOString() || new Date().toISOString()
  }, 'secret_key', { expiresIn: '1h' });

  res.json({ token });
});

// Get all users (protected)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username _id');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

module.exports = router;