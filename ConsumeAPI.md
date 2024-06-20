# User API Documentation

This document provides a comprehensive guide to the User API endpoints, detailing how to register, login, logout, update user details, and more.


## User Registration

**Endpoint**

`POST /register`

**Description**

Register a new user with details including avatar.

**Request**

- Method: `POST`
- URL: `/register`
- Headers: `Content-Type: multipart/form-data`
- Body:
  - `username`: (String) Required
  - `email`: (String) Required
  - `password`: (String) Required
  - `bio`: (String) Optional
  - `fullName`: (String) Required
  - `avatar`: (File) Required, Max 4 files

**Response**

- Status: `201 Created`
- Body:
  ```json
  {
    "status": 201,
    "data": {
      "username": "example",
      "email": "example@example.com",
      "fullName": "Example Name",
      "bio": "Example bio",
      "avatar": "url_to_avatar"
    },
    "message": "User registered successfully"
  }

# User Login Endpoint

## Description

Login an existing user with username/email and password.

## Request

- **Method**: `POST`
- **URL**: `/login`
- **Headers**: `Content-Type: application/json`
- **Body**:
  - `username`: (String) Optional
  - `email`: (String) Optional
  - `password`: (String) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "user": {
        "username": "example",
        "email": "example@example.com",
        "fullName": "Example Name",
        "bio": "Example bio",
        "avatar": "url_to_avatar"
      },
      "accessToken": "access_token",
      "refreshToken": "refresh_token"
    },
    "message": "User successfully logged in"
  }

# Logout User Endpoint

## Description

Logout the current logged-in user.

## Request

- **Method**: `POST`
- **URL**: `/logout`
- **Headers**: `Authorization: Bearer <access_token>`

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "example"
    },
    "message": "User Logged Out"
  }

# Logout User Endpoint

## Description

Logout the current logged-in user.

## Request

- **Method**: `POST`
- **URL**: `/logout`
- **Headers**: `Authorization: Bearer <access_token>`

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "example"
    },
    "message": "User Logged Out"
  }

# Refresh Access Token Endpoint

## Description

Refresh the access token using the refresh token.

## Request

- **Method**: `POST`
- **URL**: `/refresh-token`
- **Headers**: `Cookie: refreshToken=<refresh_token>`

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "user": {
        "username": "example",
        "email": "example@example.com",
        "fullName": "Example Name",
        "bio": "Example bio",
        "avatar": "url_to_avatar"
      },
      "accessToken": "new_access_token",
      "refreshToken": "new_refresh_token"
    },
    "message": "AccessToken generated successfully"
  }

# Change Current Password Endpoint

## Description

Change the current password of a logged-in user.

## Request

- **Method**: `POST`
- **URL**: `/password/c`
- **Headers**: `Authorization: Bearer <access_token>`
- **Body**:
  - `oldPassword`: (String) Required
  - `newPassword`: (String) Required
  - `confirmPassword`: (String) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "message": "Password updated"
  }


# Forget Password Endpoint

## Description

Request a password reset for a user.

## Request

- **Method**: `POST`
- **URL**: `/password/f`
- **Headers**: `Content-Type: application/json`
- **Body**:
  - `email`: (String) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": "example_username",
    "message": "Password reset request successful"
  }

# Forget Password Endpoint

## Description

Request a password reset for a user.

## Request

- **Method**: `POST`
- **URL**: `/password/f`
- **Headers**: `Content-Type: application/json`
- **Body**:
  - `email`: (String) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": "example_username",
    "message": "Password reset request successful"
  }

# Get Current User Endpoint

## Description

Retrieve the details of the current logged-in user.

## Request

- **Method**: `GET`
- **URL**: `/current-user`
- **Headers**: `Authorization: Bearer <access_token>`

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "example",
      "email": "example@example.com",
      "fullName": "Example Name",
      "bio": "Example bio",
      "avatar": "url_to_avatar"
    },
    "message": "User details fetched successfully"
  }


# Update User Details Endpoint

## Description

Update the details of the current logged-in user.

## Request

- **Method**: `PATCH`
- **URL**: `/update-account`
- **Headers**: `Authorization: Bearer <access_token>`
- **Body**:
  - `username`: (String) Optional
  - `email`: (String) Optional
  - `fullName`: (String) Optional
  - `bio`: (String) Optional

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "new_username",
      "email": "new_email",
      "fullName": "New Name",
      "bio": "New bio",
      "avatar": "url_to_avatar"
    },
    "message": "User details updated successfully"
  }

# Update User Avatar Endpoint

## Description

Update the avatar of the current logged-in user.

## Request

- **Method**: `PATCH`
- **URL**: `/avatar`
- **Headers**: `Authorization: Bearer <access_token>`
- **Body**: `multipart/form-data`
  - `avatar`: (File) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "example",
      "email": "example@example.com",
      "fullName": "Example Name",
      "bio": "Example bio",
      "avatar": "new_avatar_url"
    },
    "message": "User avatar updated successfully"
  }

# Delete User Endpoint

## Description

Delete the current logged-in user account.

## Request

- **Method**: `PATCH`
- **URL**: `/delete-user`
- **Headers**: `Authorization: Bearer <access_token>`
- **Body**:
  - `username`: (String) Required
  - `password`: (String) Required

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {},
    "message": "Successfully deleted user"
  }

# Get User Blog Profile Endpoint

## Description

Retrieve the blog profile of a user by username.

## Request

- **Method**: `GET`
- **URL**: `/u/:username`
- **Headers**: `Authorization: Bearer <access_token>`

## Response

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "status": 200,
    "data": {
      "username": "example",
      "email": "example@example.com",
      "fullName": "Example Name",
      "bio": "Example bio",
      "avatar": "url_to_avatar",
      "blogs": 5
    },
    "message": "Successfully fetched user details"
  }

# Notes

- All secured routes require a valid JWT token.
- Ensure the `Content-Type` header is set appropriately for different requests.
- Handle all responses appropriately in your frontend application to provide a seamless user experience.


# Admin API Documentation

This document provides a guide to the Admin API endpoints for managing blogs and users, and sending warning notifications.

## Table of Contents
- [Delete Blog](#delete-blog)
- [Delete User](#delete-user)
- [Send Warning Notification](#send-warning-notification)

## Delete Blog

**Endpoint**

`DELETE /delete/blog/:blogId`

**Description**

Delete a blog by its ID.

**Request**

- Method: `DELETE`
- URL: `/delete/blog/:blogId`
- Headers:
  - Authorization: Bearer \<access_token>

**Response**

- Status: `200 OK`
- Body:
  ```json
  {
    "status": 200,
    "data": {},
    "message": "Blog deleted successfully"
  }


