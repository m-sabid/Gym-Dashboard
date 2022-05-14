import React from 'react';
import { FaBell } from "react-icons/fa";
import './Header.css'

const Header = () => {

      // Date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = today.toLocaleString("bd", { month: "long" }); //January is 0!
  const yyyy = today.getFullYear();
  const dayName = today.toLocaleString("bd", { weekday: "long" });

  today = dd + " " + mm + " " + yyyy + ", " + dayName;
  // Date

    return (
        <div className="header">
      <div className="nameDateMsg">
        <h2>
          <span id="hello">Hello</span>, Manager <span id="hello">!</span>
        </h2>
      </div>
      <div className="nameDateMsg">
        <p id="date">{today}</p>
        <p id="bell"><FaBell /></p>
      </div>
    </div>
    );
};

export default Header;