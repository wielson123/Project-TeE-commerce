import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../config";
import axios from "axios";
import { useState } from "react";

const SecretPage = (props) => {
  const navigate = useNavigate();

  const [form, setValues] = useState({
    emailaddress: "",
    emailaddress2: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      debugger;
      const response = await axios.post(`${URL}/users/deleteUser`, {
        emailaddress: form.emailaddress,
        emailaddress2: form.emailaddress,
      });
      setMessage(response.data.data);

      if (
        response.data.ok &&
        message !==
          `User with emailaddress ${form.emailaddress} successfully deleted.`
      ) {
        props.logout();
        navigate("/");
        alert("We're sorry you are leaving :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="secret_page">
      <h1>Welcome to your dashboard {props.user.emailaddress}</h1>
      <h2>
        Here you can see your profile information and your shipping address
      </h2>
      <p>name: {props.user.firstname}</p>
      <p>email: {props.user.email}</p>
      <p>addres: {props.user.name}</p>
      <p>street: {props.user.email}</p>
      <p>number: {props.user.name}</p>
      <p>postal code: {props.user.email}</p>
      <p>phone number:{props.user.email} </p>

      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="form_container"
      >
        <label>Enter emailaddress</label>
        <input name="emailaddress" />

        <label>Confirm emailaddress</label>
        <input name="emailaddress2" /*required*/ />

        <button>Delete account</button>

        <div className="message"></div>
      </form>
      <div>
        <button
          onClick={() => {
            props.logout();
            navigate("/");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default SecretPage;
