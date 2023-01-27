import React, { useContext, useEffect, useState } from "react";
import { AUTHENTICATION_PROVIDER } from "../../../../Context/authentication/UserAuthentication";
import AllUsersTable from "./allUsersTable/AllUsersTable";
import "./AllUsers.css";
const nextRef = React.createRef();
const chackRef = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10, 5],
};

const AllUsers = () => {
  const { user } = useContext(AUTHENTICATION_PROVIDER);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://better-buys-server-site.vercel.app/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="col-span-5">
      <div ref={nextRef} className="mb-10 ">
        <h1 className="text-[#975EFE] text-3xl">All users</h1>
      </div>
      <div className="hidden text-xl text-primary hiddenCreatedName">
        <h4>{`Createed By ${user?.displayName}`}</h4>
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
