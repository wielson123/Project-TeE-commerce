const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  emailaddress: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  Street: { type: String, required: true },
  number: { type: Number, required: true },
  appartment: { type: String, required: false },
  phone: { type: Number, required: false },
  boughtProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  lastLoggedIn: { type: Date, required: true },
});

module.exports = mongoose.model("user", userSchema);
