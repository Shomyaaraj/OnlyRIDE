# Backend API — User & Captain Endpoints

This document provides a comprehensive reference for all user and captain related
HTTP endpoints implemented in this backend. It includes registration, login,
profile retrieval and logout operations for both user and captain roles.

## Overview
- Base folder: this file documents the backend in this folder.
- Main endpoint covered: `POST /register` (user registration).

## Endpoint: POST /register

- URL: `/register` (mounted in `user.routes.js`)
- Method: `POST`
- Content-Type: `application/json`

### Validation rules
- `email`: must be a valid email (`body('email').isEmail()`).
- `fullname.firstname`: minimum length 3 (`body('fullname.firstname').isLength({min:3})`).
- `password`: minimum length 6 (`body('password').isLength({min:6})`).

### Expected request body

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}

Notes:
- `fullname` is an object with `firstname` (required, min 3) and optional `lastname`.
- `email` and `password` are required.

### Success response (201)

JSON body:

{
  "token": "<jwt-token>",
  "user": {
    "_id": "605c...",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "socketId": null
  }
}

The `token` is a JWT produced by `user.generateAuthToken()` (signed with `process.env.JWT_SECRET`).

### Validation error (400)

When input validation fails, the endpoint returns status `400` and a JSON payload with `errors` array (from `express-validator`). Example:

{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "First name must be atleast 3 char long", "param": "fullname.firstname", "location": "body" }
  ]
}

### Server / creation error (500)

If user creation fails or an unexpected error occurs, the API will return a `500` with an error message. The `user.service.createUser` function will throw if required fields are missing.

## Examples

Curl (basic):

```
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"secret123"}'
```

Curl (follow redirects / pretty output):

```
curl -i -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"secret123"}'
```

Fetch (browser / node with global fetch):

```js
fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fullname:{ firstname:'John', lastname:'Doe' }, email:'john.doe@example.com', password:'secret123' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

Axios example:

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

