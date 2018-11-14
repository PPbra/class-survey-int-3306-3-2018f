const express = require('express');
const router = express.Router();
const authen = require('../middleware/authen');

const users = require("../controller/user.controller");

router.get('/test', users.test);
router.post('/login', authen.verify, users.login);


module.exports = router;