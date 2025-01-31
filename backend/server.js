const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') // this is what helps us connect to our mongo database

require('dotenv').config(); 

// this is how we create our express server
const app = express();
const port = process.env.PORT || 5000;

// this is our middleware
app.use(cors());
app.use(express.json()); // our server will be sending and recieving json

const uri = process.env.ATLAS_URI; // we get the uri from the mongoDB website Cluster0
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// these import the files that we need for the routes
const exercisesRouter = require('./routes/exercises') 
const usersRouter = require('./routes/users')

// these will use and load the files based on the urls given
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

// this is what starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});