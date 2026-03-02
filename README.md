# 🚀 Employee Management Portal

![CI](https://github.com/skabhi143/EmployeeManagementPortal/actions/workflows/ci.yml/badge.svg)

A production-ready full-stack **Employee Management System** built using **Spring Boot (Java)** and **React.js**.  
This application demonstrates secure REST API development, JWT authentication, database integration, and CI automation using GitHub Actions.

---

## 📌 Project Overview

The Employee Management Portal enables organizations to manage employee records efficiently through a secure and scalable system.

This project showcases:

- Full-stack development
- Secure backend architecture
- RESTful API design
- Authentication & authorization
- CI/CD pipeline setup
- Real-world project structuring

---

## ✨ Key Features

- ✅ Employee CRUD (Create, Read, Update, Delete)
- ✅ RESTful APIs with Spring Boot
- ✅ MySQL Database Integration
- ✅ Spring Security + JWT Authentication
- ✅ Role-ready architecture (extendable)
- ✅ React Frontend with Routing
- ✅ Axios for API communication
- ✅ Bootstrap responsive UI
- ✅ CI Pipeline using GitHub Actions

---

## 🏗️ Architecture

Frontend (React)  
⬇  
REST API (Spring Boot)  
⬇  
Service Layer  
⬇  
JPA/Hibernate  
⬇  
MySQL Database  

---

## 🛠️ Technology Stack

### Backend
- Java 17
- Spring Boot 3
- Spring Data JPA (Hibernate)
- Spring Security
- JWT Authentication
- Maven
- MySQL

### Frontend
- React 18
- React Router DOM
- Axios
- Bootstrap
- Node.js

### DevOps
- GitHub Actions (Continuous Integration)

---

## 📂 Project Structure

EmployeeManagementPortal  
│  
├── backend  
│   ├── controller  
│   ├── service  
│   ├── repository  
│   ├── model  
│   └── pom.xml  
│  
├── frontend-react  
│   ├── components  
│   ├── services  
│   └── package.json  
│  
├── frontend-jsp (optional Java-only UI)  
└── .github/workflows/ci.yml  

---

## ⚙️ Backend Setup

### 1️⃣ Configure Database

Edit:

backend/src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db  
spring.datasource.username=your_username  
spring.datasource.password=your_password  

---

### 2️⃣ Run Backend

cd backend  
mvn clean install  
mvn spring-boot:run  

Backend runs at:

http://localhost:8080

---

## 💻 Frontend Setup (React)

cd frontend-react  
npm install  
npm start  

Frontend runs at:

http://localhost:3000  

APIs consumed from:

http://localhost:8080/api/...

---

## 🔐 Security

- Spring Security configuration
- JWT-based authentication
- Protected API endpoints
- Stateless session handling

---

## 🔄 Continuous Integration (CI)

This project uses **GitHub Actions**.

On every push to the main branch:

- Backend is built using Maven
- Frontend dependencies are installed
- Frontend production build is generated
- Build status is automatically verified

Check build status in the **Actions** tab.

---

## 📊 Sample API Endpoints

GET     /api/employees  
POST    /api/employees  
PUT     /api/employees/{id}  
DELETE  /api/employees/{id}  

---

## 🚀 Future Enhancements

- Role-Based Access Control (Admin/User)
- Pagination & Sorting
- Docker containerization
- Cloud deployment (AWS / Azure)
- Unit & Integration Testing
- Swagger API Documentation

---

## 💼 Resume Highlights

✔ Designed and developed full-stack application using Spring Boot and React  
✔ Implemented JWT-based authentication and Spring Security  
✔ Integrated MySQL using JPA/Hibernate  
✔ Configured CI pipeline using GitHub Actions  
✔ Followed layered architecture (Controller-Service-Repository pattern)  

---

## 👨‍💻 Author

Abhishek S K  
GitHub: https://github.com/skabhi143  

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, please give it a star!
