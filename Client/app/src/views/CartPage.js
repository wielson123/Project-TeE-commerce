import { URL } from "../config";
import { useState } from "react";

import React from "react";

const Cart = ({ cart, updateQuantity, removeItem, emptyCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img
                className="CartImage"
                src={`${URL}${item.image}`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>Remove Item</button>
            </div>
          ))}
          <h1>Total Quantity: {totalQuantity}</h1>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={() => emptyCart()}>Empty Cart</button>
        </div>
      )}
      <div>
        <button> continue shopping!</button>
        <button> Buy now!</button>
      </div>
    </div>
  );
};

export default Cart;
