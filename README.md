# 🌐 Sehat Sahayata – Frontend

## 📌 Project Overview

Sehat Sahayata is a healthcare web application that allows users to:

* Book medical appointments
* Get basic health assistance
* Explore healthcare services

This repository contains the **frontend** of the application built using HTML, CSS, and JavaScript.

---

## 🚀 Live Demo

👉 https://sehat-sahayata.vercel.app/

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Fetch API

---

## 📂 Project Structure

```
frontend/
│── index.html
│── appointment.html
│── about.html
│── contact.html
│── form.html
│── getinvolved.html
│── style.css
│── script.js
│── images/
```

---

## ✨ Features

* 📅 Book Appointment Form
* 📱 Responsive UI
* ✅ Form Validation
* 🔗 Backend Integration using Fetch API
* ⚡ Fast Deployment using Vercel

---

## 🔗 Backend API

The frontend connects to the backend hosted on Render:

```
https://sehat-sahayata-backend.onrender.com/api/appointments
```

### Example Request:

```javascript
fetch("https://sehat-sahayata-backend.onrender.com/api/appointments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
```

---

## ⚠️ Known Issues

* Backend may take 20–30 seconds to respond (Render free tier sleep mode)
* No loading indicator yet

---

## 📌 How to Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/sehat-sahayata.git
```

2. Open the project folder

3. Run:



## 💡 Note

This project is built for learning and demonstration purposes as part of a healthcare web application system.

---
