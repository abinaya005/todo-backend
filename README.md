 Todo Tasks Manager

This is a simple yet functional **Todo Task Management** web application built with React, Node.js, Express, MongoDB, and Firebase Authentication. It allows users to authenticate via Google, add tasks with title and description, set task status (Pending, In Progress, Completed), and delete tasks.

## 🔧 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase (Google Auth)
- **Deployment**:
  - Frontend: Vercel
  - Backend: Localhost (for now)
- **Version Control**: Git & GitHub

 Features

- Google Login using Firebase
- Add, delete, and update status of tasks
- Task list is user-specific (based on email)
- Color-coded task cards based on status
- Responsive UI with gradient background
- Timestamp for task creation (via MongoDB)

 Screenshots

![image](https://github.com/user-attachments/assets/fc09e83f-4692-4721-a97e-585284db1f61)


 Architecture Diagram

![flowchart](https://github.com/user-attachments/assets/5ec7dee8-2515-49bd-82de-c48497c33fda)

 Assumptions

- Tasks are uniquely filtered and managed based on the authenticated user’s email.
- Each user can only see their own task list.
- This app currently runs backend locally due to render deployment issues.
- MongoDB URI is stored securely in `.env` and not exposed in the codebase.

 Running Locally

1. Clone frontend repo
   git clone https://github.com/abinaya005/todo-frontend.git
   cd todo-frontend
   npm install
   npm start
   Clone backend repo

2.Clone backend repo
git clone https://github.com/abinaya005/todo-backend.git
cd todo-backend
npm install
Configure MongoDB
Create .env in backend:

3.Configure MongoDB
PORT=5000
MONGO_URI=your_mongodb_uri
Start Backend

4.Start Backend
node server.js
Open browser
Navigate to: http://localhost:3000

5.Open browser
Live Deployment
Frontend: todo-frontend.vercel.app
Backend: Runs locally for now

 Author
Abinaya Ananthan

GitHub: @abinaya005

 This project is a part of a hackathon run by https://www.katomaran.com










