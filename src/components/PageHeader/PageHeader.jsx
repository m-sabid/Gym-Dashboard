import React from "react";
import { FaBox } from "react-icons/fa";
import "./PageHeader.css";
import { FaSlidersH } from "react-icons/fa";
const PageHeader = (props) => {

  return (

    <div className="productHeader">
      <div className="countSec">
        {/* Counter */}
        <div className="counter">
          <div className="icons">
            <FaBox />
          </div>
          <div className="totalPCount">
            <p id="productText">{props.myDt}</p>
            <p>
              <strong>{props.dt}</strong>
            </p>
          </div>
        </div>
        {/* filter */}
        <div className="filter">
          <button id="filterBtn">
            <FaSlidersH /> &nbsp; Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
