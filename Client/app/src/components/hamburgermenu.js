import React from "react";
import { Link } from "react-router-dom";

function hamburgerMenu() {
  return (
    <ul className="hamb">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/TeamMission">Team & Mission</Link>
      </li>
      <li>
        <Link to="Webshop">Shop</Link>
      </li>
      <li>
        <Link to="News"> News</Link>
      </li>
    </ul>
  );
}
export default hamburgerMenu;
