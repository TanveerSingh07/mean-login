🔐 Angular Authentication with Express (MEAN Stack)
📌 Project Overview

This project showcases a basic yet effective authentication system built using the MEAN stack. It demonstrates how frontend and backend work together to manage user login securely.

🧩 Stack Used:
Angular → Handles UI and client-side authentication
Express.js → Manages backend APIs
Node.js → Runtime environment
Local Storage → Stores authentication tokens

💡 The main objective is to understand the flow of authentication in a real-world web application.

⚙️ Technologies Used
Angular (Frontend Framework)
Express.js (Backend Framework)
Node.js
HTML & CSS
LocalStorage (Token Management)
🔑 Authentication Flow (Frontend - Angular)

Authentication is implemented using the following core components:

🔹 1. AuthService

The AuthService acts as the central place for handling authentication logic.

Responsibilities:

Communicates with backend APIs (Login/Register)
Stores authentication token in localStorage
Provides login status across the application
setToken(token: string) {
  localStorage.setItem('token', token);
}
🔹 2. Login Component

This component provides the user interface for authentication.

Features:

Accepts user credentials (email/password)
Sends data to backend API
Redirects user after successful login
🔹 3. Route Guard (AuthGuard)

The AuthGuard protects restricted routes such as the dashboard.

canActivate(): boolean {
  if (this.auth.isLoggedIn()) return true;

  this.router.navigate(['/login']);
  return false;
}

Purpose:

Prevents unauthorized access
Redirects unauthenticated users to the login page
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
