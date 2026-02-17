# Backend API — User Endpoints

This document describes the `/register` endpoint for user registration.

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

## Notes for implementers
- Passwords are hashed using `userModel.hashPassword(password)` (bcrypt with salt rounds 10).
- After creating the user the controller returns a JWT token and the created user object.
- Ensure `JWT_SECRET` is set in environment variables for token generation.
- The route's validation is defined in `routes/user.routes.js` and creation logic lives in `services/user.service.js`.

Files of interest:
- [user.Controller.js](controllers/user.Controller.js)
- [user.routes.js](routes/user.routes.js)
- [user.model.js](models/user.model.js)
- [user.service.js](services/user.service.js)

---
Generated documentation for the `POST /register` endpoint.
