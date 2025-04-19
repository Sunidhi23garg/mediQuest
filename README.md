# 💊 MediQuest

A **Medicine Price & Availability Comparison Platform** built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). MediQuest empowers users to search, compare, and manage essential medicines with ease, while ensuring a smooth and responsive interface throughout.

---

## 🖼️ MediQuest Interface Overview

### 🏠 1. Homepage Layout
- Clean and user-friendly interface for easy navigation
- Responsive design that adjusts across devices
- Central search bar to quickly find required medicines

### 🔐 2. User Signup/Login Page
- JWT-based secure authentication for user sessions
- Clean and simple UI for registration and login
- Includes client-side form validation for better user experience

### 🔍 3. Medicine Search Functionality
- Real-time search bar to filter medicines as users type
- Backend integration for fetching medicine details dynamically
- Improves usability with instant feedback and suggestions

### 🛒 4. Add to Cart Functionality
- Logged-in users can add medicines to their personal cart
- Each listing has an accessible “Add to Cart” button
- Centralized cart management for quick review or checkout

### 🧪 5. Backend API Testing with Postman
- APIs tested for robustness using Postman
- Includes routes for user auth, medicine retrieval, and cart operations
- Confirms backend logic works before frontend integration

### 📬 6. Contact Us Page
- Allows users to send feedback or queries to the team
- Includes a form with fields for name, email, and message
- Form data is sent to backend and can be stored or emailed to admin
- Fully responsive and styled with Tailwind CSS

### 🧾 7. About Us Page
- Introduces the platform, its purpose, and the team behind it
- Shares MediQuest’s mission and the reason it was created
- Helps build credibility and connects users with the creators

---

## 🚀 Features Summary

- 🔐 User authentication 
- 🔍 Medicine search with real-time filtering
- 🛒 Add to cart and cart management system
- 🧾 Admin routes for managing inventory (if implemented)
- 📬 Contact form for user communication
- 📄 About page explaining platform goals
- 📦 Responsive layout using Tailwind CSS

---

## 🙌 Contribution

You're most welcome to contribute! Whether it's fixing bugs, enhancing UI, or writing docs/tests — I appreciate all kinds of contributions.

---

## 🧪 Example API Test

const request = require('supertest');
const app = require('../app');

test('GET / should return status 200', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});

## 📷 Screenshots

- Home Page
![image](https://github.com/user-attachments/assets/879a6f23-02b5-42e9-8f6e-2c7ab1a0c42e)


