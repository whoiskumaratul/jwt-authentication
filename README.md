
# jwt-authentication
A simple application using Express.js and JWT (JSON Web Token) to demonstrate user authentication.

# Features

    User Login: Validates credentials and generates a JWT token.
    Secure Authentication: Tokens are signed and valid for 1 hour.
    Auto-Restart: Development-friendly with Nodemon.

# Prerequisites

    Node.js (v14 or later)
    npm (Node Package Manager)    

# Installation    

1. Clone the Repository:

   git clone https://github.com/whoiskumaratul/jwt-authentication.git
   cd jwt-authentication

3. Install Dependencies:
   
   npm init (if required like node_modules folder unable to download from github)
   npm install

### This will install the following:

   
1.   express: Framework for building web applications. (npm i express)
2.   jsonwebtoken: Library for creating and verifying JWT tokens.  (npm i jsonwebtoken)
3.   nodemon: Utility for automatically restarting the server during development. (npm i nodemon)



## Run the Server:

   nodemon auth.js


The server will start on http://localhost:3000.


# API Endpoints

### POST /login

    Description: Authenticates the user and generates a JWT token.
    Request Body:

{
  "username": "whoiskumaratul",
  "password": "password"
}


Response
Success (200 OK):

{
  "token": "your-jwt-token"
}


Failure (401 Unauthorized):


{
  "message": "Invalid username or password"
}


# Development

### Use nodemon for automatic server restarts:


npm install -g nodemon

npm run dev


# Security Notes

1. Secret Key: Replace the SECRET_KEY in the code with an environment variable for better security.
2. HTTPS: Use HTTPS in production to secure token transmission.


### Screenshot



![jwt6](https://github.com/user-attachments/assets/bece8a85-6039-48f9-9cac-9bcfbedeeaa6)





##  Breaking It Down JWT Authentication

Link - https://www.kumaratuljaiswal.in/2024/11/breaking-it-down-jwt-authentication.html














































   
  
