const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "my-db"
});

mysqlConnection.connect((err) => {
    if (err) {
        console.error("MySQL connection error:", err);
        throw err;
    }
    console.log("MySQL connected");
});

module.exports = mysqlConnection;