This Markdown file details the `DELETE /delete/user/:username` endpoint for deleting a user by username from the admin interface. Adjust the endpoint and middleware according to your specific application setup.


## Warning Notification to User for Regulation Breaking Blog

**Endpoint**

`POST /warning-noti/:username`

**Description**

Send a warning notification to a user for violating blog regulations.

**Request**

- Method: `POST`
- URL: `/warning-noti/:username`
- Headers:
  - Authorization: Bearer \<access_token>
  - Content-Type: application/json
- Body:
  ```json
  {
    "username": "example_username"
  }


## Delete User by Admin

**Endpoint**

`DELETE /delete/user/:username`

**Description**

Delete a user account by the admin.

**Request**

- Method: `DELETE`
- URL: `/delete/user/:username`
- Headers:
  - Authorization: Bearer \<access_token>

**Response**

- Status: `200 OK`
- Body:
  ```json
  {
    "status": 200,
    "data": {},
    "message": "User deleted successfully"
  }

# Middleware Used In Admin APIs

## restrictAction

**Description**

This middleware restricts actions based on the user's role. It checks if the user's role matches the specified role required for the action. If not, it throws a 403 Forbidden error.

**Usage**

```javascript
export const restrictAction = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            throw new ApiError(403, "This route is only for admin: You are not authorized to perform this action");
        }
        next();
    };
};
```
### Password Reset Endpoints Explanation

These endpoints facilitate the password reset process for users.

## Forgot Password Endpoint (`POST /api/v1/user/forg-pass`)

### Description

Initiates the password reset process by sending a reset email to the user's registered email address.

**Request**

### Request

- **Method:** `POST`
- **URL:** `/api/v1/user/forg-pass`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "user@example.com"
  }


# Reset Password Endpoint

This document provides detailed information about the `resetPass` endpoint.

---

## Reset Password (`PATCH /api/v1/user/res-pass/:resetToken`)

Resets the user's password using a valid reset token.

### Request

- **Method:** `PATCH`
- **URL:** `/api/v1/user/res-pass/:resetToken`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer <access_token>`
- **Params:**
  - `resetToken`: Token received in the email for password reset.
- **Body:**
  ```json
  {
    "password": "new_password"
  }


**Forgot Password Endpoint (`POST /api/v1/user/forg-pass`):**
- Initiates the password reset process by sending a reset email to the user's registered email address.
- If the user is found in the database, a unique reset token is generated and sent via email.
- The email contains a link valid for 10 minutes to reset the password.
- If the email sending fails, the reset process is terminated, and an error response is returned.
- Returns a success message if the password reset email is successfully sent.

**Reset Password Endpoint (`PATCH /api/v1/user/res-pass/:resetToken`):**
- Resets the user's password based on the provided reset token.
- Validates the reset token to ensure it is not expired or invalid.
- Updates the user's password and clears the reset token fields from the database.
- Issues new access and refresh tokens for the user session.
- Sets HTTP-only secure cookies (`accessToken` and `refreshToken`) to maintain user session security.
- Returns a JSON response with new tokens and a success message upon successful password reset.
