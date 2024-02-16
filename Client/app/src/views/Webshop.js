import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import AddToCartButton from "../components/Addtocart";

const Webshop = () => {
  const [products, setProducts] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState(null);

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

  // useEffect(() => {
  //   const addProductsToCart = async () => {
  //     try {
  //       const response = await axios.post(`${URL}/product/addProduct`);
  //       setCart(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   addProductsToCart()
  // },[]);

  const handleAddToCart = () => {
    console.log("Product added to cart!");
  };

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
                  <AddToCartButton onClick={() => handleAddToCart(product)} />
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
