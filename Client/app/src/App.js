import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "./config";
import * as jose from "jose";
//Components import
import Navbar from "./components/Navbar.js";
import Home from "./views/Home";
import TeamMission from "./views/TeamMission";
import Webshop from "./views/Webshop";
import News from "./views/News";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import SecretPage from "./views/SecretPage.js";
import Stripe from "./components/stripe";
import PaymentSuccess from "./views/payment_success";
import PaymentError from "./views/payment_error";
import Contact from "./views/Contact.js";
import AdmDash from "./views/Admin_dashboard.js";
import Faqs from "./views/Faqs";
import Returns from "./views/Return";
import Shipping from "./views/Shipping";
import Care from "./views/Care";
import Footer from "./components/Footer.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);
  const [adminStatus, setAdminStatus] = useState(null);
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // login, logout, register as a user

  useEffect(() => {
    const verify_token = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`${URL}/users/verify_token`);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  const login = (token) => {
    debugger;
    let decodedToken = jose.decodeJwt(token);
    console.log(decodedToken);
    // composing a user object based on what data we included in our token (login controller - jwt.sign() first argument)
    let user = {
      email: decodedToken.userEmail,
      admin: decodedToken.admin,
    };
    localStorage.setItem("token", JSON.stringify(token));
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  // fetch data about the products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL}/product/productDisplay`);
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );

    if (existingProductIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    debugger;
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    }
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeamMission" element={<TeamMission />} />
        <Route
          path="/Webshop"
          element={<Webshop products={products} addToCart={addToCart} />}
        />
        <Route path="/News" element={<News />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/secret-page" />
            ) : (
              <Login login={login} />
            )
          }
        />
        {isLoggedIn && adminStatus ? (
          <Route path="/admin" element={<AdmDash logout={logout} />} />
        ) : null}
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/secret-page" /> : <Register />}
        />
        <Route
          path="/secret-page"
          element={
            !isLoggedIn ? (
              <Navigate to="/" />
            ) : user.admin ? (
              <AdmDash logout={logout} />
            ) : (
              <SecretPage logout={logout} user={user} />
            )
          }
        />
        <Route
          path="/CartPage"
          element={
            <Stripe
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              emptyCart={emptyCart}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/error" element={<PaymentError />} />
        <Route path="/faq's" element={<Faqs />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/care" element={<Care />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
