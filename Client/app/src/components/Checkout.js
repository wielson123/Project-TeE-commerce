import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <ul className="Checkout">
      <li>
        <Link to="/CheckoutPage"> Checkout</Link>
      </li>
    </ul>
  );
}

export default Checkout;
