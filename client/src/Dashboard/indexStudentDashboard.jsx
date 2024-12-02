import React, {useState, useEffect} from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentDashboard.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
//import user controller

function StudentDashboard() {
  const thename = JSON.parse(localStorage.getItem("auth"));
  // get name of user
  const name = useState(thename.user.email);
  
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <h1>Hello, {name} </h1>
        <p>Welcome to your student dashboard.</p>
        <div className="appointments">
          <h2>Upcoming Sessions</h2>
        </div>
        <div className="oldAppointments">
          <h2>Past Sessions</h2>
        </div>
        <div className="billing">
          <h2>Balance Due: $</h2>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
