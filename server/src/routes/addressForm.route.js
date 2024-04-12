const express = require('express');
const addressRouter = express.Router();
const { addAddressToUser } = require('../controllers/addressForm.controller');

addressRouter.post('/users/:userId/addresses', addAddressToUser);

module.exports = addressRouter;
