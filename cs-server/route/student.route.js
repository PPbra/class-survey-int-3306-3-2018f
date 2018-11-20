const express = require('express');
const router = express.Router();

//middleware 
const tokenChecker = require('../middleware/tokenChecker');
//controller
const student = require('../controller/student.controller');


router.get('/get-classes', tokenChecker.verify, student.getClasses)

module.exports = router;