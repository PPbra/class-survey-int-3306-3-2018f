const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

//import router
const userRoute = require("./route/user.route");
const teacherRoute = require('./route/teacher.route');
const studentRoute = require('./route/student.route');

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
app.use('/users', userRoute);
//teacher route
app.use('/teacher', teacherRoute);
//student route
app.use('/student', studentRoute)


server.listen(port, () => {
    console.log('Listening on port ' + port);
});

module.exports = app;