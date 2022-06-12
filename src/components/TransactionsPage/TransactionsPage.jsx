import React from "react";
import "./TransactionsPage.css";
import PageHeader from "../PageHeader/PageHeader";
import TransactionData from "../../FakeData/TransactionData.json";

const TransactionsPage = () => {
  const TransactionDataLen = TransactionData.length;

  return (
    <>
      <PageHeader dt={TransactionDataLen} myDt={"Total Transactions"} />
      {/* Filter By date  */}

      <table>
        <tbody id="salaryTbl">
          {TransactionData.map((dt) => (
            <>
              <tr id="salaryTblRow">
                <td>
                  <span id="slNo">{dt.id} </span>{" "}
                </td>
                <td>
                  <span>{dt.typeOfTransaction}</span>{" "}
                </td>
                <td>
                  <b>Time</b>
                </td>
                <td>{dt.Time}</td>
                <td>
                  <b>Month</b>
                </td>
                <td>{dt.Month}</td>
                <td>
                  <b>Amount</b>
                </td>
                <td>{dt.Amount}</td>
              </tr>
            <br />
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsPage;
