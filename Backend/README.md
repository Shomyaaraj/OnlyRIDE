# Uber Clone - Backend API

A robust Node.js and Express backend for an Uber-like ride-sharing application. This API handles user authentication, captain management, ride requests, and real-time ride tracking for both passengers and drivers.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Middleware](#middleware)
- [Running the Server](#running-the-server)
- [Development Tips](#development-tips)
- [Notes](#notes)

---

## Features

✅ **User Management**
- User registration with validation
- Secure password hashing
- JWT-based authentication
- Profile management
- Logout functionality

✅ **Captain Management**
- Captain registration and verification
- Vehicle information storage
- Online/offline status tracking
- Earnings calculation
- Accept/reject ride requests

✅ **Ride Management**
- Create ride requests
- Match users with available captains
- Real-time ride status updates
- Pickup and dropoff tracking
- Ride history and analytics

✅ **Security**
- Password hashing with bcrypt
- JWT token-based authentication
- Token blacklisting on logout
- Input validation with express-validator
- Protected routes with middleware

✅ **Database**
- MongoDB for persistent storage
- User, Captain, and Ride models
- Blacklist token model for logout handling

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: express-validator
- **HTTP Methods**: REST API
- **Environment**: dotenv for configuration

---

## Project Structure

```
Backend/
├── app.js                             # Express app configuration
├── server.js                          # Server entry point
├── package.json                       # Dependencies and scripts
├── .env                               # Environment variables (create this)
├── README.md                          # Documentation (this file)
│
├── db/
│   └── db.js                          # MongoDB connection configuration
│
├── models/                            # Database schemas
│   ├── user.model.js                  # User schema and methods
│   ├── captain.model.js               # Captain schema and methods
│   └── blacklistToken.model.js        # Token blacklist schema
│
├── controllers/                       # Request handlers
│   ├── user.controller.js             # User registration, login, profile
│   └── captain.controller.js          # Captain registration, login, profile
│
├── routes/                            # API endpoints
│   ├── user.routes.js                 # User routes
│   └── captain.routes.js              # Captain routes
│
├── services/                          # Business logic
│   ├── user.service.js                # User service methods
│   └── captain.service.js             # Captain service methods
│
└── middlewares/                       # Custom middleware
    └── auth.middleware.js             # Authentication validation
```

### Folder Descriptions

- **db/**: Database connection setup and configuration
- **models/**: Mongoose schemas defining database document structures
- **controllers/**: Handle incoming requests and call service methods
- **routes/**: Define API endpoints and map them to controllers
- **services/**: Contain business logic and database operations
- **middlewares/**: Custom middleware for authentication and validation

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or MongoDB Atlas account)
- Git

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Uber/Backend
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages from `package.json`.

### Step 3: Configure Environment Variables

Create a `.env` file in the Backend root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/uber_clone
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/uber_clone

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=24h

# Optional: Socket.IO for real-time features
SOCKET_PORT=3001
```

### Step 4: Start MongoDB

**Locally:**
```bash
mongod
```

**Or use MongoDB Atlas** (cloud): Update `MONGODB_URI` in `.env` with your connection string.

### Step 5: Start the Server

```bash
npm start
```

The server will be available at **`http://localhost:3000`** (or the port specified in `.env`).

---

## Environment Variables

Create a `.env` file in the Backend root with the following variables:

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | Number | 3000 | Server port |
| `NODE_ENV` | String | development | Environment (development/production) |
| `MONGODB_URI` | String | mongodb://localhost:27017/uber_clone | MongoDB connection string |
| `JWT_SECRET` | String | required | Secret key for JWT signing |
| `JWT_EXPIRE` | String | 24h | JWT token expiration time |
| `SOCKET_PORT` | Number | 3001 | Socket.IO port (for real-time features) |

---

## Database Schema

### User Model

```javascript
{
  _id: ObjectId,
  fullname: {
    firstname: String (required, min 3 chars),
    lastname: String
  },
  email: String (required, unique, valid email),
  password: String (required, hashed, min 6 chars),
  socketId: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Methods:**
- `generateAuthToken()` - Generates JWT token for authentication
- `comparePassword(password)` - Compares provided password with stored hash

### Captain Model

```javascript
{
  _id: ObjectId,
  fullname: {
    firstname: String (required, min 3 chars),
    lastname: String
  },
  email: String (required, unique, valid email),
  password: String (required, hashed, min 6 chars),
  socketId: String,
  status: String ('active' or 'inactive', default: 'inactive'),
  vehicle: {
    color: String,
    plate: String,
    capacity: Number,
    vehicleType: String ('car', 'motorcycle', 'auto')
  },
  location: {
    ltd: Number,
    lng: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

**Methods:**
- `generateAuthToken()` - Generates JWT token for authentication
- `comparePassword(password)` - Compares provided password with stored hash

### BlacklistToken Model

```javascript
{
  _id: ObjectId,
  token: String (required),
  createdAt: Date,
  expiresAt: Date
}
```

Used for storing logout tokens to prevent their use.

---

## API Endpoints

### User Routes `/users`

#### Register User
```
POST /users/register
```

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation:**
- `fullname.firstname`: Required, min 3 characters
- `email`: Required, valid email format
- `password`: Required, min 6 characters

**Success Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "605c0b45...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

**Error Response (400):**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Login User
```
POST /users/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "605c0b45...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com"
  }
}
```

#### Get User Profile
```
GET /users/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "user": {
    "_id": "605c0b45...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com"
  }
}
```

#### Logout User
```
GET /users/logout
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "message": "Logout successful"
}
```

---

### Captain Routes `/captains`

#### Register Captain
```
POST /captains/register
```

**Request Body:**
```json
{
  "fullname": {
    "firstname": "Mike",
    "lastname": "Johnson"
  },
  "email": "mike@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "AB12CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Success Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "605c0c56...",
    "fullname": { "firstname": "Mike", "lastname": "Johnson" },
    "email": "mike@example.com",
    "vehicle": {...},
    "status": "inactive"
  }
}
```

#### Login Captain
```
POST /captains/login
```

**Request Body:**
```json
{
  "email": "mike@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "605c0c56...",
    "fullname": { "firstname": "Mike", "lastname": "Johnson" },
    "email": "mike@example.com"
  }
}
```

#### Get Captain Profile
```
GET /captains/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "captain": {
    "_id": "605c0c56...",
    "fullname": { "firstname": "Mike", "lastname": "Johnson" },
    "email": "mike@example.com",
    "vehicle": {...},
    "status": "active"
  }
}
```

#### Logout Captain
```
GET /captains/logout
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "message": "Logout successful"
}
```

---

## Authentication

### JWT Implementation

The API uses **JWT (JSON Web Tokens)** for stateless authentication.

**Token Generation:**
```javascript
// In user/captain model
const token = jwt.sign(
  { userId: this._id },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRE }
);
```

**Token Verification:**
Tokens are verified in the `auth.middleware.js` middleware on protected routes.

### Token Storage

**Frontend:**
- Store token in localStorage after login
- Include in Authorization header for subsequent requests

**Example:**
```javascript
const token = localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`
};
```

### Token Blacklisting

On logout, tokens are added to the `BlacklistToken` collection to prevent their reuse.

---

## Error Handling

### Standard Error Responses

**Validation Error (400):**
```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email" }
  ]
}
```

**Unauthorized (401):**
```json
{
  "message": "Unauthorized"
}
```

**Not Found (404):**
```json
{
  "message": "User not found"
}
```

**Server Error (500):**
```json
{
  "message": "Internal server error"
}
```

---

## Middleware

### Authentication Middleware (`auth.middleware.js`)

Validates JWT tokens on protected routes.

**Usage:**
```javascript
router.get('/profile', authMiddleware, controllerFunction);
```

**Checks:**
- Token exists in Authorization header
- Token format: `Bearer <token>`
- Token is valid and not blacklisted
- Token has not expired

---

## Running the Server

### Development Mode

```bash
npm start
```

Starts the server in development mode with nodemon (auto-reload on file changes).

### Production Mode

```bash
NODE_ENV=production npm start
```

Starts the server in production mode with optimizations.

### Testing Endpoints

Use Postman, Insomnia, or curl:

```bash
# User Registration
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john@example.com","password":"password123"}'

# User Login
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get User Profile
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <your_token_here>"
```

---

## Development Tips

### Hot Reload

If using nodemon, the server automatically restarts when files change.

### Database Debugging

- Use MongoDB Compass to view collections and documents
- Check MongoDB Atlas dashboard for cloud database stats
- Enable mongoose debug logs: `mongoose.set('debug', true);`

### API Testing

- **Postman**: Create collections for organized endpoint testing
- **Insomnia**: Alternative to Postman with good syncing
- **curl**: Quick command-line testing

### Logging

Add console logs to track request flow:
```javascript
console.log('Request received:', req.body);
```

### Common Issues

1. **MongoDB Connection Failed**: Check `MONGODB_URI` and ensure MongoDB is running
2. **JWT Invalid**: Verify `JWT_SECRET` matches between token generation and verification
3. **CORS Errors**: Enable CORS in Express if frontend and backend are on different ports
4. **Port Already in Use**: Change `PORT` in `.env` or kill the process using the port

---

## Notes

⚠️ **Important:**
- Never commit `.env` file with sensitive information
- Store `JWT_SECRET` securely; use strong random values
- In production, use environment variables from your hosting platform
- Implement HTTPS in production
- Rate limiting recommended to prevent abuse
- Consider adding email verification for user registration
- Implement role-based access control (RBAC) for future features

### Security Best Practices

1. Always hash passwords before storing
2. Validate all user inputs
3. Use HTTPS in production
4. Implement request rate limiting
5. Keep dependencies updated
6. Use environment variables for sensitive data
7. Implement proper error handling without exposing sensitive info
8. Add request logging for debugging and auditing

---

## License

This project is part of the Uber Clone application. All rights reserved.

```js
const axios = require('axios');

axios.post('http://localhost:3000/register', {
  fullname: { firstname: 'John', lastname: 'Doe' },
  email: 'john.doe@example.com',
  password: 'secret123'
})
.then(resp => console.log(resp.data))
.catch(err => console.error(err.response ? err.response.data : err.message));
```

Postman
- Set method to `POST`, URL to `http://localhost:3000/register`.
- In the Body tab choose `raw` + `JSON` and paste the request JSON above.
- Send and inspect the JSON response.

## Endpoint: POST /login

- URL: `/login` (mounted in `user.routes.js`)
- Method: `POST`
- Content-Type: `application/json`

### Validation rules
- `email`: must be a valid email (`body('email').isEmail()`).
- `password`: minimum length 6 (`body('password').isLength({min:6})`).

### Expected request body

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

Notes:
- Both `email` and `password` are required.

### Success response (200)

JSON body:

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "605c...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

The `token` is a JWT produced by `user.generateAuthToken()` (signed with `process.env.JWT_SECRET`).

### Validation error (400)

When input validation fails, the endpoint returns status `400` and a JSON payload with `errors` array (from `express-validator`). Example:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "Password must be atleast 6 digit long", "param": "password", "location": "body" }
  ]
}
```

### Authentication error (401)

If the credentials are incorrect (email not found or password mismatch), the API responds with `401` and a message such as:

```json
{ "error": "Invalid email or password" }
```

### Server error (500)

On unexpected errors the endpoint returns a `500` with an error message.

## Additional User Endpoints

### GET /profile

- URL: `/profile` (mounted in `user.routes.js`)
- Method: `GET`
- Authentication: requires a valid JWT (sent as `Bearer <token>` in the
  `Authorization` header or stored in the `token` cookie).
- Success response (200):

```json
{
  "_id": "605c...",
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "socketId": null
}
```

### GET /logout

- URL: `/logout`
- Method: `GET`
- Auth: same requirements as `/profile`.
- Behavior: token is added to the blacklist collection and the cookie is
  cleared.
- Success response (200):

```json
{ "message": "Logged out successfully" }
```

Examples:

```
curl http://localhost:3000/profile -H "Authorization: Bearer <jwt-token>"
curl http://localhost:3000/logout -H "Authorization: Bearer <jwt-token>"
```

---

## Captain Endpoints

All captain routes are defined in `routes/captain.routes.js` and mirror the
user API with additional vehicle-related fields.

### POST /register

- URL: `/register` (when the captain router is mounted, e.g. `/captains`).
- Method: `POST`
- Content-Type: `application/json`

#### Validation rules

- `email` – must be a valid email.
- `fullname.firstname` – minimum length 3.
- `password` – minimum length 6.
- `vehicle.color` – minimum length 3.
- `vehicle.plate` – minimum length 3.
- `vehicle.capacity` – must be an integer ≥ 1.
- `vehicle.vehicleType` – must be one of `car`, `motorcycle`, `auto`.

#### Expected request body

```json
{
  "fullname": { "firstname": "Jane", "lastname": "Smith" },
  "email": "jane.smith@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "blue",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Success response (201)

```json
{
  "token": "<jwt-token>",
  "captain": {
    "_id": "605c...",
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "blue",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car",
      "location": { "lat": null, "lng": null }
    }
  }
}
```

#### Validation error (400)

Similar to user registration, the response includes an `errors` array.

#### Server / creation error (500)

If creation fails or required fields are missing in `captain.service.createCaptain`.

### POST /login

- URL: `/login`
- Method: `POST`
- Content-Type: `application/json`

#### Validation rules

- `email`: valid email.
- `password`: minimum length 6.

#### Request body

```json
{
  "email": "jane.smith@example.com",
  "password": "secret123"
}
```

#### Success response (200)

```json
{
  "token": "<jwt-token>",
  "captain": { ...same shape as registration response... }
}
```

#### Authentication error (401)

Incorrect credentials return `401` with

```json
{ "error": "Invalid email or password" }
```

### GET /profile

- URL: `/profile`
- Auth: `authCaptain` middleware.
- Returns the authenticated captain:

```json
{ "captain": { ... } }
```

### GET /logout

- URL: `/logout`
- Auth: same as profile.
- Blacklists token and clears cookie; responds with

```json
{ "message": "Logged out successfully" }
```

### Examples

(curl, fetch, axios examples similar to user; update URLs accordingly)

```bash
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{...}'

curl -X POST http://localhost:3000/captains/login \
  -H "Content-Type: application/json" \
  -d '{...}'

curl http://localhost:3000/captains/profile \
  -H "Authorization: Bearer <jwt-token>"

curl http://localhost:3000/captains/logout \
  -H "Authorization: Bearer <jwt-token>"
```

---

## Notes for implementers

- Passwords for both users and captains are hashed with `hashPassword` defined
  on the respective mongoose models (bcrypt, salt rounds 10).
- Tokens are JWTs signed with `process.env.JWT_SECRET` and expire after 24 h
  (captains) or 1 d (users).
- Blacklisted tokens are stored in `models/blacklistToken.model.js` and expire
  after 1 day via the TTL index.
- Authentication middleware (`auth.middleware.js`) checks for a token in a
  cookie or authorization header and ensures it is not blacklisted.
- Validation rules are defined in the route files (`routes/*.routes.js`).
- Creation logic resides in `services/*.service.js`.

Files of interest:

- `controllers/user.Controller.js`
- `controllers/captain.controller.js`
- `routes/user.routes.js`
- `routes/captain.routes.js`
- `models/user.model.js`
- `models/captain.model.js`
- `services/user.service.js`
- `services/captain.service.js`

