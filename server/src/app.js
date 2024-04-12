const express = require("express");
require("dotenv").config();
const cors = require("cors");

const Connection = require("./config/db.js");
const userFormRouter = require('./routes/userForm.route.js')
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
Connection();
app.use('/api/v1',userFormRouter)

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;