require('dotenv').config()

const config = {
    db : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
        port: process.env.DB_PORT
    },
    email : {
        username : "fr4tyildiz@outlook.com",
        password : "123hape123.+",
        from : "fr4tyildiz@outlook.com"
    }
}

module.exports = config