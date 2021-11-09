const express = require('express');
const cors = require('cors');
const port = 8000;

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
app.use(index);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

module.exports = app;