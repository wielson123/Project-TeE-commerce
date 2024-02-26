import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul className="footer">
        <li>
          <NavLink to="/faq's">FAQ'S</NavLink>
        </li>
        <li>
          <NavLink to="/returns">RETURNS</NavLink>
        </li>
        <li>
          <NavLink to="/shipping">SHIPPING</NavLink>
        </li>
        <li>
          <NavLink to="/care"> T-SHIRT CARE </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
