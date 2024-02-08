const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController.js');
const usersController = require('../controllers/usersController.js');

router.post("/login", authController.login);
router.get("/users", usersController.users);

router.get("/test", async (req, res) => {
    return res.json({ message: "/test" });
});

module.exports = router;
