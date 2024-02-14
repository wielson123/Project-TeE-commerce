const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  emailaddress: { type: String, required: true, unique: true },
  address: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    postalcode: { type: Number, required: true },
    street: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    appartmentNumber: { type: String, required: false },
  },

  phone: { type: Number, required: false },
});

module.exports = mongoose.model("user", userSchema);
