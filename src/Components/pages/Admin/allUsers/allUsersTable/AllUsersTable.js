import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BsFillLaptopFill } from "react-icons/bs";
import { GiPanzerfaust } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbRotateClockwise2 } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiExport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Pdf from "react-to-pdf";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import "../Example.css";

const AllUsersTable = ({ chackRef, options, nextRef }) => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [hideUser, setHideUser] = useState(false);
  const [hideEmail, setHideEmail] = useState(false);
  const [hideRole, setHideRole] = useState(false);
  const [hidePlan, setHidePlan] = useState(false);
  const [hideStatus, setHideStatus] = useState(false);
  const [hideAction, setHideAction] = useState(false);
  const [pending, setPending] = useState(true);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://better-buys-server-site.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setReload(!reload);
          });
      }
    });
  };

  const columns = [
    {
      name: "USER",
      selector: (row) => (
        <div className="flex gap-2 items-center">
          <img
            width={34}
            height={34}
            className="rounded-2xl"
            src={row.imageUrl}
            alt=""
          />{" "}
          <div>
            <h1 className="text-[16px]">{row.name}</h1>
            <h1 className="text-gray-600">@{row.userName}</h1>
          </div>
        </div>
      ),
      omit: hideUser,
    },
    {
      name: "EMAIL",
      selector: (row) => <h1 className="text-[14px]">{row.email}</h1>,
      omit: hideEmail,
    },
    {
      name: "ROLE",
      selector: (row) => (
        <div className="flex gap-1 text-[16px]">
          {row.selectedRole === "Admin" && (
            <BsFillLaptopFill className="text-red-600" />
          )}
          {row.selectedRole === "Author" && (
            <AiTwotoneSetting className="text-gray-600" />
          )}
          {row.selectedRole === "Editor" && (
            <GiPanzerfaust className="text-xl" />
          )}
          {row.selectedRole === "Maintainer" && (
            <TbRotateClockwise2 className="text-xl text-green-600" />
          )}
          {row.selectedRole === "Subscriber" && (
            <RxAvatar className="text-[#9155FD]" />
          )}

          <h1>{row.selectedRole}</h1>
        </div>
      ),
      omit: hideRole,
    },
    {
      name: "PLAN",
      selector: (row) => <h1 className="text-[16px]">{row.selectedPlan}</h1>,
      omit: hidePlan,
    },
    {
      name: "STATUS",
      selector: (row) => (
        <h1
          className={`py-1 px-3 rounded-2xl ${
            row.selectedStatus === "Pending" &&
            " text-yellow-900 bg-yellow-300 "
          } ${
            row.selectedStatus === "Active" && " text-green-900 bg-green-300 "
          } ${
            row.selectedStatus === "Inactive" && " text-gray-900 bg-gray-300 "
          }`}
        >
          {row.selectedStatus}
        </h1>
      ),
      omit: hideStatus,
    },
    {
      name: "ACTION",

      cell: (row, i) => (
        <div className="dropdown dropdown-top dropdown-left print:hidden w-full">
          <label tabIndex={0}>
            <HiOutlineDotsVertical />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content border z-50 border-gray-600 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:text-green-900 hover:bg-green-300">
              <Link to={`edit/${row._id}`}>Edit</Link>
            </li>
            <li className="hover:text-red-900 hover:bg-red-300">
              <button onClick={() => handleDelete(row._id)}>Delete</button>
            </li>
          </ul>
        </div>
      ),
      allowOverflow: true,
      button: true,
      width: "56px",
      omit: hideAction,
    },
  ];

  useEffect(() => {
    fetch("https://better-buys-server-site.vercel.app/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setPending(false);
      })
      .catch((error) => console.log(error));
  }, [reload]);

  return (
    <div className="bg-white shadow-lg  rounded-xl w-full">
      <div
        className={`md:flex justify-between bg-white pt-5 px-4 print:hidden w-full`}
      >
        <div className="md:flex justify-between gap-4">
          <div>
            <Pdf
              targetRef={chackRef} /* {nextRef} */
              filename="All-User.pdf"
              options={options}
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <button
                  className="btn btn-outline print:hidden flex items-center gap-1"
                  onClick={toPdf}
                >
                  <BiExport className="text-xl" />
                  PDF
                </button>
              )}
            </Pdf>
          </div>
          <ReactHtmlTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="AllUser"
            sheet="tablexls"
            buttonText={
              <button className=" btn btn-outline flex items-center gap-1">
                <BiExport className="text-xl" />
                EXCEL
              </button>
            }
          />

          <button
            onClick={() => {
              window.print();
            }}
            className="btn btn-outline flex items-center gap-1"
          >
            <BiExport className="text-xl" />
            PRINT
          </button>
          {/* <button className="btn btn-outline">SHOW/HIDE COLUMN</button> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-outline">
              SHOW/HIDE COLUMN
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu border border-gray-600 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">USER</span>
                    <input
                      type="checkbox"
                      checked={!hideUser}
                      onChange={() => setHideUser(!hideUser)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">EMAIL</span>
                    <input
                      type="checkbox"
                      checked={!hideEmail}
                      onChange={() => setHideEmail(!hideEmail)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">ROLE</span>
                    <input
                      type="checkbox"
                      checked={!hideRole}
                      onChange={() => setHideRole(!hideRole)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">PLAN</span>
                    <input
                      type="checkbox"
                      checked={!hidePlan}
                      onChange={() => setHidePlan(!hidePlan)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">STATUS</span>
                    <input
                      type="checkbox"
                      checked={!hideStatus}
                      onChange={() => setHideStatus(!hideStatus)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0 text-center">
                  <label className="label cursor-pointer">
                    <span className="label-text">ACTION</span>
                    <input
                      type="checkbox"
                      checked={!hideAction}
                      onChange={() => setHideAction(!hideAction)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs "
            placeholder="Search Invoice"
          />
          <Link to="add-user" className="btn bg-[#9155FD] border-none">
            <button>ADD USER</button>
          </Link>
        </div>
      </div>
      <div ref={chackRef}>
        <div className="hidden">
          <h1>My Name Is Masud</h1>
          <h2>I created this table</h2>
        </div>
        <DataTable
          columns={columns}
          data={users}
          pagination
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight="800px"
          progressPending={pending}
        />
      </div>
      {/* table export xls  */}
      <div className="hidden">
        <h1 className="text-3xl text-[#975EFE]">All User</h1>
        <div className="overflow-x-auto">
          <table id="table-to-xls" className="table w-full">
            <thead>
              <tr>
                <th>
                  <h3>User Panel</h3>
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>PLAN</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user?._id}>
                  <th>
                    <div className="flex gap-2 items-center">
                      <img
                        width={34}
                        height={34}
                        className="rounded-2xl"
                        src={user.imageUrl}
                        alt=""
                      />{" "}
                      <div>
                        <h1 className="text-[16px]">{user.name}</h1>
                      </div>
                    </div>
                  </th>
                  <th>@{user.userName}</th>
                  <td>{user?.email}</td>
                  <td>{user?.selectedRole}</td>
                  <td>{user?.selectedPlan}</td>
                  <td>{user?.selectedStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsersTable;
