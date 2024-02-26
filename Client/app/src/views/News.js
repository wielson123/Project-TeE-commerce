import React from "react";
import axios from "axios";

const News = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const data = { email };
    try {
      const res = await axios.post(
        "http://localhost:5010/emails/send_newsletter",
        data
      );
      console.log("Response: ", res);
      event.target.elements.email.value = "";
      alert("You are subscribed!)");
    } catch (error) {
      console.log(error?.message || error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Our T-Shirt World!</h1>
        <p>
          Step into a world of creativity and style! At our T-shirt emporium,
          we're passionate about bringing you the latest trends and the coolest
          designs. Dive into our diverse collection of unique T-shirts, ranging
          from quirky graphics to elegant patterns - there's something for
          everyone!
        </p>
        <p>
          But wait, there's more! Unleash your inner fashionista with our
          insightful articles. From fashion tips to styling hacks, our blog is
          your go-to destination for all things trendy and chic.
        </p>
        <p>
          Want to stay in the loop? Don't miss out on exclusive offers, new
          arrivals, and exciting updates. Subscribe to our newsletter now and be
          the first to know about everything that's happening in our T-shirt
          universe!
        </p>
        <input
          required={true}
          style={{
            border: "1px solid grey",
            width: "50%",
            display: "block",
            margin: "0 auto",
            marginBottom: "1em",
          }}
          type="email"
          placeholder="Your email"
          name="email"
        />
        <div className="subscribe">
          <button className="subscribe-btn" type="submit" label="Send">
            Subscribe!
          </button>
        </div>
      </form>
    </div>
  );
};

export default News;
