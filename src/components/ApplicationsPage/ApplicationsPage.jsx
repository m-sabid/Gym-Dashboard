import React from "react";
import { Col, Row } from "react-bootstrap";
import { Applications } from "../../FakeData/Applications";
import { MyApplications } from "../../FakeData/MyApplications";
import "./ApplicationsPage.css";
import PageHeader from "../PageHeader/PageHeader";

const ApplicationsPage = () => {
  return (
    <>
      <div className="Applications">
        <PageHeader dt={Applications} />

        <Row>
          {Applications.map((dt) => (
            <Col md={6}>
              <div className="form">
                <h4>Application of {dt.applicantName}</h4>
                <small>From : {dt.form} </small>
                <small>To : {dt.to} </small>
                <small>Reason : {dt.reason} </small>
                <small>Paid Leave : {dt.paidLeave}</small>
                <div className="btnSec">
                  <button>Decline</button>
                  <button id="Accept">Accept</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* My Applications */}
        <div className="my_applications">
          <h3>My Application</h3>
          <hr />
          <button className="NewApplication">
            <p>
              {" "}
              + <br /> New Application
            </p>
          </button>
          {MyApplications.map((dt) => (
            <>
              <div
                className={`${
                  dt.ApplyProcess === "Approved"
                    ? "myAllApplicationsApproved"
                    : dt.ApplyProcess === "On hold"
                    ? "myAllApplicationsHold"
                    : dt.ApplyProcess === "Rejected"
                    ? "myAllApplicationsRejected"
                    : ""
                }`}
              >
                <p className="appleName">Leave Application</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplicationsPage;
