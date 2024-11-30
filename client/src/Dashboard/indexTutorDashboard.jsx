import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorDashboard.css";

export const ParentComponent = () => {
  const tutorId = "6748d1fe8d0840446ffeb0e7"; // hard coded tutorId for testtest user
  return <TutorDashboard tutorId={tutorId} />;
}

const TutorDashboard = ({ tutorId }) => {
  const [tutorName, setTutorName] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorName = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/tutors/getTutorName",  //I think this line is the error as postman returns 404 not found
          { tutorId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check for success in response
        if (response.data.success) {
          setTutorName(response.data.name || "No name available");
        } else {
          setError(response.data.error || "Failed to fetch tutor name");
        }
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
  }, [tutorId]);

  // Placeholder data for upcoming appointments
  const tutorAppointments = [
    { id: 1, date: "1 October, 2024", time: "10:30", subject: "Calculus", studentName: "John Doe" },
    { id: 2, date: "2 October, 2024", time: "12:30", subject: "Statistics", studentName: "Mary Jones" },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <h1>Hello, {tutorName}.</h1>
            <p>Welcome to your Tutor dashboard.</p>
          </>
        )}
        <ul className="appointments-list">
          <h2>Upcoming Sessions</h2>
          {tutorAppointments.map((appointment) => (
            <li key={appointment.id} className="appointments-item">
              <div className="appointments-icon"></div>
              <div>
                <p className="appointments-date">{appointment.date}</p>
                <p className="appointments-time">{appointment.time}</p>
                <p className="appointments-subject">{appointment.subject}</p>
                <p className="appointments-studentName">{appointment.studentName}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="payroll">
          <h2>Recent Paystub: $85</h2>
          <p>Your biweekly paystub has been posted to your account.</p>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;