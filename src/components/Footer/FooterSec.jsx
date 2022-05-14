import React from "react";
import "./FooterSec.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const FooterSec = () => {
  return (
    <footer>
      <Row className="nameSocial">
        <Col md={5}>
          <h4 id="gymName">Cross Feet Gym</h4>
        </Col>
        <Col md={5}>
          <div className="socialIcons">
            <FaFacebookF id="sIcons"/>
            <FaInstagram id="sIcons"/>
            <FaYoutube id="sIcons"/>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterSec;
