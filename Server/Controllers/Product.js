const { trusted } = require("mongoose");
const Product = require("../Schemas/Product");

const addProduct = async (req, res) => {
  const { name, price, version } = req.body;
  try {
    const foundProduct = await Product.findOne({ name });
    if (foundProduct) {
      res.send({
        ok: true,
        data: `There is already a similair product in your cart`,
      });
    } else {
      await Product.create({
        name,
        price,
        version,
      });
    }
    res.send({
      ok: true,
      data: `your product ${name} is succesfully added to your cart`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      error: "An error occurred while adding the product",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const foundProduct = await Product.findOneAndDelete({ name });
    if (foundProduct) {
      res.send({
        ok: true,
        data: `product ${name} deleted`,
      });
    } else {
      res.send({
        ok: true,
        data: `No product in your card with name: ${name}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      error: "An error occurred while adding the product",
    });
  }
};

const deleteCart = async (req, res) => {
  const {} = req.body;
  try {
    const foundProducts = await Product.deleteMany({});
    if (foundProducts) {
      res.send({
        ok: true,
        data: `Your cart has been emptied`,
      });
    } else {
      res.send({
        ok: true,
        data: "Nothing is in your cart",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      error: "an error occurred while adding the product",
    });
  }
};
module.exports = {
  addProduct,
  deleteProduct,
  deleteCart,
};
