const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

//Routes
router.post("/login", function(req, res){
    authController.login();  
});

router.get('/users', async function(req, res, next) {
    try {
      res.json(await usersController.users());
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
});
  
router.get("/test", async (req, res) => {
    res.status(202).send({
        message: "need some help"
    })
})

module.exports = router;