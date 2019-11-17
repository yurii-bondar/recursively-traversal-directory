const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const mysql = require('mysql');
const dbConnection = require('express-myconnection');

module.exports = dbConnection(mysql, {
  host:     `${process.env.DB_HOST}`,
  user:     `${process.env.DB_USER}`,
  password: `${process.env.DB_PASS}`,
  port:     `${process.env.PORT}`,
  database: `${process.env.DB_NAME}`
}, 'single')


