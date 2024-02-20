import React from "react";
import { NavLink } from "react-router-dom";
import { URL } from "../config";
import HomeButton from "./HomeButton";

const Navbar = ({ isLoggedIn, totalCartQuantity }) => {
  console.log("URL:", URL);
  return (
    <div className="navbar">
      <div className="hamburger">
        <span>|||</span>
        <div className="hamburger-content">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/TeamMission">Team & Mission</NavLink>
          <NavLink to="/Webshop">Shop</NavLink>
          <NavLink to="/News"> News </NavLink>
        </div>
      </div>
      <div>
        <HomeButton />
      </div>

      <div className="rightnav">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/CartPage">
          <img src={`${URL}/assets/Carticon2.png`} alt="carticon" />
          {totalCartQuantity > 0 && <span>{totalCartQuantity}</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
