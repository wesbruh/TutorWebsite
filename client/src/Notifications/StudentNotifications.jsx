import React, { useEffect, useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentNotifications.css";
import axios from 'axios';

const StudentNotificationsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/appointments');
        setAppointments(response.data); // Set fetched appointments
      } catch (err) {
        console.error("Error fetching appointments:", err.message);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1>Notifications</h1>
        <h3>View your notifications regarding the status of your appointments.</h3>
        <ul className="notifications-list">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="notification-item">
              <div className="notification-icon"></div>
              <div>
                <p className="notification-title">
                  Appointment with {appointment.tutorName} ({appointment.status})
                </p>
                <p className="notification-date">
                  Date: {new Date(appointment.date).toLocaleString()}
                </p>
                <p className="notification-details">
                  Duration: {appointment.duration} minutes
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentNotificationsPage;
