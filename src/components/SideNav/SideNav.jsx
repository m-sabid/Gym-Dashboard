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
          <NavLink to="m/profile" className="navItem">
            <li>
              <FaUserAlt />
              <br />
              Profile
            </li>
          </NavLink>
          <NavLink to="m/products" className="navItem">
            <li>
              {" "}
              <FaDumbbell />
              <br />
              Products
            </li>
          </NavLink>
          <NavLink to="m/orders" className="navItem">
            <li>
              {" "}
              <FaCartArrowDown />
              <br />
              Orders
            </li>
          </NavLink>
          <NavLink to="m/applications" className="navItem">
            <li>
              {" "}
              <FaFileAlt />
              <br />
              Applications
            </li>
          </NavLink>
          <NavLink to="m/transactions" className="navItem">
            <li>
              {" "}
              <FaDonate />
              <br />
              Transactions
            </li>
          </NavLink>
          <NavLink to="m/settings" className="navItem">
            <li>
              {" "}
              <FaRegSun />
              <br />
              Settings
            </li>
          </NavLink>
          <NavLink to="m/logout" className="navItem">
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
