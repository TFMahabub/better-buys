import React, { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AUTHENTICATION_PROVIDER } from "../../../Context/authentication/UserAuthentication";

const Login = () => {
  const { loginUser } = useContext(AUTHENTICATION_PROVIDER);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("login successfull");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="bg-white container mx-auto lg:flex justify-center items-center lg:h-[83vh]">
      <div className="min-w-lg border-[3px] border-primary shadow-2xl p-8 rounded-lg mt-16 ">
        <h3 className="text-primary text-center text-2xl font-bold">Log in</h3>
        <form onSubmit={handleOnSubmit}>
          <div className="mt-2">
            <label htmlFor="" className="text-sm text-gray">
              Email:
            </label>
            <br />
            <input
              type="email"
              name="email"
              className="w-full rounded-md border-1 border-lightGray focus:ring-primary focus:border-0 ring-0"
              required
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="text-sm text-gray">
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              className="w-full rounded-md border-1 border-lightGray focus:ring-primary focus:border-0 ring-0"
              required
            />
          </div>
          <div className="mt-3">
            <button className="w-full py-2 bg-primary text-white rounded-md">
              Log In
            </button>
          </div>
        </form>
        <p>
          <small className="text-gray">
            Haven't any account{" "}
            <Link to="/register" className="text-primary">
              register
            </Link>
          </small>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray"></div>
          <p className="px-1 text-md text-gray">Login with</p>
          <div className="flex-1 h-px bg-gray"></div>
        </div>
        <div className="flex items-center justify-between w-32 mt-2 mx-auto">
          <AiFillGoogleCircle className="text-4xl text-primary cursor-pointer" />
          <BsFacebook className="text-3xl text-primary cursor-pointer" />
          <BsTwitter className="text-3xl text-primary cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Login;
