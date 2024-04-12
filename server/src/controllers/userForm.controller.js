const User = require('../models/userForm.model');

const createUser = async (req, res) => {
    try {
      const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
      if (existingUser) {
        return res.status(400).send("User with this email or phone already exists.");
      }
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ message: "User created successfully.", user });
    } catch (error) {
      res.status(400).send("Error creating user: " + error.message);
    }
  };

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUserById = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send("User not found.");
      }
      res.send("User deleted successfully.");
    } catch (error) {
      res.status(500).send("Error deleting user: " + error.message);
    }
  };

module.exports = { createUser, getUsers, getUserById, deleteUserById };
