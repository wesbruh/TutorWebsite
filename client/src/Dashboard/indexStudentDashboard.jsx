import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentDashboard.css";


function StudentDashboard() {
  
  //The following two lines successfully retrieve the token
  const auth = JSON.parse(localStorage.getItem("auth"));
  const id = auth?.user?._id;
  const token = auth?.token;
  const name = auth?.user?.firstName;

  //Not functioning properly.
  const [user, setUser] = useState([]);
  // Fetch user info using the token
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8080/api/v1/userRoute/getUserName", {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [token]);

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <h1>Hello, {name}.</h1>
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
