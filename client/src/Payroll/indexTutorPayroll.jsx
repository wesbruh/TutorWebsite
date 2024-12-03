import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorPayroll.css";
import axios from 'axios';

const TutorPayrollPage = () => {
  const [tutors, setTutors] = useState([]);
  const [payroll, setPayroll] = useState([]);

  useEffect(() => {
    // Fetch tutor data
    axios.get('http://localhost:8080/api/v1/tutorRoute/getTutorData')
      .then(response => {
        const tutorsData = response.data;
        setTutors(tutorsData);

        //Get tutor name from db
        const updatedPayroll = [
          { id: 1, amount: 215, title: `Payment for ${tutorsData[2]?.name}`, date: "1 October, 2024" },
          { id: 2, amount: 85, title: `Payment for ${tutorsData[2]?.name}`, date: "14 November, 2024" },
          { id: 3, amount: 155, title: `Payment for ${tutorsData[2]?.name}`, date: "24 December, 2024" },
          { id: 4, amount: 185, title: `Payment for ${tutorsData[2]?.name}`, date: "15 January, 2025" },
        ];
        setPayroll(updatedPayroll);
      })
      .catch(err => console.log(err));
  }, []);

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
          <div>
            {tutors.length === 0 ? (
              <p>No tutors available.</p>
            ) : (
              tutors.map((tutor) => (
                <li key={tutor._id} className="tutor-payroll">
                  <div>
                    {/*<p className="tutor-name">{tutor.name}</p>
                    <p className="tutor-name">{tutor.email}</p>
                    <p className="tutor-name">{tutor.amountDue}</p>*/}
                  </div>
                </li>
              ))
            )}
          </div>
        </ul>
      </main>
    </div>
  );
};

export default TutorPayrollPage;

/*
const TutorPayrollPage = () => {
  const [tutors, setTutors] = useState([]);
  const [payroll, setPayroll] = useState([]);

  //Fetch tutor id, name, payment
   useEffect(() => {
            axios.all([
            axios.post('http://localhost:8080/api/v1/tutorRoute/getTutorData', {getTutorData: tutorData}), 
            axios.post('http://localhost:8080/api/v1/tutorRoute/getTutorPay', {getTutorPay: tutorPay}),
            axios.post('http://localhost:8080/api/v1/tutorRoute/getTutorName', {getTutorName: tutorName})
          ])
            .then(axios.spread((tutorData, tutorPay, tutorName) => {
            console.log('id', tutorData, 'payment', tutorPay, 'name', tutorName);
        }));

      .then(response => {
        const tutorsData = response.data;
        setTutors(tutorsData);
        setPayroll(updatedPayroll);
      })
      .catch(err => console.log(err));
  }, []);
    

*/
//
//
//
//
//
//
//
//
//
//
//
//
//










//
///



//
//



//