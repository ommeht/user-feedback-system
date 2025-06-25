const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// const feedbackRoutes = require('./routes/feedback'); // ✅ Make sure this path is correct
const feedbackRoutes = require('./routes/feedback'); 


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ DB connection error:", err));

app.use('/feedback', feedbackRoutes); // ✅ This should be a function

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
