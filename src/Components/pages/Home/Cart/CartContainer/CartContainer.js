import React, { useContext, useState } from "react";
import { ALLDATACONTEXT } from "../../../../../Context/data/AllData";
import "./CartContainer.css";

const CartContainer = () => {
  const [buttonExpand, setButtonExpand] = useState(false);
  const { productsData } = useContext(ALLDATACONTEXT);

  const handleExpandButton = (_id) => {};
  return (
    <div className="cart_container">
      {productsData?.map((product) => {
        const { _id, imgUrl, productName, price, porductCategory } = product;
        return (
          <div key={_id} className="cart_body">
            <img src={imgUrl} alt="" />
            <h4>{productName.slice(0, 25)}</h4>
            <h5>{price}</h5>
            <div className="buttons">
              {buttonExpand ? (
                <div className="buy_container">
                  <div className="quantity_button">
                    <button>+</button>
                    <button>0</button>
                    <button>-</button>
                  </div>
                  <button className="buy_button">Buy</button>
                </div>
              ) : (
                <button
                  onClick={() => handleExpandButton(_id)}
                  className="add_to_cart_button"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
