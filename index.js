//import express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// initialize the express app
const app = express();

//Mongo atlas connection string
const mongoURI =' mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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