import React from "react";
import DiscoverButton from "../components/DiscoverButton";

const Home = () => {
  const handleClick = () => {};

  return (
    <div className="homepage">
      <h1>Welcome!</h1>

      <DiscoverButton onClick={() => handleClick()} />
    </div>
  );
};

export default Home;
