import React from "react";
import { NavLink } from "react-router-dom";
import { URL } from "../config";
import HomeButton from "./HomeButton";

const Navbar = ({ isLoggedIn, totalCartQuantity }) => {
  console.log("URL:", URL);
  return (
    <div className="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul className="menu-items">
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
            <NavLink to="/News"> News </NavLink>
          </li>
          <li>
            <NavLink to="/Contact"> Contact us </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <HomeButton />
      </div>

      <div className="rightnav">
        {isLoggedIn === false && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}

        {isLoggedIn === true && (
          <NavLink to="/secret-page">My dashboard</NavLink>
        )}
        <NavLink to="/CartPage">
          <img src={`${URL}/assets/Carticon2.png`} alt="carticon" />
          {totalCartQuantity > 0 && <span>{totalCartQuantity}</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
