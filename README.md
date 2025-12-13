# Expense Tracker Backend

This is the backend for the Spendly expense tracker application. It is built with Node.js, Express, TypeScript, and MongoDB.

## Features

- RESTful API for CRUD operations on expenses
- Error handling middleware
- CORS enabled
- Testing with Jest and Supertest

## Prerequisites

- Node.js
- MongoDB Atlas account

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root of the project with the following content:**
   ```
   MONGO_URI=<your-mongodb-atlas-url>
   PORT=3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /api/expenses`: Get all expenses
- `POST /api/expenses`: Create a new expense
- `GET /api/expenses/:id`: Get a single expense by ID
- `PUT /api/expenses/:id`: Update an expense
- `DELETE /api/expenses/:id`: Delete an expense

## Running Tests

To run the test suite, use the following command:

```bash
npm test
```
