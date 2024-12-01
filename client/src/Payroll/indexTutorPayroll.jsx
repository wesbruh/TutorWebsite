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