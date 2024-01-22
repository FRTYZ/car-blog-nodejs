module.exports = function(req,res,next){
    /*
    in this file,
    information to be used everywhere is kept
    - Added req.session.isAuth to res.locals.isAuth
    - Thanks to this middleware, all .ejs files can be accessed.
    
    */
    res.locals.isAuth = req.session.isAuth;

    // Additional information can be sent.
    res.locals.fullname = req.session.fullname;

    res.locals.isAdmin = req.session.roles ? req.session.roles.includes(1) : false;
    res.locals.isModerator = req.session.roles ? req.session.roles.includes(2) : false;
    res.locals.userid = req.session.userid;
    res.locals.email = req.session.email;
    res.locals.photo = req.session.userphoto

    next();
}