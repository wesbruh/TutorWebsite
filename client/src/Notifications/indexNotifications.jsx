import React from "react";
import Sidebar from "../components/Sidebar";
import "./notificationsStyles.css";

const NotificationsPage = () => {
  const notifications = [
    { id: 1, title: "Cancellation of Appointment with Jane Smith", date: "15 October, 2024 11:00 AM" },
    { id: 2, title: "Confirmation of Appointment with Jane Smith", date: "14 October, 2024 02:00 PM" },
    { id: 3, title: "Cancellation of Appointment with Clark Kent", date: "13 October, 2024 02:32 PM" },
    { id: 4, title: "Confirmation of Appointment with Clark Kent", date: "13 October, 2024 02:00 PM" },
    { id: 5, title: "Completion of Appointment with Clark Kent", date: "11 October, 2024 02:00 PM - 03:00 PM" },
  ];

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1>Notifications</h1>
        <p>View your notifications regarding the status of your appointments.</p>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon"></div>
              <div>
                <p className="notification-title">{notification.title}</p>
                <p className="notification-date">{notification.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default NotificationsPage;
