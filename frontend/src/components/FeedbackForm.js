import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

export default function FeedbackForm() {
  const [form, setForm] = useState({ userName: '', email: '', feedbackText: '', category: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/feedback', form);
    alert('Feedback submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input name="userName" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="feedbackText" placeholder="Feedback" onChange={handleChange} required />
      <select name="category" onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="bug">Bug</option>
        <option value="suggestion">Suggestion</option>
        <option value="feature">Feature Request</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
