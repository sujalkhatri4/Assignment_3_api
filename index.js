// Import express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
dotenv.config({path: './config.env'});


//Initialize Mongo Server
const InitiateMongoServer = require('./src/database/db');
InitiateMongoServer();

// Initialize the express app
const app = express();



//Read data from recipes.json
const data = JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
console.log(data);
//Function to import recipes                from JSON
const importRecipe = async (req, res) => {
    try {
        const count = await Recipe.countDocuments();
        if (count === 0) {
            
            await Recipe.create(data);
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully imported');
        } else {
            console.log('Data already exists in the database, skipping import');
            res.status(200).send('Data already exists, skipping import');
        }
    } catch (e) {
        console.error('Error importing data',e);
        
    }
};



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the first program of Node.js Express');
});

// Set the port
const port = 8000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
