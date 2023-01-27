import React, { useContext } from "react";
import { ALLDATACONTEXT } from "../../../Context/data/AllData";
import SingleCart from "./SingleCart";

const MytCart = () => {
  const { addedProducts } = useContext(ALLDATACONTEXT);
  console.log(addedProducts);
  return (
    <div className=" w-full mx-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>pirce</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {addedProducts?.map((product) => (
            <SingleCart product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MytCart;
