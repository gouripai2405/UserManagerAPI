// Importing required packages
const express = require('express');           // Web framework
const mongoose = require('mongoose');         // MongoDB ODM
const cors = require('cors');                 // Enables cross-origin requests
require('dotenv').config();                   // Load environment variables

// Import routes
const userRoutes = require('./routes/userRoutes');

const app = express(); // ✅ Initialize app before using it

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());         // Allow CORS

// API route prefix
app.use('/api/users', userRoutes);  // All user routes start with /api/users

// Test route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');

    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
