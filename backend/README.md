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
