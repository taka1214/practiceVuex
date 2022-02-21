const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'th19921447',
  database: 'Vocabulary'
});

module.exports = {
  connection
}