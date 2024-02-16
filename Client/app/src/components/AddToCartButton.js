import React from "react";

const AddToCartButton = ({ product, addToCart }) => {
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
};

export default AddToCartButton;
