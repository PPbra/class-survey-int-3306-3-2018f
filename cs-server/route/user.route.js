const express = require('express');
const router = express.Router();

const users = require("../controller/user.controller");

router.get('/test',users.test);

module.exports = router;