const mysql = require("mysql2");
const config = require('../config/config');

let connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if(err){
        return console.log(err);
    }
    console.log("succesfully connected to mysql server");
})

module.exports = connection.promise();