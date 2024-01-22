module.exports = (req,res,next) => {
    if(!req.session.isAuth){ // will redirect if user is not logged in
        return res.redirect("/admin/account/login?returnUrl=" + req.originalUrl)        
    }
    
    // here is admin control, if not admin, it will redirect to login page
    if(!req.session.roles.includes(1)){
        req.session.message = {text: "Login with an Authorized Account to Access the Link",class : "danger"};

        return res.redirect("/admin/account/login?returnUrl=" + req.originalUrl)                
    }

    next();
}