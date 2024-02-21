import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const HomeButton = ({ onClick }) => {
  return (
    <NavLink className="stupidNavLink" to="/">
      <p className="company" onClick={onClick}>
        OKDude!
      </p>
    </NavLink>
  );
};

export default HomeButton;
