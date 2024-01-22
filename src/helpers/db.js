const mysql = require("mysql2");
const config = require('../config/config');

let connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if(err){
        return console.log(err);
    }
    else {
        console.log(`DB connectionRequest Successful ${connection.threadId}`)
    }
})

module.exports = connection.promise();