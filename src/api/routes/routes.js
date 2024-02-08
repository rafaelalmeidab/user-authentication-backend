const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController.js');
const usersController = require('../controllers/usersController.js');

console.log("teste");
console.log(authController);
console.log(usersController);
console.log("fim teste");


router.post("/login", function(req, res){
    authController.login  
});

router.get("/users", function(req, res){
    usersController.users
});

router.get("/test", async (req, res) => {
    return res.json({
        message: "/test"
    })
})

module.exports = router;
