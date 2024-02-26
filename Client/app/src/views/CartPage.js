import { URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import React from "react";
import ContinueShopping from "../components/ContinueShopping";

const Cart = ({ cart, updateQuantity, removeItem, emptyCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // const products = { cart };

  const navigate = useNavigate();
  const stripe = useStripe();
  // 1. When we click PAY button this function triggers first
  const createCheckoutSession = async () => {
    try {
      debugger;
      // 2. Sending request to the create_checkout_session controller and passing products to be paid for
      const response = await axios.post(
        `${URL}/payment/create-checkout-session`,
        { cart }
      );
      return response.data.ok
        ? // we save session id in localStorage to get it later
          (localStorage.setItem(
            "sessionId",
            JSON.stringify(response.data.sessionId)
          ),
          // 9. If server returned ok after making a session we run redirect() and pass id of the session to the actual checkout / payment form
          redirect(response.data.sessionId))
        : navigate("/payment/error");
    } catch (error) {
      navigate("/payment/error");
    }
  };

  const redirect = (sessionId) => {
    debugger;
    // 10. This redirects to checkout.stripe.com and if charge/payment was successful send user to success url defined in create_checkout_session in the controller (which in our case renders payment_success.js)
    stripe
      .redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: sessionId,
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="CartOversight" key={item.id}>
              <img
                className="CartImage"
                src={`${URL}${item.image}`}
                alt={item.name}
              />
              <div className="CartInfo">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
              </div>
              <div className="Buttons">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item._id)}>
                  Remove Item
                </button>
              </div>
            </div>
          ))}
          <h1 className="inCart">Products in cart: {totalQuantity}</h1>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={() => emptyCart()}>Empty Cart</button>
          <div className="pay-now-container">
            <button className="button" onClick={() => createCheckoutSession()}>
              Pay now
            </button>
          </div>
        </div>
      )}

      <div className="continueshopping">
        <ContinueShopping />
      </div>
    </div>
  );
};

export default Cart;
