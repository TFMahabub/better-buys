import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
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
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/my_cart">
              <li>My Cart</li>
            </Link>
            <Link to="/admin">
              <li>Admin</li>
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
