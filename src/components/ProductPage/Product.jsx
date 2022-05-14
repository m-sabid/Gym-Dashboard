import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";
import { FaEdit, FaBox, FaSlidersH } from "react-icons/fa";
import { ProductData } from "../../FakeData/ProductData";

const Product = () => {
  const products = ProductData.slice(0, 15);

  return (
    <div className="Product">
      <div className="productHeader">
        <div className="countSec">
          {/* Counter */}
          <div className="counter">
            <div className="icons">
              <FaBox />
            </div>
            <div className="totalPCount">
              <p id="productText">PRODUCTS</p>
              <p>
                <strong>{ProductData.length}</strong>
              </p>
            </div>
          </div>
          {/* filter */}
          <div className="filter">
            <p id="filterPara"><FaSlidersH /> Filter list</p>
          </div>
        </div>
      </div>
      <Row>
        <Col md={3}>
          <div className="productAddCard">
            <p>
              {" "}
              + <br /> Add New dts
            </p>
          </div>
        </Col>
        {/* All PRoducts */}
        {products.map((dt) => (
          <Col md={3}>
            <div className="productCard">
              {/* Map Products */}
              <>
                <img src={dt.ProductImg} id="productImg" alt="" />
                <h5>
                  {dt.PName.length > 40
                    ? `${dt.PName.substring(0, 40)}...`
                    : dt.PName}
                </h5>

                <p id="priceSec">
                  $ {dt.quantity} /
                  {dt.quantity > 0 ? ` ${dt.inStock}` : ` ${dt.noStock}`}
                </p>

                <button className="editBtn">
                  <p className="content">
                    <FaEdit /> Edit
                  </p>

                  {/*  */}
                </button>
              </>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
