const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

const PORT = 3000;
const SECRET_KEY = 'your-secret-key'; //replace with your actual secret key

app.use(express.json())

app.post('/login', (req, resp) => {
    const { username, password } = req.body;
    if (username === 'whoiskumaratul' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        resp.json({ token });
        console.log(token)
        } else {
            resp.status(401).json({ message: 'Invalid username or password' });
        }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

