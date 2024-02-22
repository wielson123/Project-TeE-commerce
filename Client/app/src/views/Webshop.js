import React, { useState, useEffect } from "react";
import { URL } from "../config";

const Webshop = ({ products, addToCart }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (products?.length || 1));
    }, 3000); // Change slide duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [products]);

  return (
    <div className="container">
      <div className="products-container">
        <ul className="products">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <li
                key={product.id}
                className={index === activeIndex ? "active" : "hidden"}
              >
                <img
                  className="productImage"
                  src={`${URL}${product.image}`}
                  alt={product.name}
                />
                <div className="productDescription">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </li>
            ))
          ) : (
            <h2>No products available</h2>
          )}
        </ul>
      </div>

      <div className="sticky-container">
        <div className="sticky-div">
          {products && products.length > 0 && (
            <img
              src={`${URL}${products[activeIndex].image}`}
              alt={`StickyIm ${activeIndex + 1}`}
              className="sticky-image active"
            />
          )}
          <div className="dots-container">
            {products &&
              products.map((product, index) => (
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
