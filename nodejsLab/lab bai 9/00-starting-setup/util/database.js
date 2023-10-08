const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "new_schema",
  password: "chientc123",
});

module.exports = pool.promise();
