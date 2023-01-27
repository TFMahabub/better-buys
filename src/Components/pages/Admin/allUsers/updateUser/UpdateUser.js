import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ALLDATACONTEXT } from "../../../../../Context/data/AllData";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { userData } = useContext(ALLDATACONTEXT);
  const params = useParams();
  const navigate = useNavigate();

  //find the selecter user data-
  const thisUserInformations = userData.find(
    (singleUser) => singleUser._id === params.id
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const userName = form.user_name.value;
    const email = form.email.value;
    const selectedRole = form.select_role.value;
    const selectedPlan = form.select_plan.value;
    const selectedStatus = form.select_status.value;

    const UpdatedUserInfo = {
      name,
      userName,
      email,
      selectedRole,
      selectedPlan,
      selectedStatus,
    };
    fetch(`https://better-buys-server-site.vercel.app/user/${params.id}`, {
      headers: {
        "content-type": "application/json",
      },
      method: "PUT",

      // Sending only the fields that to be updated
      body: JSON.stringify(UpdatedUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${name} information is updated successfully`);
          navigate("/admin");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="col-span-5 p-4">
      <h3 className="text-2xl font-semibold text-primary">
        Update user information
      </h3>
      <form
        onSubmit={handleOnSubmit}
        className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={thisUserInformations?.name}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
            required
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            User Name
          </label>
          <input
            type="text"
            name="user_name"
            defaultValue={thisUserInformations?.userName}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
            required
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={thisUserInformations?.email}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
            required
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            Select an Role
          </label>
          <select
            name="select_role"
            id=""
            defaultValue={thisUserInformations?.selectedRole}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
          >
            <option className="text-textColorLight" value="admin">
              Admin
            </option>
            <option className="text-textColorLight" value="editor">
              Editor
            </option>
            <option className="text-textColorLight" value="author">
              Author
            </option>
            <option className="text-textColorLight" value="maintainer">
              Maintainer
            </option>
            <option className="text-textColorLight" value="subscriber">
              Subscriber
            </option>
          </select>
        </div>
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            Select an Plan
          </label>
          <select
            name="select_plan"
            id=""
            defaultValue={thisUserInformations?.selectedPlan}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
          >
            <option className="text-textColorLight" value="enterprise">
              Enterprise
            </option>
            <option className="text-textColorLight" value="team">
              Team
            </option>
            <option className="text-textColorLight" value="company">
              Company
            </option>
            <option className="text-textColorLight" value="basic">
              Basic
            </option>
          </select>
        </div>
        <div className="">
          <label htmlFor="" className="text-textColorLight">
            Select an Status
          </label>
          <select
            name="select_status"
            id=""
            defaultValue={thisUserInformations?.selectedStatus}
            className="w-full rounded-md border-1 border-borderColor focus:ring-primary focus:border-0 ring-0"
          >
            <option className="text-textColorLight" value="active">
              Active
            </option>
            <option className="text-textColorLight" value="pending">
              Pending
            </option>
            <option className="text-textColorLight" value="inactive">
              Inactive
            </option>
          </select>
        </div>
        <div>
          <button className="py-2 px-4 bg-primary text-white">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
