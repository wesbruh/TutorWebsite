import React, { useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentNotifications.css";

const StudentNotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Cancellation of Appointment with Jane Smith", date: "15 October, 2024", time: "11:00 AM" },
    { id: 2, title: "Confirmation of Appointment with Jane Smith", date: "14 October, 2024", time: "02:00 PM" },
    { id: 3, title: "Cancellation of Appointment with Clark Kent", date: "13 October, 2024", time: "02:32 PM" },
    { id: 4, title: "Confirmation of Appointment with Clark Kent", date: "13 October, 2024", time: "02:00 PM" },
    { id: 5, title: "Completion of Appointment with Clark Kent", date: "11 October, 2024", time: "02:00 - 03:00 PM" },
  ]);

  const [unreadCount, setUnreadCount] = useState(1); // Example count for new notifications

  const markAllAsRead = () => {
    setUnreadCount(0); // Reset unread count
  };

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1 className="notifications-title">Notifications</h1>
        <p className="notifications-subtitle">View your notifications regarding the status of your appointments.</p>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon"></div>
              <div className="notification-content">
                <p className="notification-title">{notification.title}</p>
                <p className="notification-date">{notification.date} | {notification.time}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="new-notification">
          <p>You have {unreadCount > 0 ? unreadCount : "no"} new notification{unreadCount > 1 ? "s" : ""}</p>
          {unreadCount > 0 && (
            <button className="mark-read-button" onClick={markAllAsRead}>Mark All as Read</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentNotificationsPage;
