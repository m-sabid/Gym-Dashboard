import React from "react";
import { Table } from "react-bootstrap";
import { OrderData } from "../../FakeData/OrderData";
import PageHeader from "../PageHeader/PageHeader";
import "../ProductPage/Product.css";
import "./OrdersPage.css";

const OrdersPage = () => {
  const Orders = OrderData.slice(0, 10);

  return (
    <>
      <div className="Order">
        <PageHeader dt={OrderData}/>
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
