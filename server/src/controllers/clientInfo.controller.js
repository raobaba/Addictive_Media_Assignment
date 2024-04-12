const ClientInfo = require('../models/clientInfo.model');

exports.saveClientInfo = async (req, res) => {
  try {
    const { ip, deviceType, browser, userAgent } = req.body;
    const clientInfo = new ClientInfo({
      ip,
      deviceType,
      browser,
      userAgent
    });
    await clientInfo.save();
    res.status(201).json({ message: 'Client information saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
