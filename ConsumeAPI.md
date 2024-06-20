# User API Documentation

This document provides a comprehensive guide to the User API endpoints, detailing how to register, login, logout, update user details, and more.

## Table of Contents
- [User Registration](#user-registration)
- [User Login](#user-login)
- [Forget Password](#forget-password)
- [Logout User](#logout-user)
- [Refresh Access Token](#refresh-access-token)
- [Change Current Password](#change-current-password)
- [Get Current User](#get-current-user)
- [Update User Details](#update-user-details)
- [Update User Avatar](#update-user-avatar)
- [Get User Blog Profile](#get-user-blog-profile)
- [Delete User](#delete-user)
- [Notes](#notes)

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
