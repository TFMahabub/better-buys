import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="admin_container">
      <h3>ADMIN PANEL</h3>
      <ul>
        <Link to="/all_users">
          <li>All Users</li>
        </Link>
        <Link to="/all_users">
          <li>Add User</li>
        </Link>
        <Link to="/all_users">
          <li>Add Porduct</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSideBar;
