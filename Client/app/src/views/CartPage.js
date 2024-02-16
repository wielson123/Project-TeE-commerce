import React from "react";

const CartPage = () => {
  console.log("Received cartItems:", JSON.parse(localStorage.getItem("cart")));

  // if (!cartItems) {
  //   return (
  //     <div>
  //       <h1>CartPage</h1>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>CartPage</h1>
      {/* <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - €{item.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CartPage;
