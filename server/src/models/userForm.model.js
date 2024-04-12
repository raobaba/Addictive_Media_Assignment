const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  phone: {
    type: String,
    required: true,
    unique: true, // Ensure phone is unique
    validate: {
      validator: function (value) {
        // Regular expression for phone number validation
        return /^[0-9]{10}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
