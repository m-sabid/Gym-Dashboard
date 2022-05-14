import React from "react";
import { FaBox, FaSlidersH } from "react-icons/fa";
import { OrderData } from "../../FakeData/OrderData";
import "../ProductPage/Product.css";
import "./OrdersPage.css";

const OrdersPage = () => {

    const Orders = OrderData.slice(0, 10);

  return (
    <>
      <div className="Order">
        <div className="productHeader">
          <div className="countSec">
            {/* Counter */}
            <div className="counter">
              <div className="icons">
                <FaBox />
              </div>
              <div className="totalPCount">
                <p id="productText">ALL ORDERS</p>
                <p>
                  <strong>{OrderData.length}</strong>
                </p>
              </div>
            </div>
            {/* filter */}
            <div className="filter">
              <p id="filterPara">
                <FaSlidersH /> Filter Order
              </p>
            </div>
          </div>
        </div>
      </div>
      {
          Orders.map((dt) =>(
              <>
                <h1>{dt.orderId}</h1>
              </>
          ))}
    </>
  );
};

export default OrdersPage;
