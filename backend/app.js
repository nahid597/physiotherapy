const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

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
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/images", express.static("images"));


app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;