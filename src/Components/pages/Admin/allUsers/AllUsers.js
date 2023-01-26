import React, { useEffect, useState } from "react";
import AllUsersTable from "./allUsersTable/AllUsersTable";
const nextRef = React.createRef();
const chackRef = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10, 5],
};

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="col-span-5">
      <div ref={nextRef} className="mb-10 ">
        <h1 className="text-[#975EFE] text-3xl">All users</h1>
      </div>
      {users?.length > 0 ? (
        <AllUsersTable
          chackRef={chackRef}
          nextRef={nextRef}
          options={options}
        />
      ) : (
        <div className="text-center text-4xl text-red-600 font-bold">
          <h1>No User Found</h1>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
