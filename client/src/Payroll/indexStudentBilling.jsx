import React from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentBilling.css";

const StudentBillingPage = () => {
  const payroll = [
    // { id: 1, amount: 60, title: "Student Payment for October", date: "1 October, 2024"},
    { id: 2, amount:"", title: "Student Payment For November", date: "You have no payments for this month" },
  ];

  return (
    <div className="payroll-page">
      <Sidebar />
      <main className="main-content">
        <h1>Student Fees</h1>
        <p>View Your Billing Information.</p>
        <ul className="payroll-list">
          {payroll.map((payroll) => (
            <li key={payroll.id} className="payroll-item">
              <div className="payroll-icon"></div>
              <div>
                <p className="payroll-title">{payroll.title}</p>
                <p className="payroll-date">{payroll.date}</p>
                <p className="payroll-amount"> Total Amount: {/*$*/}{payroll.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentBillingPage;