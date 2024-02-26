const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config()

app.use(express.json());

const routes = require("./api/routes/routes.js");
app.use("/api", routes);


app.post("/api/users", (req, res) => {
    console.log(req.body);
})

module.exports = app;