
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
   git clone https://github.com/your-username/express-jwt-auth-example.git
   cd express-jwt-auth-example

2. Install Dependencies:
   npm install

This will install the following:
   express: Framework for building web applications.
   jsonwebtoken: Library for creating and verifying JWT tokens.
   nodemon: Utility for automatically restarting the server during development.

3. Run the Server:
   npm start

The server will start on http://localhost:3000.


# Project Structure

.
├── auth.js          # Main application file
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation


# API Endpoints
POST /login
    Description: Authenticates the user and generates a JWT token.
    Request Body:


{
  "username": "whoiskumaratul",
  "password": "password"
}







































   
  
