# CRUD Courses & Users - Login/Signin API

A Node.js REST API for managing courses and user authentication (signup & login) with MongoDB.  
Built with **Express**, **Mongoose**, and secure environment variables using **dotenv**.

---

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for REST APIs
- **MongoDB & Mongoose** - Database & ODM
- **dotenv** - Environment variable management
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **nodemon** (dev) - Auto-restart server during development

---

## 📂 Project Structure

├── controller/ # API controllers for users and courses
├── model/ # Mongoose schemas
├── routers/ # Express routers
├── middleware/ # Auth and error handling middlewares
├── uploads/ # File uploads (optional)
├── index.js # Main entry point
├── package.json
├── .env # Environment variables(not committed)
└── README.md



---

## 🚀 Features

- **User Authentication**
  - Signup and Login
  - Password hashing
  - JWT-based authentication

- **Courses Management**
  - CRUD operations (Create, Read, Update, Delete)
  - Protected routes for authenticated users

- **Error Handling**
  - Middleware for handling 404 and server errors
  - Consistent JSON responses

- **Deployment Ready**
  - Dynamic PORT for cloud platforms (Railway, Render)
  - Configurable environment variables

---

## ⚙️ Setup

1. Clone the repo:
```bash
git clone https://github.com/Abdalah-eslam/CRUD-Courses--Users-Login-Signin.git
cd CRUD-Courses--Users-Login-Signin
