const express = require("express");
const router = express.Router();

const imageUpload = require("../helpers/imageUpload");

const adminControllers = require("../controllers/admin");


const csrf = require("../middlewares/csrf");

const isAdmin = require("../middlewares/is-admin");
const isModerator = require("../middlewares/is-moderator");
const isAuth = require("../middlewares/auth");

// History ADD

router.get("/addforhistory",isModerator ,csrf,adminControllers.get_add_history);

router.post("/addforhistory", isModerator ,imageUpload.upload.single("photo"),adminControllers.post_add_history)


// History UPDATE

router.get("/editforhistory/:id", isModerator ,csrf,adminControllers.get_edit_history);

router.post("/editforhistory/:id",isModerator ,imageUpload.upload.single("photo"),adminControllers.post_edit_history);

// History Delete

router.get("/historydelete/:id",isModerator , csrf ,adminControllers.get_delete_history);

router.post("/historydelete/:id", isModerator ,adminControllers.post_delete_history);


router.get("/", isModerator ,adminControllers.history_list);


// R35 Models

// R35 Models Add

router.get("/addr35models", isModerator ,csrf,adminControllers.get_addr35models);

router.post("/addr35models", isModerator ,imageUpload.upload.single("r35forphoto"), adminControllers.post_addr35models);


// R35 Models edit
router.get("/r35modelsedit/:id",isModerator , csrf,adminControllers.get_edit_r35models);
                            
router.post("/r35modelsedit/:id", isModerator ,imageUpload.upload.single("r35forphoto"), adminControllers.post_edit_r35models)


// R35 Models Delete
router.get("/r35modelsdelete/:id", isModerator ,csrf,adminControllers.get_delete_r35models);
// r35modelsdelete/1
router.post("/r35modelsdelete/:id", isModerator ,adminControllers.post_delete_r35models);
router.get("/r35models",isAuth , adminControllers.r35models_list);

// Users
router.get("/users", isAdmin ,adminControllers.get_user);
router.get("/users/:userid",isAdmin ,csrf,adminControllers.get_user_edit);
router.post("/users/:userid",isAdmin, imageUpload.upload.single("userforphoto"),adminControllers.post_user_edit);

router.get("/adduser", isAdmin,csrf,adminControllers.get_add_user); 
router.post("/adduser", isAdmin,csrf,imageUpload.upload.single("userforphoto"),adminControllers.post_add_user); 

router.get("/user/:userid", isAdmin,csrf,adminControllers.get_delete_user); 
router.post("/user/:userid", isAdmin,adminControllers.post_delete_user);  

router.get("/my_user_edit/:userid",isAuth,csrf,adminControllers.get_myuser_edit);
router.post("/my_user_edit/:userid",isAuth,csrf,imageUpload.upload.single("userforphoto"),adminControllers.post_myuser_edit);

router.post("/my_user_edit/password/:userid",isAuth,csrf,adminControllers.post_password_change);
 

// Inbox
router.get("/inbox", isModerator,adminControllers.get_inbox);
router.get("/inbox_detail/:id",csrf ,isModerator,adminControllers.get_detail_message);

router.get("/inbox_delete/:id", isModerator,csrf,adminControllers.get_delete_message);
router.post("/inbox_delete/:id", isModerator,csrf,adminControllers.post_delete_message);

module.exports = router;