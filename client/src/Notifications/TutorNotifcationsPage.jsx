import React, { useEffect, useState } from 'react';
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorNotificationsPage.css";


/* HARDCODED TUTOR NOTIFICATIONS PAGE FOR DEMO/VIDEO */
const TutorNotificationsPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const notifications = [
    { id: 1, title: "", date: ""},
  ];

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1>Notifications</h1>
        <h3>View your notifications regarding the status of your appointments</h3>
        <p>You currently do not have any notifications</p>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div>
                <p className="notification-title">{notification.title}</p>
                {/* <p className="notification-date">{notification.date} 
                   {currentTime.toLocaleString([], {hour: '2-digit', minute: '2-digit'})}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TutorNotificationsPage;