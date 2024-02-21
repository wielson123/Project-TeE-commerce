import React from "react";
import { Link } from "react-router-dom";

const ContinueShopping = ({ onClick }) => {
  return (
    <Link to="/Webshop">
      <button onClick={onClick}>Continue shopping</button>
    </Link>
  );
};

export default ContinueShopping;
