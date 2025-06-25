

const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userName: String,
  email: String,
  feedbackText: String,
  category: String,
  timestamp: { type: Date,
              default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);


