// backend/routes/auth.js
const express = require('express');
const { getDB } = require('../db');

const router = express.Router();
const collectionName = "userss"; // Correct collection name

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = getDB(); // Correctly invoke the getDB function
    const userExists = await db.collection(collectionName).findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { username, password }; // Store username and password directly
    await db.collection(collectionName).insertOne(newUser);
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup Error:", err); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = getDB(); // Correctly invoke the getDB function
    const user = await db.collection(collectionName).findOne({ username });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    console.error("Login Error:", err); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
