# User Registration API Documentation

## Register User Endpoint

**Endpoint:** `/api/users/register`
**Method:** POST
**Description:** Create a new user account in the system.

### Request Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

#### Required Fields:
- `username`: User's display name (3-30 characters)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `phone`: Valid phone number

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 201 | User successfully created |
| 400 | Bad Request - Invalid input data |
| 409 | Conflict - Email already exists |
| 500 | Internal Server Error |

### Example Request

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secret123",
  "phone": "1234567890"
}
```

### Example Success Response

```json
{
  "status": "success",
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### Example Error Response

```json
{
  "status": "error",
  "message": "Email already exists"
}
```

## Login Endpoint

**Endpoint:** `/api/users/login`
**Method:** POST
**Description:** Authenticate a user and receive an access token.

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Required Fields:
- `email`: Registered email address
- `password`: Account password

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Login successful |
| 400 | Bad Request - Invalid credentials |
| 401 | Unauthorized - Invalid email or password |
| 500 | Internal Server Error |

### Example Request

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

### Example Success Response

```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "username": "john_doe",
      "email": "john@example.com"
    }
  }
}
```

### Example Error Response

```json
{
  "status": "error",
  "message": "Invalid email or password"
}
```

## Profile Endpoint

**Endpoint:** `/api/users/profile`
**Method:** GET
**Description:** Get the authenticated user's profile information.
**Authentication:** Required (Bearer Token)

### Headers
```
Authorization: Bearer <token>
```

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 401 | Unauthorized - Invalid or missing token |
| 500 | Internal Server Error |

### Example Success Response

```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "user_id",
      "username": "john_doe",
      "email": "john@example.com",
      "phone": "1234567890"
    }
  }
}
```

### Example Error Response

```json
{
  "status": "error",
  "message": "Unauthorized access"
}
```

## Logout Endpoint

**Endpoint:** `/api/users/logout`
**Method:** GET
**Description:** Invalidate the current user's session token.
**Authentication:** Required (Bearer Token)

### Headers
```
Authorization: Bearer <token>
```

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Successfully logged out |
| 401 | Unauthorized - Invalid or missing token |
| 500 | Internal Server Error |

### Example Success Response

```json
{
  "status": "success",
  "message": "Successfully logged out"
}
```

### Example Error Response

```json
{
  "status": "error",
  "message": "Unauthorized access"
}
```

## Captain API Documentation

### Register Captain Endpoint

**Endpoint:** `/api/captains/register`
**Method:** POST
**Description:** Register a new captain account in the system.

### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```

#### Required Fields:
- `fullname.firstname`: Captain's first name (minimum 3 characters)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `color`: Vehicle color (minimum 3 characters)
- `plate`: Vehicle plate number (minimum 3 characters)
- `capacity`: Vehicle capacity (minimum 1)
- `vehicleType`: Type of vehicle (must be one of: 'car', 'motorcycle', 'auto')

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 201 | Captain successfully registered |
| 400 | Bad Request - Invalid input data or captain already exists |
| 500 | Internal Server Error |

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "captain_id"
  }
}
```

### Example Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

or

```json
{
  "message": "Captain already exists"
}
```
