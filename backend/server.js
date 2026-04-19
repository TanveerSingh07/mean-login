// Importing required modules
const express = require('express'); // Express framework
const cors = require('cors'); // Cors allow frontend requests

// Creating an Express app
const app = express();

// Using Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // helps to parse JSON body

// In-memory users (Local storage for now))
let users = [];


// REGISTER API to Creates a new user
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add new user
  users.push({ email, password });

  res.json({ message: "User registered successfully" });
});

//LOGIN API which Authenticates user
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    return res.json({
      token: "dummy-token",
      message: "Login successful"
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

//Starting the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});