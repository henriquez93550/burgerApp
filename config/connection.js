const mysql = require('mysql');
let connection;

// Brings up mysql and connects information inside data base
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root1',
    password: '',
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;