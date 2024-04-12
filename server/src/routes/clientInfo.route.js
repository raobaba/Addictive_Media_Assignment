const express = require("express");
const clientInfoRouter = express.Router();
const { saveClientInfo } = require("../controllers/clientInfo.controller");

clientInfoRouter.post("/clientinfo", saveClientInfo);

module.exports = clientInfoRouter;
