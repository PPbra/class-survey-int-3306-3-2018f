const express = require('express');
const router = express.Router();

const tokenChecker = require('../middleware/tokenChecker');

//controller
const teacher = require('../controller/teacher.controller');


router.get('/:teacherId/classes', tokenChecker.verify, teacher.getClasses);

module.exports = router;