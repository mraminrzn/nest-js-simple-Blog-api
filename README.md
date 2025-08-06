# 📝 Blog API

A RESTful API built with **NestJS** and **MongoDB** to manage blog posts and blog categories.  
It includes full CRUD operations and relations between blog and category entities.

---

## 🚀 Features

- Full **CRUD** operations for:
  - Blog Posts
  - Blog Categories
- MongoDB with **Mongoose** and schema relations
- **DTO**-based validation using class-validator
- **Swagger** documentation out of the box
- **Environment**-based configuration
- Pagination, search, and sorting

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mraminrzn/nest-js-simple-Blog-api
cd nest-js-simple-Blog-api
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
Create a **.env** file in the root of your project and define the database URL:
```bash
DATABASE_URL=mongodb://localhost:27017/blogdb
```
### 4. Run the Development Server
```bash
npm run start:dev
```
Now visit: http://localhost:3000/api
to view the Swagger UI (auto-generated API documentation).

---
##📁 Project Structure
```bash
src/
├── blog/                # Blog module
│   ├── controllers/     # Blog controllers
│   ├── services/        # Blog services
│   ├── schemas/         # Mongoose schemas
│   └── ...              # Other blog-related files
├── blog-category/       # Blog category module
├── app.module.ts        # Root module
├── main.ts              # App entry point
.env                     # Environment variables

```
---
## 📄 API Documentation
Swagger is available at:
```bash
http://localhost:3000/api
```
---
## ❗ Notes
-The blog schema references the category schema using ObjectId
-Data will not be saved if a provided category ID doesn't exist in the category collection
-A valid 24-character MongoDB ObjectId is required for related resources
-Use .env to configure database settings

---
## 🙌 Contribution
Feel free to open issues or submit pull requests if you'd like to contribute!
---
Made with ❤️ using NestJS


