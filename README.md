# User Feedback System

A full-stack web application that collects user feedback using a React frontend, stores it with a Node.js and Express backend, and saves data in MongoDB.

---

## 🚀 Features

- Submit feedback via a form  
- Save feedback to MongoDB  
- View all submitted feedback entries  
- Categorize feedback (e.g., Bug, Suggestion, Feature Request)

---

## 🛠 Tech Stack

- **Frontend**: React, Axios  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (with Mongoose)  

---

## ▶️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/ommeht/user-feedback-system.git
cd user-feedback-system
2. Setup and Run the Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend folder with the following:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/feedbackdb
PORT=5000
Then run the backend server:

bash
Copy
Edit
node app.js
3. Setup and Run the Frontend
In a new terminal window:

bash
Copy
Edit
cd frontend
npm install
npm start
The React app will open in your browser at:
http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
POST	/feedback	Submit new feedback
GET	/feedback	Get all feedback

📁 Folder Structure
sql
Copy
Edit
user-feedback-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── .env
├── frontend/
│   └── src/
│       ├── components/
│       └── App.js
└── README.md


👤 Author
Om Mehta
📧 ommehta708@gmail.com
