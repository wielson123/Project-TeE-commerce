const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("product", stockSchema);
