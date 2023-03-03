const db = require("../data/db");
const fs = require("fs");

const bcrypt = require("bcrypt");


// History Model Controller

exports.history_list = async function(req,res){
    try {
        const [history,] = await db.execute("select * from historymodels");

        res.render("admin/admin-home", {
            title : "GTR Model History",
            tabletitleforhistory : "Model History",
            modelshistory : history  
        });
    }
    catch(err){
        console.log(err);
    }
};

exports.get_add_history = async function(req,res){
    res.render("admin/model-history-add", {
        title : "Add History Model"
    })
}

exports.post_add_history =  async function(req,res){
    const modelname = req.body.model;
    const years = req.body.years;
    const text = req.body.text;
    const photo = req.file.filename;
    const active = req.body.active == "on" ? 1 : 0;
     
    try {
        await db.execute("INSERT INTO historymodels (models,years,text,photo,active) VALUES (?,?,?,?,?)", 
        [modelname,years,text,photo,active]);

        res.redirect("/admin/");
    }catch(err){
        console.log(err);
    }
};



exports.get_edit_history = async function(req,res){
    const id = req.params.id;    
    try {
        const [data,] = await db.execute("select * from historymodels where id=?",[id]);
        const history = data[0];
        
        if(history){
            return res.render("admin/model-history-edit", {
                title : "Edit History",
                dataforhistory : history
            });
        }
        res.redirect("/admin")
       
    }catch(err){
        console.log(err);
    }
};

exports.post_edit_history = async function(req,res){
    const id = req.body.historyid;
    const modelname = req.body.model;
    const years = req.body.years;
    const text = req.body.text;
    const active = req.body.active == "on" ? 1 : 0;

    let photo = req.body.photo;    
    if(req.file){ 
        photo = req.file.filename; 

        fs.unlink("./public/user/image/GTR/" + req.body.photo , err => { 
            console.log(err)
        });
    }
    
    try {
        await db.execute("UPDATE historymodels SET models=?, years=?,text=?, photo=?, active=? where id=?",
        [modelname,years,text,photo,active,id]);
        res.redirect("/admin")
    }catch(err){
        console.log(err);
    }

}

