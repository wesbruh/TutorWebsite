import React from "react";
/*import { CalendarIcon } from "./CalendarIcon";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import image from "./image.png";
import image1 from "./image.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import maskGroup from "./mask-group.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import star12 from "./star-1-2.svg";
import star13 from "./star-1-3.svg";
import star14 from "./star-1-4.svg";
import star1 from "./star-1.svg";
import star22 from "./star-2-2.svg";
import star23 from "./star-2-3.svg";
import star24 from "./star-2-4.svg";
import star2 from "./star-2.svg";
import star32 from "./star-3-2.svg";
import star33 from "./star-3-3.svg";
import star34 from "./star-3-4.svg";
import star3 from "./star-3.svg";
import star42 from "./star-4-2.svg";
import star43 from "./star-4-3.svg";
import star44 from "./star-4-4.svg";
import star4 from "./star-4.svg";
import star52 from "./star-5-2.svg";
import star53 from "./star-5-3.svg";
import star54 from "./star-5-4.svg";
import star5 from "./star-5.svg";*/
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleTutorDashboard.css";
//import vector from "./vector.svg";

export const TutorDashboardPage = () => {
  return (
    <div className="dashboard">
      <main className="main-content">
        <p>Welcome to your tutor dashboard.</p>
      </main>
    </div>
  );
};
export default TutorDashboardPage;
/*

const TutorDashboard = () => {
    //placeholder data for upcoming appointments
  const tutorAppointments = [
    { id: 1, date: "1 October, 2024, time: "10:30", subject: "Calculus", studentName: "John Doe"},
    { id: 2, date: "2 October, 2024, time: "12:30", subject: "Statistics", studentName: "Mary Jones"},
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
            <h1>Hello, Jane Smith.</h1>
            <p>Welcome to your Tutor dashboard.</p>
        <ul className="appointments-list">
        <h2>Upcoming Sessions</h2>
          {tutorAppointments.map((tutorAppointments) => (
            <li key={tutorAppointments.id} className="appointments-item">
              <div className="appointments-icon"></div>
              <div> //map the data onto the student tutor dashboard
                <p className="appointments-date">{tutorAppointments.date}</p>
                <p className="appointments-time">{tutorAppointments.time}</p>
                <p className="appointments-subject">{tutorAppointments.subject}</p>
                <p className="appointments-studentName">{tutorAppointments.studentName}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="payroll"> //add preview paystub for tutor
            <h2>Recent Paystub: $85</h2>
            <p>Your biweekly paystub has been posted to your account.</p>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;
*/
