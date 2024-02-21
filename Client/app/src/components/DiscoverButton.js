import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const DiscoverButton = ({ onClick }) => {
  return (
    <Link to="/Webshop">
      <button className="discover-button" onClick={onClick}>
        Discover
      </button>
    </Link>
  );
};

export default DiscoverButton;