exports.get_delete_history = async function(req,res){
    const historyid = req.params.id;

    try {
        const [data,] = await db.execute("select * from historymodels where id = ?", [historyid]);
        const history = data[0];

        res.render("admin/model-history-delete", {
            title: "History Delete",
            history : history
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.post_delete_history = async function(req,res){
    const historyid = req.body.historyid;
    const photo = req.body.photo;

    if(req.body.photo){
        fs.unlink("./public/user/image/GTR/" + photo, err => {
            console.log(err);
        })
    }
    try {
        await db.execute("delete from historymodels where id=?", [historyid]);

        res.redirect("/admin");
    }catch(err){
        console.log(err);
    }
}


// r35 Models Controller

exports.r35models_list =  async function(req,res){
    const userid = req.session.userid;
    const isModerator = req.session.roles.includes(2);
    const isAdmin = req.session.roles.includes(1);
    const isEditor = req.session.roles.includes(3);

    try{        
        if((isModerator || isEditor) && !isAdmin ){
            const [r35data,] = await db.execute("select * from r35models WHERE userId=?",
            [userid]);   
           
            res.render("admin/r35models",{
                title: "GTR R35 Models",
                r35models :r35data
            });
        }else {
            const [r35data,] = await db.execute("select * from r35models");        
            res.render("admin/r35models",{
                title: "GTR R35 Models",
                r35models :r35data
            });
        }
        
    }
    catch(err){
        console.log(err);
    }
}

exports.get_addr35models = async function(req,res){
    res.render("admin/r35models-add", {
        title : "Add R35 Model"
    })
};

exports.post_addr35models = async function(req,res){
    const model = req.body.model;
    const years = req.body.years;
    const price = req.body.price;
    const engine = req.body.engine;
    const gearbox = req.body.gearbox;
    const speed = req.body.speed;
    const photo = req.file.filename;
    const active = req.body.active == "on" ? 1 : 0;
    const userid = req.session.userid;
    const about = req.body.about;
    
    try {
        await db.execute("INSERT INTO r35models (model,year,price,engine,gearbox,speed,photo,about,active,userId) VALUES (?,?,?,?,?,?,?,?,?,?) ",
        [model,years,price,engine,gearbox,speed,photo,about,active,userid]);

        res.redirect("/admin/r35models");
    }catch(err){
        console.log(err);
    }
};

exports.get_edit_r35models = async function(req,res){
    const id = req.params.id;
    const userid = req.session.userid;
    const isAdmin = req.session.roles.includes(1);

    try{
    if(isAdmin){
        const [modeldata,] = await db.execute("select * from r35models where id=?", [id]);
        const r35data = modeldata[0];

        if(r35data){
            return res.render("admin/r35models-edit", {
                title : "r35 Models Edit",
                r35data : r35data
            })
        }
    }else{
        const [modeldata,] = await db.execute("select * from r35models where id=? AND userId=?", [id,userid]);
        const r35data = modeldata[0];

        if(r35data){
            return res.render("admin/r35models-edit", {
                title : "r35 Models Edit",
                r35data : r35data
            })
        }
    }
        res.redirect("/admin/r35models");
    }
    catch(err){
        console.log(err);
    }
}

exports.post_edit_r35models = async function(req,res){
    const id = req.body.r35id;
    const model = req.body.model;
    const years = req.body.years;
    const price = req.body.price;
    const engine = req.body.engine;
    const gearbox = req.body.gearbox;
    const speed = req.body.speed;
    const about = req.body.about;
    const active = req.body.active == "on" ? 1 : 0;

    const userid = req.session.userId;
    const isAdmin = req.session.roles.includes(1);

    let photo = req.body.r35forphoto;
    
    if(req.file){
        photo = req.file.filename;
        
        fs.unlink("./public/user/image/R35/" + req.body.r35forphoto , err => {
            console.log(err);
        });
    }

    try {
        if(isAdmin){            
            await db.execute("UPDATE r35models SET model=?,year=?,price=?,engine=?,gearbox=?,speed=?,active=?,photo=?,about=? WHERE id=?",
            [model,years,price,engine,gearbox,speed,active,photo,about,id]);
        }
        else{
            await db.execute("UPDATE r35models SET model=?,year=?,price=?,engine=?,gearbox=?,speed=?,active=?,photo=?,about=? WHERE userId=?",
            [model,years,price,engine,gearbox,speed,active,photo,about,userid]);
        }

        res.redirect("/admin/r35models");
    }catch(err){
        console.log(err);
    }
};

exports.get_delete_r35models =  async function(req,res){
    const r35id = req.params.id; 
    const userid = req.session.userid;
    const isAdmin = req.session.roles.includes(1);
    try {
        if(isAdmin) {
            const [sql,] = await db.execute("select * from r35models where id = ?",[r35id])
            const r35 = sql[0];

            res.render("admin/r35models-delete", {
                title: "R35 Models Delete",
                user : r35
            })
        }else{
            const [sql,] =  await db.execute("select * from r35models where id = ? AND userId=?",[r35id,userid]);
            const r35 = sql[0];
            res.render("admin/r35models-delete", {
                title: "R35 Models Delete",
                user : r35
            })
        }        
    }
    catch(err){
        console.log(err);
    }
}

exports.post_delete_r35models = async function(req,res){
    const r35id = req.body.r35id;
    const photo = req.body.photo;

    if(req.body.photo){
        fs.unlink("./public/user/image/R35/" + photo, err => {
            console.log(err);
        })
    }
    try {
        await db.execute("delete from r35models where id=?", [r35id]);

        res.redirect("/admin/r35models");
    }catch(err){
        console.log(err);
    }
};

exports.get_user = async function(req,res){
    try {
        const [users,] = await db.execute("SELECT users.id,users.fullname,users.email,users.roleId FROM users LEFT JOIN roles ON users.id = roles.id")
        res.render("admin/user-list", {
            title : "User List",
            users: users            
        })
    }catch(err){
        console.log(err);
    }
}

exports.get_user_edit = async function(req,res){
    const userid = req.params.userid;

    try {
        const [user,] = await db.execute("SELECT users.id,users.fullname,users.email,users.roleId,users.user_photo FROM users LEFT JOIN roles ON users.id = roles.id WHERE users.id = ?", 
        [userid]);
        const [roles,] = await db.execute("Select * from roles");
        
        res.render("admin/user-edit",{
            title : "User Edit",
            user : user[0],
            roles : roles
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.post_user_edit = async function(req,res){
    const userid = req.body.userid;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const role = req.body.role;

    let photo = req.body.userforphoto;
    
    if(req.file){
        photo = req.file.filename;
        
        fs.unlink("./public/admin/images/user_photo/" + req.body.userforphoto , err => {
            console.log(err);
        });
    }

    try {
        const [userdata,] = await db.execute("SELECT users.id,users.user_photo,users.fullname,users.email,users.roleId,roles.id,roles.rolename FROM users LEFT JOIN roles ON users.id = roles.id WHERE users.id = ?", 
        [userid]);        
        const user = userdata[0];
        
        if(user){
            await db.execute("UPDATE users SET fullname=?,email=?,user_photo=?,roleId=? WHERE id = ?",
            [fullname,email,photo,role,userid]);

            return res.redirect("/admin/users");
        }
        return res.redirect("/admin/users");
        
    }catch(err){
        console.log(err);
    }
}

exports.get_add_user = async function(req,res){
    try {
        const [roles,] = await db.execute("Select * from roles");

        res.render("admin/user-add",{
            title : "User Add",
            roles : roles
        });
    }catch(err){
        console.log(err);
    }
}

exports.post_add_user = async function(req,res){
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;
        const photo = req.file.filename;

    try {
        const hashedPassword = await bcrypt.hash(password,10);

        await db.execute("INSERT INTO users (fullname,email,password,user_photo,roleId) VALUES (?,?,?,?,?)", 
        [fullname,email,hashedPassword,photo,role]); 

        res.redirect("/admin/users");
    }
    catch(err){
        console.log(err);
    }
}


exports.get_delete_user = async function(req,res){
    const userid = req.params.userid;

    try {
        const [data,] = await db.execute("select * from users where id = ?", [userid]);
        const user = data[0];

        res.render("admin/user-delete", {
            title: "User Delete",
            user : user
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.post_delete_user = async function(req,res){
    const userid = req.body.userid;
    const photo = req.body.photo;
    if(req.body.photo){
        fs.unlink("./public/admin/images/user_photo/" + photo, err => {
            console.log(err);
        })
    }
  
    try {
        await db.execute("delete from users where id=?", [userid]);

        res.redirect("/admin/users");
    }catch(err){
        console.log(err);
    }
};

exports.get_myuser_edit = async function(req,res){
    const userid = req.session.userid;
    const message = req.session.message;
    try {
        const [user,] = await db.execute("SELECT * from users WHERE id = ?", 
        [userid]);
        
        res.render("admin/myuser-edit",{
            title : "User Edit",
            user : user[0],
            message : message,
            localid : userid,
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.post_myuser_edit = async function(req,res){
    const userid = req.body.userid;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const bio = req.body.bio;

    let photo = req.body.userforphoto;
    
    if(req.file){
        photo = req.file.filename;
        
        fs.unlink("./public/admin/images/user_photo/" + req.body.userforphoto , err => {
            console.log(err);
        });
    }

    try {
        const [userdata,] = await db.execute("SELECT * FROM users WHERE id = ?", 
        [userid]);        
        const user = userdata[0];
        
        if(user){
            await db.execute("UPDATE users SET fullname=?,email=?,user_photo=?,bio=? WHERE id = ?",
            [fullname,email,photo,bio,userid]);

            return res.redirect("/admin/my_user_edit/" + userid);
        }
        return res.redirect("/admin/my_user_edit/" + userid); 
        
    }catch(err){
        console.log(err);
    }
}
exports.post_password_change = async function(req,res){
    const id = req.body.id;
    const oldpass = req.body.oldpass;
    const password = req.body.password;
    const confirmpass = req.body.confirmpassword;
    
    try {
        const [userdata,] = await db.execute("Select password from users WHERE id=?", [id]);
        const passwordDb = userdata[0];
        
        const controllpass = await bcrypt.compare(oldpass,passwordDb.password);

        if(controllpass){
            if(password == confirmpass){
                const hashedPassword = await bcrypt.hash(password,10);
                
                await db.execute("UPDATE users SET password=? WHERE id=?",[hashedPassword,id]);
    
                return res.redirect("/admin/account/logout");
            }else{
                
                req.session.message = {text : "Passwords do not match", class:"warning"};                
                return res.redirect("/admin/my_user_edit/" + userid);
            }
        }else{
            req.session.message = {text : "old password is wrong", class:"warning"};                
            return res.redirect("/admin/my_user_edit/" + userid);
        }

    }catch(err){
        console.log(err);
    }
}

exports.get_inbox = async function(req,res){
    try {
        const [inbox,] = await db.execute("Select * from user_message");

        res.render("admin/user-message", {
            title : "User Message",
            inbox : inbox
        })
    }catch(err){
        console.log(err);
    }
}
exports.get_detail_message = async function(req,res){
    const id = req.params.id;
    try {
        const [inbox,] = await db.execute("Select * from user_message WHERE id=?",[id]);
        res.render("admin/user-message-detail", {
            title : "User Message Detail",
            inbox : inbox[0]
        })
    }catch(err){
        console.log(err);
    }
}

exports.get_delete_message = async function(req,res){
    const id = req.params.id;
    
    try {
        const [data,] = await db.execute("select * from user_message where id = ?", [id]);
        const message = data[0];

        res.render("admin/user-message-delete", {
            title: "Message Delete",
            message : message
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.post_delete_message = async function(req,res){
    const id = req.body.id;
  
    try {
        await db.execute("delete from user_message where id=?", [id]);

        res.redirect("/admin/inbox");
    }catch(err){
        console.log(err);
    }
};
