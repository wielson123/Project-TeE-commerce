import React, { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { useNavigate } from "react-router-dom";
// import jwt from 'jsonwebtoken'
// react-scripts from version 5 shipped with react 18 is not supporting jsonwebtoken so we need to use alternative like jose to decode the JWT token in the client
import * as jose from "jose";

const Login = (props) => {
  const [form, setValues] = useState({
    emailaddress: "",
    password: "",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/users/login`, {
        emailaddress: form.emailaddress.toLowerCase(),
        password: form.password,
      });
      setMessage(response.data.message);
      if (response.data.ok) {
        // here after login was successful we extract the email passed from the server inside the token
        let decodedToken = jose.decodeJwt(response.data.token);
        // and now we now which user is logged in in the client so we can manipulate it as we want, like fetching data for it or we can pass the user role -- admin or not -- and act accordingly, etc...
        console.log(
          "Email extracted from the JWT token after login: ",
          decodedToken.userEmail
        );
        setTimeout(() => {
          props.login(response.data.token, response.data.admin);
          navigate("/secret-page");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        className="loginform"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <h3 className="logintitle">Login Here</h3>
        <label className="loginlabel">Username</label>
        <input
          className="logininput"
          type="text"
          placeholder="Email or Phone"
          id="username"
        />

        <label className="loginlabel">Password</label>
        <input
          className="logininput"
          type="text"
          placeholder="Password"
          id="password"
        />

        <button className="loginbutton">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
