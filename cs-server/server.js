const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const route = require("./route/user.route");

const app = express();
const server = require('http').Server(app);

const port = 5000;

//connet database

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/class-survey-database');

// Cross Origin Error
app.use(cors());
app.use(bodyParser.json());
//user route
app.use('/users', route);


server.listen(port, () => {
    console.log('Listening on port ' + port);
});

module.exports = app;