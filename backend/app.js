const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

//connect database using mongoose
mongoose.connect('mongodb://localhost/physiotherapy', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRoutes);

module.exports = app;