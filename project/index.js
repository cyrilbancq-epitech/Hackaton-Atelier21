const express = require('express');
const cors = require('cors');
const port = 8000;
const path = require('path');

// DB CONNECT
require('./database');

// IMPORT ROUTER
const index = require('./routes');

const app = express();
exports.app = app;

// EXPRESS USE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static(path.join(__dirname, './build')));
app.use(express.static(path.join(__dirname, './build-admin')));
app.use(index);

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, './build-admin/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

module.exports = app;