const db = require("../helpers/db");
const bcrypt = require("bcrypt");

const emailService = require("../helpers/sendmail");
const config = require("../config/config");

const crypto = require("crypto");

exports.get_register = async function(req,res){
    const message = req.session.message;
    delete req.session.message;
    try{
        return res.render("auth/register", {
            title: "Register",
            message: message
        })
    }catch(err){
        console.log(err);
    }
}
exports.post_register = async function(req,res){
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const passwordagain = req.body.passwordagain;

    try{
        if(password != passwordagain){
            return res.render("auth/register", {
                title: "Register",
                message : {text :"both passwords are not the same", class : "warning"}
            });
        }
        
        const [user,] = await db.execute("Select email from users where email=?", [email]);
        const emaildata = user[0];
        if(emaildata){
            req.session.message = {text : "Your e-mail address is registered, please write a different e-mail address.", class:"warning"};
            return res.redirect("/admin/account/register");
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        
        await db.execute("INSERT INTO users (fullname,email,password) VALUES(?,?,?)", 
        [fullname,email,hashedPassword]);
        
        
        emailService.sendMail({
            from: config.email.from,
            to: email,
            subject: "Your account has been created",
            text : "Congratulations, your account has been created"
        })

        req.session.message = {text : "Registration completed", class : "success"};
        return res.redirect("/admin/account/login");      
       
    }catch(err){
        console.log(err);
    }
}

exports.get_login = async function(req,res){
    const message = req.session.message;
    delete req.session.message;
    try {
        return res.render("auth/login", {
            title : "Login",
            message : message
        })
    }catch(err){
        console.log(err);
    }
}

exports.post_login = async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    try {
        const [datauser,] = await db.execute("Select * from users where email=?", [email]);
        const user = datauser[0];
      
        if(!user){
            return res.render("auth/login",{
                title : "Login",
                message: { text: "Your email address is incorrect", class : "danger"}
            })
        }

        const match = await bcrypt.compare(password,user.password);
  
        if(match){
            req.session.isAuth = true;           
            req.session.fullname = user.fullname;
            req.session.email = user.email;
            req.session.userphoto = user.user_photo;
            const [roles,] = await db.execute("Select roleId from users WHERE id =?",[user.id]);
            req.session.roles = roles.map((role) => role["roleId"]);
                        
            req.session.userid = user.id;
            
            const url = req.query.returnUrl ? req.query.returnUrl : "/"
            return res.redirect(url);
        }
        return res.render("auth/login", {
            title :"Login",
            message: {text : "Your password is incorrect", class : "danger"}
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.get_logout = async function(req,res){
    try {
        await req.session.destroy();
        return res.redirect("/admin/account/login");
    }catch(err){

    }
}

exports.get_reset = async function(req,res){
    const message = req.session.message;
    delete req.session.message;
    try {
        return res.render("auth/reset-password", {
            title : "Reset Password",
            message : message
        })
    }catch(err){
        console.log(err);
    }
}

exports.post_reset = async function(req,res){
    const email = req.body.email;
    try {       
        const [userdata,] = await db.execute("Select * from users WHERE email=?", [email]);
        const user = userdata[0]
        if(!user){
            req.session.message = {text : "Email Not Found", class : "danger"};
            return res.redirect("admin/account/reset-password")
        }

        var token = crypto.randomBytes(32).toString("hex");
        var tokenExpiration = Date.now() + (1000 * 60 * 60);
      
        await db.execute("UPDATE users SET resetToken=? ,resetTokenExpiration =? WHERE id =?", 
        [token,tokenExpiration,user.id]);

        emailService.sendMail({
            from : config.email.from,
            to: email,
            subject: "Reset Password",
            html : `
            <p>Click the link below to Update your Password</p>
            <p>
                <a href="http://127.0.0.1:3000/admin/account/new-password/${token}">Reset Password</a>
            </p>
            `
        });
        req.session.message = {text : "Please check your email address to reset your password.", class: "success"};  
        res.redirect("/admin/account/login");
    }
    catch(err){
        console.log(err);
    }
}

exports.get_newpassword = async function(req,res){
    const token = req.params.token;
    try {
        const [isuser,] = await db.execute("Select * from users WHERE resetToken=? && resetTokenExpiration>?", 
        [token,Date.now()]);        
        const user = isuser[0];
       
        return res.render("auth/new-password", {
            title : "New Password",
            token : token,
            userId: user.id
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.post_newpassword = async function(req,res){
    const token = req.body.token;
    const userId = req.body.userId;
    const newPassword = req.body.password;
   
    try {
        const [userdata,] = await db.execute("Select * from users WHERE resetToken=? && resetTokenExpiration > ? && id=?", 
        [token,Date.now(),userId]);
      
        const updatePassword = await bcrypt.hash(newPassword,10);
        await db.execute("UPDATE users SET password=?, resetToken=?,resetTokenExpiration=? WHERE id=?",
        [updatePassword,null,null,userdata[0].id]);

        req.session.message = {text : "Your Password Has Been Changed Successfully", class : "success"}
        return res.redirect("/admin/account/login");
    }
    catch(err){
        console.log(err);
    }
}