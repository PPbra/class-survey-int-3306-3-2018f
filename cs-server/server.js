const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

const port = 5000;

// Cross Origin Error
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './cs-client/dist/cs-client')));
app.use(
  '/',
  express.static(path.join(__dirname, './cs-client/dist/cs-client'))
);

server.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;