const config = {
    db : {
        host : "localhost",
        user : "root",
        password : "",
        database : "gtr-web",
        schema: {
            tableName: 'session',
            columnNames: {
                session_id: 'sid',
                expires: 'expires',
                data: 'data'
            }
        }
    },
    email : {
        username : "sample@sample.com",
        password : "samplepass",
        from : "sample@.gmail.com"
    }
}

module.exports = config