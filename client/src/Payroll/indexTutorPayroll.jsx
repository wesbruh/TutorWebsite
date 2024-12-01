import React, { useEffect, useState } from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorPayroll.css";

const TutorPayrollPage = () => {
  const payroll = [
    { id: 1, amount: 215, title: "Tutor Payment for October", date: "1 October, 2024"},
    { id: 2, amount: 85, title: "Tutor Payment for November", date: "14 November, 2024" },
  ];

  const [tutors, setTutors] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/tutorRoute/getTutorData')
    .then(tutors => setTutors(tutors.data))
    .catch(err => console.log(err))
  }, [])

  
  
  return (
    /*<div className="payroll-page">
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
          ))}*/
         <div className = "payroll-page">
          <Sidebar />
            {tutors.length === 0 ? (
              <p>No tutors available.</p>
            ) : (
              tutors.map((tutor) => (
                <li key={tutor._id} className="tutor-payroll">
                  <div>
                    <p className="tutor-name">{tutor.name}</p>
                    <p className="tutor-email">{tutor.email}</p>
                    <p className="tutor-payment">{tutor.amountDue}</p>
                  </div>
                </li>
              ))
            )}
          </div>
  );
};

export default TutorPayrollPage;