var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test@123",
    socketPath:"/var/run/mysqld/mysqld.sock",
    database: "CusData"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // con.query("CREATE DATABASE CusData", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
    // query = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), address VARCHAR(255))"
    // query = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    query = "select * from customers";
    con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
});