import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";
import { FaEdit } from "react-icons/fa";
import { ProductData } from "../../FakeData/ProductData";
import PageHeader from "../PageHeader/PageHeader";

const Product = () => {
  const products = ProductData.slice(0, 15);

  return (
    <div className="Product">
      <PageHeader dt={ProductData} />
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
