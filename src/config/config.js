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
        username : process.env.EMAIL_USERNAME,
        password : process.env.EMAIL_PASS,
        from : process.env.EMAIL
    }
}

module.exports = config