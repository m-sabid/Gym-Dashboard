import React from "react";
import "./Overview.css";
import { Row, Col } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";
import { OverviewData } from "../../FakeData/OverviewData";

const Overview = () => {
  return (
    <>
      <div className="textSec">
        <h3>Monthly Overview</h3>
        <small>March 2022</small>
      </div>
      <hr />

      <Row id="overviewRow" className="justify-content-center">
        {OverviewData.map((dt) => (
          <>
            <Col id="card" md={3}>
              <div className="cardTop">
                <span id="employeeIcon">{dt.Icon}</span>
                <p id="counter">{dt.counter}</p>
                <FaArrowCircleUp id="upArrow" />
              </div>
              <div className="cardDis">
                <h3 id="total">{dt.total}</h3>
                <p id="secType">{dt.secType}</p>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default Overview;
