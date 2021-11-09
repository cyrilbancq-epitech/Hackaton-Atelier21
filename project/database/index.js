const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: '8080',
  user: 'user',
  password: 'password',
  database: 'atelier',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

if(pool) {
  console.log("Successfully connected to DB !");
};

module.exports = pool;