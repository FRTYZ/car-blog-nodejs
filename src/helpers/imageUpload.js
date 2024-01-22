const multer = require("multer");
//for path
const path = require("path");

const storage = multer.diskStorage({ // set in object for our file settings
    destination : function(req,file,cb) { // request(request made), file (uploaded file information), cb (callback after the process is finished)
        //Checked according to the file names that will come from the file inputs
        if(file.fieldname === "photo"){
            cb(null, './public/user/image/GTR/');  // first parameter represents error
        }
        if(file.fieldname === "r35forphoto"){
            cb(null, './public/user/image/R35/');   
        }
        if(file.fieldname === "userforphoto"){
            cb(null, './public/admin/images/user_photo/'); 
        }
    },
    filename : function(req,file,cb) {
        // path,
        cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname));
        /* 
       1-) with parse we split the extension with name, the first parameter is originalname, the second is name
            example 1.jpg info => will show as 1
        2-) By adding - next to 1, we have added the current date and time in milliseconds.
        3-) For the extension, it will provide the original name to the parameter of the path.extname() function and bring us the extension. example 1.jpg will output jpg
        
        3 operations after null are as follows
        1- we got the name of the file without extension
        2- We have added the current date in milliseconds next to this name
        3- At the end, we provided the originalname of the file to the parameter of the path.extname() function and got our extension.
            file_name + date.now . extension
        */
    }
});

const upload = multer({ //It was sent to the storage we prepared as an object for the multer package
    storage: storage
}); 

// We will open it outside and use it wherever we want.
module.exports.upload = upload;
// After exporting, we will use it as upload and send the destination and filename in the storage.