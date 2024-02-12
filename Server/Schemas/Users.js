const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  emailaddress: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  address: [
    {
      country: String,
      city: String,
      street: String,
      streetNumber: Number,
      appartmentNumber: { type: Number, unique: true },
    },
  ],
  phone: { type: Number, required: false },
  boughtProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  lastLoggedIn: { type: Date, required: true },
});

module.exports = mongoose.model("user", userSchema);
