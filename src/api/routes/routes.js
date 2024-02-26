const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

//Routes
router.post("/login", function(req, res){
    authController.login();  
});

router.get("/users", function(req, res){
    usersController.users()
});


router.get("/test", async (req, res) => {
    res.status(202).send({
        message: "need some help"
    })
})

module.exports = router;