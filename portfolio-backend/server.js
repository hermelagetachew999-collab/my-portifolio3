const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors()); // Allow front-end to connect
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
   // Parse JSON bodies
// ... (after app.use(express.json()))
const contactRoutes = require('./routes/contacts');
app.use('/api/contacts', contactRoutes);
// Connect to MongoDB

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));