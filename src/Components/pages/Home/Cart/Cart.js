import React from "react";
import CartContainer from "./CartContainer/CartContainer";
import CartTitle from "./Title/CartTitle";

const Cart = () => {
  return (
    <section className="container">
      <CartTitle />
      <CartContainer />
    </section>
  );
};

export default Cart;
