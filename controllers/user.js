const db = require("../data/db");
var htmlspecialchars = require('htmlspecialchars'); 
exports.historyandr35list = async function(req,res){
    const message = req.session.user_message;
    try {
        const [modelHistory,] = await db.execute("select * from historymodels WHERE active=1");
        const [r35model,] = await db.execute("select * from r35models WHERE active=1")

        return res.render("user/index", {
            modelHistory : modelHistory,
            r35model : r35model,
            title : "Home",
            message : message
        })
    }
    catch(err){
        console.log(err);
    }
  
}
exports.get_history_details = async function(req,res){
    const historyid = req.params.id;
    try {
        const [historys,] = await db.execute("Select * from historymodels WHERE active=1 AND id=?",[historyid]);

        return res.render("user/history-details",{
            title : "History Details",
            history : historys[0]
        })
    }catch(err){
        console.log(err);
    }   
}

exports.get_r35model_details = async function(req,res){
    const r35modelid = req.params.id;
    try {
        const [r35model,] = await db.execute("Select * from r35models WHERE id=?",[r35modelid]);

        return res.render("user/r35model-details",{
            title : "R35 Model Details",
            r35 : r35model[0]
        })
    }catch(err){
        console.log(err);
    }   
}

exports.post_user_message = async function(req,res){
    const fullname = htmlspecialchars(req.body.fullname);
    const email = htmlspecialchars(req.body.email);
    const message = htmlspecialchars(req.body.message); 

    try{
        if(fullname == "" || email == "" || message == ""){
            req.session.user_message = {text : "Fill in the required fields" , class: "danger"}
            res.redirect("/#contact")
        }
        else{
            await db.execute("INSERT INTO user_message(fullname,email,message) VALUES(?,?,?)",
        [fullname,email,message]);

            req.session.user_message = {text : "Your message has been sent" , class: "success"}
            res.redirect("/#contact");
        }
        
    }catch(err){
        console.log(err);
    }
}

