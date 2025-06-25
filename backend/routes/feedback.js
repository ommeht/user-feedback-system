const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    console.log("📥 Received data:", req.body);

    const { userName, email, feedbackText, category } = req.body;

    if (!userName || !email || !feedbackText) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ error: "Required fields missing" });
    }

    const feedback = new Feedback({ userName, email, feedbackText, category });
    await feedback.save();

    res.status(201).json({ message: 'Feedback saved successfully' });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Error fetching feedback:", err.message);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
