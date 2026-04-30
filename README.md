# E-Commerce Backend System

This is an E-Commerce backend system built using Node.js, Express, MongoDB, and Mongoose. It includes authentication, CRUD operations, and role-based access control (RBAC). It also integrates RapidMiner for product recommendation analytics.

## Features
- JWT-based Authentication & Authorization
- RBAC (Admin, User, Guest)
- CRUD APIs for Products, Orders, and User Profiles
- Product Search, Sort, and Filtering
- RapidMiner Predictive Analytics Integration (Mock)

## Setup
1. `npm install`
2. Configure `.env` file with `MONGO_URI`, `JWT_SECRET`, `PORT`, and `RAPIDMINER_API_URL`
3. `npm run dev` to start the server

## Dependencies
- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
