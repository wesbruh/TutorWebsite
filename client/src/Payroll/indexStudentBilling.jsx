import React, {useEffect, useState} from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentBilling.css";
import axios from "axios";

const StudentBillingPage = () => {
  const [tutors, setTutors] = useState([]);
  const [payroll, setPayroll] = useState([]);
  const [pastPayroll, setPastPayroll] = useState([]);

  useEffect(() => {
    const getMonthAndYear = (offset) => {
      const date = new Date();
      date.setMonth(date.getMonth() + offset); 
      const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);
      const year = date.getFullYear();
      return {month, year};
    };

    //past months info
    const generatePastPayroll = (usersData, count) => {
      const past = [];
      for (let i = -1; i >= -count; i--) {
        const {month, year} = getMonthAndYear(i);
        past.push({id: Math.abs(i),amount: 215,title: `Past Student Payment for ${usersData[9]?.name}`,date: `Payment Paid on 30 ${month}, ${year}`,});
      }
      return past;
    };

    axios.get('http://localhost:8080/api/v1/userRoute/getUserData')
      .then(response => {
        const usersData = response.data;
        setTutors(usersData);

        const {month, year} = getMonthAndYear(0);
        const updatedPayroll = [
          {id: 1,amount: 215,title: `Upcoming Student Payment for ${usersData[9]?.name}`, date: `Payment Due on 30 ${month}, ${year}`,},
        ];
        setPayroll(updatedPayroll);

        //past months payroll
        const past = generatePastPayroll(usersData, 12);
        setPastPayroll(past);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="payroll-page">
      <Sidebar />
      <main className="main-content">
        <h1>Student Fees</h1>
        <p>View Your Billing Information.</p>
        <ul className="payroll-list">
          {payroll.map((item) => (
            <li key={item.id} className="payroll-item">
              <div className="payroll-icon"></div>
              <div>
                <p className="payroll-title">{item.title}</p>
                <p className="payroll-date">{item.date}</p>
                <p className="payroll-amount">Total Amount: ${item.amount}</p>
              </div>
              <button className="nextPaymentButton">Make Payment</button>
            </li>
          ))}
        </ul>
        <p>View Your Billing History.</p>
        <ul className="payroll-list">
          {pastPayroll.map((item) => (
            <li key={item.id} className="payroll-item">
              <div className="payroll-icon"></div>
              <div>
                <p className="payroll-title">{item.title}</p>
                <p className="payroll-date">{item.date}</p>
                <p className="payroll-amount">Total Amount: ${item.amount}</p>
              </div>
              <button className="historyButton">View Payment Details</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentBillingPage;

