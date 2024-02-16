import React from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  return (
    <ul className="hamb">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/TeamMission">Team & Mission</NavLink>
      </li>
      <li>
        <NavLink to="/Webshop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/News"> News</NavLink>
      </li>
    </ul>
  );
}
export default HamburgerMenu;
