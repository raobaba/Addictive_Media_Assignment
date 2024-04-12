const express = require("express");
require("dotenv").config();
const cors = require("cors");
const device = require("express-device");
const clientInfoRouter = require("./routes/clientInfo.route");

const Connection = require("./config/db.js");
const userFormRouter = require("./routes/userForm.route.js");
const addressRouter = require("./routes/addressForm.route.js");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(device.capture()); 

Connection();
app.use("/api/v1", userFormRouter);
app.use("/api/v1", addressRouter);
app.use("/api/v1", clientInfoRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;
