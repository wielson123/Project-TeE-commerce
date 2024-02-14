import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <ul className="Cart">
      <li>
        <Link to="/cart"> Cart</Link>
      </li>
    </ul>
  );
}

export default Cart;
