// Data base query

const connection = require('./connection');

const orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM restaurant_burger", (err, data) => {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    insertOne: function (burgerName, cb) {
        const sqlQuery = `INSERT INTO restaurant_burger(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, (err, data) => {
            if (err) cb(err, null);
            cb(null, data);
        });
    }
};

module.exports = orm;