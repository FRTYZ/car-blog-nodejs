const nodemailer = require("nodemailer");
//config file is included for required setting, and we will import from config file for few settings
const config = require("../config");

var tranporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers : "SSLv3"
    },
    // information we will use when connecting
    auth: {
        user : config.email.username,
        pass: config.email.password
    }
});

module.exports = tranporter;