// Home.jsx

import React from "react";
import DiscoverButton from "../components/DiscoverButton";
import "../App.css";

const Home = () => {
  const handleClick = () => {};

  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-title">A T-shirt for everyone!</h1>
      </div>
      <div className="homepage-footer">
        <DiscoverButton onClick={() => handleClick()} />
      </div>
    </div>
  );
};

export default Home;
