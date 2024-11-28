import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorDashboard.css";
//import Tutor from '../../server/models/tutorModel.js';
//import {getTutorName,getTutorPay} from "../../server/controllers/tutorController.js"
//import {useAuth, AuthProvide} from "../context/auth.js"
//import vector from "./vector.svg";

// export const TutorDashboardPage = () => {
//   return (
//     <div className="dashboard">
//       <main className="main-content">
//         <p>Welcome to your tutor dashboard.</p>
//       </main>
//     </div>
//   );
// };
// export default TutorDashboardPage;

//Currently the tutor name will show as "Loading..." and never change.
export const ParentComponent = () => {
  const tutorId = "6748d1fe8d0840446ffeb0e7";
  return <TutorDashboard userId={tutorId} />;
}


const TutorDashboard = ({tutorId}) => {
  const[tutorName, setTutorName] = useState("it's not working right");
  const[error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorName = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/tutors/getTutorName", //I am of the belief that THIS line may be at fault.
          { tutorId }, // Request body
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTutorName(response.data.name || "No name available");
      } catch (err) {
        console.error("Error fetching tutor name:", err);
        setError(err.response?.data?.error || "Failed to fetch tutor name");
      }
    };

        if (tutorId) {
          fetchTutorName();
        } else {
          setError("No tutor ID provided");
        }
      }, [tutorId]);//Potentially works with backend set up correctly...either something is wrong here or in the controller.





    //placeholder data for upcoming appointments
  const tutorAppointments = [
    { id: 1, date: "1 October, 2024", time: "10:30", subject: "Calculus", studentName: "John Doe"},
    { id: 2, date: "2 October, 2024", time: "12:30", subject: "Statistics", studentName: "Mary Jones"},
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
            <h1>Hello, {tutorName}.</h1>
            <p>Welcome to your Tutor dashboard.</p>
        <ul className="appointments-list">
        <h2>Upcoming Sessions</h2>
          {tutorAppointments.map((tutorAppointments) => (
            <li key={tutorAppointments.id} className="appointments-item">
              <div className="appointments-icon"></div>
              <div> {/*map the data onto the student tutor dashboard*/ }
                <p className="appointments-date">{tutorAppointments.date}</p>
                <p className="appointments-time">{tutorAppointments.time}</p>
                <p className="appointments-subject">{tutorAppointments.subject}</p>
                <p className="appointments-studentName">{tutorAppointments.studentName}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="payroll"> {/*add preview paystub for tutor*/}
            <h2>Recent Paystub: $85</h2>
            <p>Your biweekly paystub has been posted to your account.</p>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;

