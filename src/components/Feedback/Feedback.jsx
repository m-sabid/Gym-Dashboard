import React from "react";
import "./Feedback.css";
import { FeedbackData } from "../../FakeData/FeedbackData";
import { Col, Row } from "react-bootstrap";

const Feedback = () => {

  const fData = FeedbackData.slice(0, 9)

  return (
    <>
      <div className="feedbackText">
        <h3>User Feedback</h3>
        <small>March 2022</small>
      </div>
      <hr />

      <Row id="overviewRow" className="justify-content-center">
        {fData.map((dt) => (
          <>
            <Col id="feedbackCard" md={3}>
              <div className="userProfile">
                <div className="userImage">
                  <img src={dt.img} alt="" width={60} height={"60px"} />
                </div>
                <div className="userInfo">
                  <h2 className="userName">{dt.userName}</h2>
                  <p id="userType">{dt.userType}</p>
                </div>
                <div className="feedbackDate">
                  <p><strong>{dt.date}</strong></p>
                </div>
              </div>
              <div className="userFeedback">
                <p>(Max 150w) {dt.feedback}</p>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default Feedback;
