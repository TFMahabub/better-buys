import React, { useContext } from "react";
import { ALLDATACONTEXT } from "../../../../Context/data/AllData";

const AllUsers = () => {
  const { userData } = useContext(ALLDATACONTEXT);
  console.log(userData);
  return (
    <div className="">
      <h2>this is all users</h2>
    </div>
  );
};

export default AllUsers;
