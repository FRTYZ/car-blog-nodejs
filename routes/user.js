const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const csrf = require("../middlewares/csrf");

router.get("/", userController.historyandr35list);
router.get("/history_details/:id",userController.get_history_details);
router.get("/r35model_details/:id",userController.get_r35model_details);
router.post("/contact_message", csrf,userController.post_user_message);

module.exports = router;