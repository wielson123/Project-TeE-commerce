const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String, required: true },
  emailaddress: { type: String, required: true, unique: true },
  address: {
    country: { type: String },
    city: { type: String },
    postalcode: { type: Number },
    street: { type: String },
    streetNumber: { type: Number },
    appartmentNumber: { type: String },
  },

  phone: { type: Number, required: false },
});

module.exports = mongoose.model("user", userSchema);
