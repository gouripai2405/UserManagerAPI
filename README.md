# 🧠 UserManager API – A RESTful User Management System

UserManager API is a fully functional REST API built with Node.js, Express.js, and MongoDB Atlas for managing user data. It supports robust CRUD operations, smart data validation, and is structured for scalability and easy integration with any frontend.

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **ORM:** Mongoose  
- **Environment Management:** dotenv  
- **API Testing:** Postman  

---

## 📌 Features

- Full CRUD (Create, Read, Update, Delete) for users  
- Mongoose schema validation  
- Gmail-only email restriction  
- Auto-calculates birth year from age  
- Error handling for invalid data  
- Clean MVC structure  
- Ready for deployment on Vercel

---

## 🧪 API Endpoints

All routes are prefixed with: `/api/users`

| Method | Route             | Description           |
|--------|-------------------|-----------------------|
| GET    | `/api/users`      | Get all users         |
| GET    | `/api/users/:id`  | Get user by ID        |
| POST   | `/api/users`      | Create new user       |
| PUT    | `/api/users/:id`  | Update user by ID     |
| DELETE | `/api/users/:id`  | Delete user by ID     |
