var mysql = require('mysql');
var config = require('../config');

// make a whole bunch of DB connections available instead of just one
var connect = mysql.createPool({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
  connectionLimit : 20,
  queueLimit: 100,
  waitForConnection : true
});

module.exports = connect;
