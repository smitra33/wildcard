require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = express();
const routes = require('./routes/routes');
const database = mongoose.connection;

//Start the connection to mongodb and log status to console
mongoose.connect(mongoString);
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
//Start server console log
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/api', routes)