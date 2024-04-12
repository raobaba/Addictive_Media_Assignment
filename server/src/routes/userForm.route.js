const express = require('express');
const userFormRouter = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  deleteUserById
} = require('../controllers/userForm.controller');

userFormRouter.post('/create', createUser);
userFormRouter.get('/get', getUsers);
userFormRouter.get('/get/:id', getUserById);
userFormRouter.delete('/delete/:id', deleteUserById);

module.exports = userFormRouter;
