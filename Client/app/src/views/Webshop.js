import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import AddToCartButton from "../components/AddToCartButton";

const Webshop = () => {
  const [products, setProducts] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

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
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log("cartitems", cartItems);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (products.length || 1));
    }, 3000); // Change slide duration as needed (in milliseconds)
    return () => clearInterval(intervalId);
  }, [products]);

  return (
    <div className="container">
      <div className="products-container">
        <ul className="products">
          {products ? (
            products.map((product, index) => (
              <li
                key={product._id}
                className={index === activeIndex ? "active" : "hidden"}
              >
                <img
                  className="productImage"
                  src={`${URL}${product.image}`}
                  alt={product.name}
                />
                <div className="productDescription">
                  <p>
                    {product.name} - €{product.price}
                  </p>
                  <AddToCartButton product={product} addToCart={addToCart} />
                </div>
              </li>
            ))
          ) : (
            <h2>loading</h2>
          )}
        </ul>
      </div>

      <div className="sticky-container">
        <div className="sticky-div">
          {products && (
            <img
              src={`${URL}${products[activeIndex].image}`}
              alt={`Sticky Image ${activeIndex + 1}`}
              className="sticky-image active"
            />
          )}
          <div className="dots-container">
            {products &&
              products.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webshop;
