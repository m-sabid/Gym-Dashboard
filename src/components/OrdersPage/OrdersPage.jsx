import React from "react";
import { Table } from "react-bootstrap";
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
              <button id="filterBtn">
                <FaSlidersH /> Filter Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Tag</th>
            <th>Menu</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((dt) => (
            <>
              <tr>
                <td>{dt.orderId}</td>
                <td>{dt.menu}</td>
                <td>{dt.amount}</td>
                <td>{dt.processingStatus}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrdersPage;
