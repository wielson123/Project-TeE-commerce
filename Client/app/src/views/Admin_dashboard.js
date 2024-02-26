import React from "react";
import "../App.css";
import DiscoverButton from "../components/DiscoverButton";
import { useNavigate } from "react-router-dom";

const AdmDash = (props) => {
  const handleClick = () => {};
  const navigate = useNavigate();

  return (
    <div className="AdminDashboard">
      <div className="dashboard-content">
        <h1 className="dashboard-title">This is your admin dashboard</h1>
      </div>
      <div className="dashboard-footer">
        <DiscoverButton onClick={() => handleClick()} />
        Go to shop
      </div>
      <button
        onClick={() => {
          props.logout();
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default AdmDash;
