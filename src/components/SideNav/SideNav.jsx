import React from "react";
import {
  FaCartArrowDown,
  FaDonate,
  FaDumbbell,
  FaFileAlt,
  FaHome,
  FaRegSun,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="Nav">
        <ul>
          <NavLink to="/" className="navItem">
            <li>
              <FaHome />
              <br />
              Home
            </li>
          </NavLink>
          <NavLink to="/profile" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              Profile
            </li>
          </NavLink>
          <NavLink to="/products" className="navItem">
            <li>
              {" "}
              <FaDumbbell />
              <br />
              Products
            </li>
          </NavLink>
          <NavLink to="/orders" className="navItem">
            <li>
              {" "}
              <FaCartArrowDown />
              <br />
              Orders
            </li>
          </NavLink>
          <NavLink to="/applications" className="navItem">
            <li>
              {" "}
              <FaFileAlt />
              <br />
              Applications
            </li>
          </NavLink>
          <NavLink to="/transactions" className="navItem">
            <li>
              {" "}
              <FaDonate />
              <br />
              Transactions
            </li>
          </NavLink>
          <NavLink to="/settings" className="navItem">
            <li>
              {" "}
              <FaRegSun />
              <br />
              Settings
            </li>
          </NavLink>
          <NavLink to="/logout" className="navItem">
            <li>
              {" "}
              <FaSignOutAlt />
              <br />
              Log out
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
