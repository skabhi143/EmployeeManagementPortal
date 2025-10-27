# Employee Management Portal

Full-stack **Employee Management Portal** scaffold containing:
- `backend/` — Spring Boot REST API (Java, Maven, Hibernate, MySQL)
- `frontend-react/` — React-based frontend (recommended)
- `frontend-jsp/` — JSP-based frontend (Spring MVC + JSP) for a Java-only stack

This scaffold is prepared for @https://github.com/skabhi143/Abhishek-sk and is ready to be filled with actual business logic, styles, and tests.

## Features (scaffold)
- Employee CRUD endpoints (starter controller + repository)
- Example React components to consume backend APIs
- Example JSP pages for a Spring MVC-based view layer
- README, LICENSE (MIT), `.gitignore`

## Tech Stack
- Backend: Java, Spring Boot, Spring Data JPA, Maven, MySQL
- Frontend (recommended): React, Axios, Bootstrap
- Frontend (Java-only): JSP, JSTL, Bootstrap

## Quick start

### Backend
1. Edit `backend/src/main/resources/application.properties` with your MySQL credentials.
2. From `backend/` run:
```bash
mvn clean package
mvn spring-boot:run
```
Backend default: `http://localhost:8080`

### Frontend (React)
1. `cd frontend-react`
2. `npm install`
3. `npm start` (runs on `http://localhost:3000`)

React will call backend APIs at `http://localhost:8080/api/...`. Configure proxy if needed.

### Frontend (JSP)
1. The JSP version runs together with backend (Spring MVC). Build & run backend and access JSP pages on port 8080.

## How to use
- Replace placeholder code in `backend` with your entities, services, and security.
- Replace React components in `frontend-react/src/components` with full UI and routes.
- Use `frontend-jsp` as a quick Java-only front-end example inside the same Spring Boot app.

## License
MIT

---