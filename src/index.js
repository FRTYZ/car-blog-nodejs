const express = require("express");
const app = express();
const path = require("path");

const csurf = require("tiny-csrf"); // import csrf


app.set("view engine","ejs");
app.set('views','./src/views');
app.use(express.urlencoded({extended: false}));

// middlewares
const locals = require("./middlewares/locals");

const cookieParser = require('cookie-parser');
app.use(cookieParser("cookie-parser-secret"));

const session = require('express-session');

app.use(session({
    secret : "hello world",
    resave : false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 *24
    }
}));

app.use(locals);
app.use(csurf(
    "123456789iamasecret987654321look", // secret -- must be 32 bits or chars in length
    ["post"], // the request methods we want CSRF protection for
    ["/detail", /\/detail\.*/i], // any URLs we want to exclude, either as strings or regexp
    [process.env.SITE_URL + "/service-worker.js"]  // any requests from here will not see the token and will not generate a new one
));
app.use("/static", express.static(path.join(__dirname, "../public")));


// Routes
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");


app.use("/admin",adminRoutes);
app.use(userRoutes);
app.use("/admin/account",authRoutes);

app.listen(3000, function(){
    console.log("listening on port 3000");
});