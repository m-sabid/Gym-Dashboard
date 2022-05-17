import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FormSec.css";

const FormSec = () => {
  return (
    <div className="FormSec">
      <Row>
        <Col md={6}>
          <div className="inputs1">
            <label htmlFor="">Info 1</label>

            <input type="text" placeholder="First Name " />
            <input type="text" placeholder="Info " />
            <input type="text" placeholder="Info 1 " />
            <label htmlFor="">Info 1</label>
            <input type="text" placeholder="Info 2 " />
            <input type="text" placeholder="Info 3 " />
            <input type="text" placeholder="Info2 4 " />
          </div>
        </Col>
        <Col md={6}>
          <div className="inputs1">
            <label htmlFor="">Info 1</label>

            <input type="text" placeholder="First Name " />
            <input type="text" placeholder="Info " />
            <input type="text" placeholder="Info 1 " />
            <label htmlFor="">Info 1</label>
            <input type="text" placeholder="Info 2 " />
            <input type="text" placeholder="Info 3 " />
            <input type="text" placeholder="Info2 4 " />
          </div>
        </Col>
      </Row>
      <button className="update">Update</button>
    </div>
  );
};

export default FormSec;
