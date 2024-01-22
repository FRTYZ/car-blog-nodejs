module.exports = (req,res,next) => {
    if(!req.session.isAuth){
        return res.redirect("/admin/account/login?returnUrl=" + req.originalUrl);
    }
    if(!(req.session.roles.includes(1)) && !(req.session.roles.includes(2)) && !(req.session.roles.includes(3))  ){
        req.session.message = {text: "Login with an Authorized Account to Access the Link", class: "danger"};

        return res.redirect("/admin/account/login?returnUrl=" + req.originalUrl)                
    }
    next();
}