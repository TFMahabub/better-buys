import React, { useContext, useState } from "react";
import { ALLDATACONTEXT } from "../../../../../Context/data/AllData";
import SingleCart from "../SingleCart/SingleCart";
import "./CartContainer.css";

const CartContainer = () => {
  const { productsData } = useContext(ALLDATACONTEXT);
  return (
    <div className="cart_container">
      {productsData?.map((product, idx) => (
        <SingleCart key={idx} product={product} />
      ))}
    </div>
  );
};

export default CartContainer;
