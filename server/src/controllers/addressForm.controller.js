const Address = require("../models/addressForm.model");

const addAddressToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { addressLine1, addressLine2, addressLine3 } = req.body;

    const existingAddress = await Address.findOne({
      userId,
      addressLine1,
      addressLine2,
      addressLine3,
    });

    if (existingAddress) {
      return res.status(400).send("Address already exists for this user.");
    }

    const newAddress = new Address({
      userId,
      addressLine1,
      addressLine2,
      addressLine3,
    });

    await newAddress.save();

    res
      .status(201)
      .send({ message: "Address added successfully.", address: newAddress });
  } catch (error) {
    res.status(400).send("Error adding address: " + error.message);
  }
};

module.exports = {
  addAddressToUser,
};
