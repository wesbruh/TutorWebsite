import React from "react";
import Sidebar from "../components/Sidebar";
import "./styleTutorPayroll.css";

const TutorPayrollPage = () => {
  const payroll = [
    { id: 1, amount: 215, title: "Tutor Payment for October", date: "1 October, 2024"},
    { id: 2, amount: 85, title: "Tutor Payment for November", date: "14 November, 2024" },
  ];

  return (
    <div className="payroll-page">
      <Sidebar />
      <main className="main-content">
        <h1>Payroll</h1>
        <p>View Your Billing Information.</p>
        <ul className="payroll-list">
          {payroll.map((payroll) => (
            <li key={payroll.id} className="payroll-item">
              <div className="payroll-icon"></div>
              <div>
                <p className="payroll-title">{payroll.title}</p>
                <p className="payroll-date">{payroll.date}</p>
                <p className="payroll-amount"> Total Amount: ${payroll.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TutorPayrollPage;