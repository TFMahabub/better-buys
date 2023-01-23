import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../../../Components/SharedComponents/AdminSideBar/AdminSideBar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-3">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
