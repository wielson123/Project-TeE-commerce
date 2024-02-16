import React, { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [form, setValues] = useState({
    emailaddress: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/users/register`, {
        emailaddress: form.emailaddress,
        password: form.password,
      });
      setMessage(response.data.message);

      console.log(response);
      if (response.data.ok) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="form_container"
    >
      <label>Email</label>
      <input name="emailaddress" />

      <label>Password</label>
      <input name="password" /*required*/ />

      <button>register</button>
      <div className="message">
        <h4>{message}</h4>
      </div>
    </form>
  );
};

export default Register;
