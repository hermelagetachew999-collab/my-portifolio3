const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// POST: Save a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// GET: Fetch all messages (for admin view later)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;