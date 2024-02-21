const { trusted } = require("mongoose");
const Product = require("../Schemas/Product");

const addProduct = async (req, res) => {
  const { name, price, version, image, description } = req.body;
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
        image,
        description,
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

// display products

const productDisplay = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({
      ok: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

//deleteProducs

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

// deleteCart

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
  productDisplay,
};
