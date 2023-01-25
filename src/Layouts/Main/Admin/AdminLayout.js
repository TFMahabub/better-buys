import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../../../Components/SharedComponents/AdminSideBar/AdminSideBar";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 lg:grid-cols-6 p-4 h-screen">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
