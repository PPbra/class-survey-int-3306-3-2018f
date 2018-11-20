const express = require('express');
const router = express.Router();
const authen = require('../middleware/authen');
const tokenChecker = require('../middleware/tokenChecker');

const users = require("../controller/user.controller");

router.get('/test', users.test);
router.post('/login', authen.verify, users.login);
router.post('/change-password', tokenChecker.verify, users.changePassword)


module.exports = router;