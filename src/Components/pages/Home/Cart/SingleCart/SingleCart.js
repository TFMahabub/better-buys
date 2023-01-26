import React, { useContext, useState } from "react";
import { AUTHENTICATION_PROVIDER } from "../../../../../Context/authentication/UserAuthentication";
import toast from "react-hot-toast";

const SingleCart = ({ product }) => {
  const { user } = useContext(AUTHENTICATION_PROVIDER);
  const [buttonExpand, setButtonExpand] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { _id, imgUrl, productName, price, porductCategory } = product;

  const handleBuyOnClick = (_id) => {
    const addedProduct = {
      _id,
      userEmail: user?.email,
      imgUrl,
      productName,
      price,
      quantity,
    };
    if (user?.email) {
      fetch("https://better-buys-server-site.vercel.app/add_products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("product added successfully");
          }
        })
        .catch((err) => toast.error("something went wrong"));
    } else {
      toast.error("Please login to add a product");
    }
  };
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
            <button
              onClick={() =>
                setQuantity((pre) => {
                  if (pre >= 0) {
                    return pre - 1;
                  } else {
                    return toast.error("Quantity must be less than 0");
                  }
                })
              }
            >
              -
            </button>
          </div>
          <button onClick={() => handleBuyOnClick(_id)} className="buy_button">
            Buy
          </button>
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
