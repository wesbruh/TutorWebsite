import React, { useEffect, useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentNotifications.css";

const StudentNotificationsPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const notifications = [
    { id: 1, title: "Account Creation", date: "26 November, 2024 "},
  ];

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1>Notifications</h1>
        <h3>View your notifications regarding the status of your appointments.</h3>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon"></div>
              <div>
                <p className="notification-title">{notification.title}</p>
                <p className="notification-date">{notification.date} 
                   {currentTime.toLocaleString([], {hour: '2-digit', minute: '2-digit'})}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentNotificationsPage;
