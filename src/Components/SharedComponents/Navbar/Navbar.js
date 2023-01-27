import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";
import { AUTHENTICATION_PROVIDER } from "../../../Context/authentication/UserAuthentication";

const Navbar = () => {
  const { user, loading, logOutUser } = useContext(AUTHENTICATION_PROVIDER);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };
  return (
    <section className="navSection">
      <nav className="navbar container">
        <Link to="/">
          <li href="" className="logo">
            Mahabub Alam
          </li>
        </Link>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <FiMenu className="hambarger" />
        </label>
        <div className="menu">
          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            {user?.uid ? (
              <>
                {user?.email === "rjmahabub543@gmail.com" ? (
                  <Link to="/admin">
                    <li>Dashboard</li>
                  </Link>
                ) : (
                  <Link to="/my_cart">
                    <li>My Cart</li>
                  </Link>
                )}
                <button onClick={handleLogOut}>
                  <li>logout</li>
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
