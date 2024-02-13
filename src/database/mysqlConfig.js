// var mysql = require('mysql2/promise');

// var connection = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "barmanagementdb",
//     port : 3306
// });

// module.exports = { connection };

module.exports = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'barmanagementdb',
    port: 3306,
    connectionLimit: 10
};
