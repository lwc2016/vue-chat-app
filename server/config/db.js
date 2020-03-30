const mysql = require("mysql");
const co = require("co-mysql");

const connection = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "chat_app"
});

module.exports = co(connection);