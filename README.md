# 🔐 Angular Authentication with Express (MEAN Stack)

## 📌 Project Overview

This project demonstrates a **simple login and authentication system** using:

* **Angular** → Frontend (UI + Authentication Logic)
* **Express.js** → Backend (API handling)
* **Local Storage** → Token management

The goal is to understand how authentication works in a **MEAN stack application**.

---

## ⚙️ Technologies Used

* Angular (Frontend Framework)
* Express.js (Backend Framework)
* Node.js
* HTML, CSS
* LocalStorage (for storing token)

---

## 🔑 Angular Authentication (Frontend)

Authentication in Angular is handled using the following components:

### 1. AuthService

* Handles login and register API calls
* Stores token in localStorage
* Provides authentication status

```ts
setToken(token: string) {
  localStorage.setItem('token', token);
}
```

---

### 2. Login Component

* Provides UI for login and registration
* Sends user credentials to backend
* Redirects user after successful login

---

### 3. Route Guard (AuthGuard)

Used to protect routes like dashboard:

```ts
canActivate(): boolean {
  if (this.auth.isLoggedIn()) return true;

  this.router.navigate(['/login']);
  return false;
}
```

It Ensures only logged-in users can access protected pages

---

### 4. Logout Functionality

```ts
logout() {
  localStorage.removeItem('token');
}
```

It helps to remove token and log out user

---

## 🌐 Express Backend Configuration

The Express backend handles authentication logic.

### Key Features:

* Parses JSON requests
* Enables CORS for frontend communication
* Provides login and register APIs

---

### Example Express Setup

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
```

---

### 🔐 Login API

```js
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === "test@college.edu" && password === "123456") {
    return res.json({ token: "dummy-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});
```

---

### 🆕 Register API

```js
app.post('/register', (req, res) => {
  // Store new user (in-memory or database)
});
```

---

## 🔄 Authentication Flow

1. User enters credentials in Angular login page
2. Angular sends request to Express backend
3. Backend validates user
4. Backend returns token
5. Angular stores token in localStorage
6. User is redirected to dashboard
7. AuthGuard protects dashboard route
8. Logout removes token and redirects user

---

## 📦 Token Storage

* Token is stored in **browser localStorage**
* It persists even after page refresh
* Used to maintain login state

---

## 🎯 Conclusion

This project demonstrates:

* How Angular manages authentication state
* How Express handles API requests
* How frontend and backend communicate
* How route protection works using guards

---

## 🚀 Future Improvements

* JWT-based authentication
* Password encryption (bcrypt)
* MongoDB integration
* Role-based access control

---

## 👨‍💻 Author

Developed as part of MEAN Stack assignment to demonstrate authentication concepts.
