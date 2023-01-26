import React from "react";
import toast from "react-hot-toast";

const AddUsers = () => {
  const imagebbAPIUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_API}`;
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const userName = form.user_name.value;
    const email = form.email.value;
    const selectedRole = form.select_role.value;
    const selectedPlan = form.select_plan.value;
    const selectedStatus = form.select_status.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    //post method upload image at imagebb-
    fetch(imagebbAPIUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.display_url) {
          const addUserForm = {
            name,
            userName,
            email,
            selectedRole,
            selectedPlan,
            selectedStatus,
            imageUrl: data.data.display_url,
          };
          postUserInfo(addUserForm);
        }
      });

    const postUserInfo = (addUserForm) => {
      fetch("https://better-buys-server-site.vercel.app/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addUserForm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`${name} is added successfully`);
            form.reset();
          }
        })
        .catch((err) => toast.error("something went wrong"));
    };
  };
  return (
    <section className="col-span-5 p-6">
      <div className="mt-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Add Users</h2>
        </div>
        <div>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="flex justify-start mt-8 ">
              <div className="max-w-2xl rounded-lg ">
                <div>
                  <label className="inline-block mb-2 text-gray-500">
                    Upload your image
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-4 border-borderColor border-dashed hover:bg-[#F4F5FA] cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach your image
                        </p>
                      </div>
                      <input
                        type="file"
                        name="image"
                        className="opacity-0"
                        accept="image/*"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-6">
              <div className="">
                <label htmlFor="" className="text-textColorLight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
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
                  Add User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddUsers;
