const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  version: [
    {
      color: { type: String, required: true },
      logo: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
