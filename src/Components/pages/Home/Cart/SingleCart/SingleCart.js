import React, { useState } from "react";

const SingleCart = ({ product }) => {
  const [buttonExpand, setButtonExpand] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { _id, imgUrl, productName, price, porductCategory } = product;
  return (
    <div key={_id} className="cart_body">
      <img src={imgUrl} alt="" />
      <h4>{productName.slice(0, 25)}</h4>
      <h5>{price}</h5>
      <div className="buttons">
        <div className={buttonExpand ? "buy_container" : "hidden"}>
          <div className="quantity_button">
            <button onClick={() => setQuantity((pre) => pre + 1)}>+</button>
            <button>{quantity}</button>
            <button onClick={() => setQuantity((pre) => pre - 1)}>-</button>
          </div>
          <button className="buy_button">Buy</button>
        </div>
        <button
          onClick={() => setButtonExpand(!buttonExpand)}
          className={buttonExpand ? "hidden" : "add_to_cart_button"}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCart;
