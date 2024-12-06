//import express
const express = require('express');

// initialize the express app
const app = express();

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the first program of Node.js Express');
});


//set the port
const port = 8000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});