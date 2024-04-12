const mongoose = require("mongoose");

const clientInfoSchema = new mongoose.Schema({
  ip: String,
  deviceType: String,
  browser: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now },
});

const ClientInfo = mongoose.model("ClientInfo", clientInfoSchema);

module.exports = ClientInfo;
