const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  const response = {
    message: 'Hello World!'
  }
  res.end(JSON.stringify(response));
});

module.exports = router;