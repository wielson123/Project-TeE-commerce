import React from "react";
import { NavLink } from "react-router-dom";

const HomeButton = ({ onClick }) => {
  return (
    <NavLink className="stupidNavLink" to="/">
      <p className="company" onClick={onClick}>
        OKDude
      </p>
    </NavLink>
  );
};

export default HomeButton;
