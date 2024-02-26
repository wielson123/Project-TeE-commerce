import React from "react";
import { Link } from "react-router-dom";

const ContinueShopping = ({ onClick }) => {
  return (
    <Link to="/Webshop">
      <div className="pay-now-container">
        <button className="button" onClick={onClick}>
          Continue shopping
        </button>
      </div>
    </Link>
  );
};

export default ContinueShopping;
