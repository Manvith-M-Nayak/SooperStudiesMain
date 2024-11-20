// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');
const { connectToDB, getDB } = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000' 
}));



// Connect to MongoDB
connectToDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error("Error connecting to database:", err));

// Routes
app.use('/api/auth', require('./routes/auth'));
    