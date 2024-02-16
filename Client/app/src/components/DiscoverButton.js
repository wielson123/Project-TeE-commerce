import React from "react";
import { Link } from "react-router-dom";

const DiscoverButton = ({ onClick }) => {
  return (
    <Link to="/Webshop">
      <button onClick={onClick}>Discover</button>
    </Link>
  );
};

export default DiscoverButton;
