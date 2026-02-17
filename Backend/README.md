# Users API

## POST /users/register

**Description:** Register a new user and return an authentication token and the created user object.

**Method:** POST

**URL:** /users/register

**Headers:**

- `Content-Type`: `application/json`

**Request body:** (JSON)

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice@example.com",
  "password": "secret123"
}
```

**Field requirements / validation:**

- `fullname.firstname` (string): required, minimum length 3
- `fullname.lastname` (string): optional, minimum length 3 if provided
- `email` (string): required, must be a valid email, minimum length 5
- `password` (string): required, minimum length 6

Validation is implemented with `express-validator` in `user.routes.js`.

**Successful response:**

- **Status:** `201 Created`
- **Body:** JSON containing `token` and `user`.

Example success response:

```json
{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "<userId>",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice@example.com",
    "socketId": null
  }
}
```

Note: The stored `password` is hashed and not returned (schema sets `select: false`).

**Error responses:**

- **Status:** `400 Bad Request` — validation errors. Body shape: `{ errors: [ ... ] }` (from `express-validator`).
- **Status:** `409 Conflict` — (possible) when `email` is already registered (depends on service error handling).
- **Status:** `500 Internal Server Error` — server-side error.

**Notes for implementers:**

- The controller hashes the password via `userModel.hashPassword` before creating the user.
- Successful creation returns a JWT from `user.generateAuthToken()`.

File references: the route is defined in `routes/user.routes.js`, the controller is `controllers/user.Controller.js`, and model logic is in `models/user.model.js`.
