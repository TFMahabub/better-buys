import React from "react";
import { Link } from "react-router-dom";
import "./AdminSideBar.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { FiUser, FiClipboard } from "react-icons/fi";

const AdminSideBar = () => {
  return (
    <div className="bg-[#F4F5FA] lg:col-span-1 print:hidden">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-textColor">ADMIN PANEL</h3>
        <BsFillArrowLeftCircleFill className="text-2xl text-primary cursor-pointer" />
      </div>
      <ul className="mt-8 space-y-4">
        <Link to="/admin" className="flex items-center">
          <FiClipboard className="text-xl" />
          <li>All Users</li>
        </Link>
        <Link to="/admin/add_users" className="flex items-center">
          <FiUser className="text-xl" />
          <li>Add User</li>
        </Link>
        <Link to="/admin/add_product" className="flex items-center">
          <MdOutlineContentCopy className="text-xl" />
          <li>Add Porduct</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSideBar;
