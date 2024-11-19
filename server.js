const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Database connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users')); // User-related routes
app.use('/api/attendance', require('./routes/attendance')); // Attendance-related routes

// Default Route
app.get('/', (req, res) => {
    res.send('SSAS Backend is Running');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
