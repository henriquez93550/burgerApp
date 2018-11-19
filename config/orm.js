// Data base query

const connection = require('./connection');

// cb means call back
const orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM restaurant_burger", (err, data) => {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    insertOne: (burgerName, cb) => {
        const sqlQuery = `INSERT INTO restaurant_burger(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, (err, data) => {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    updateOne: (condition, id, cb) => {
        const sqlQuery = `UPDATE restaurant_burger SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    deleteOne: (id, cb) => {
        const sqlQuery = `DELETE FROM restaurant_burger WHERE id = ${id}`;
        connection.query(sqlQuery, (err, data) => {
            if (err) cb(err, null);
            cb(null, data)
        });
    }
};

module.exports = orm;