import React, { useState, useEffect } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentNotifications.css";

const StudentNotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Cancellation of Appointment with Jane Smith", date: "2024-12-15", time: "11:00 AM" },
    { id: 2, title: "Confirmation of Appointment with Jane Smith", date: "2024-12-14", time: "02:00 PM" },
    { id: 3, title: "Cancellation of Appointment with Clark Kent", date: "2024-12-13", time: "02:32 PM" },
    { id: 4, title: "Confirmation of Appointment with Clark Kent", date: "2024-12-13", time: "02:00 PM" },
    { id: 5, title: "Completion of Appointment with Clark Kent", date: "2024-12-11", time: "02:00 - 03:00 PM" },
  ]);

  const [closestNotification, setClosestNotification] = useState(null);

  useEffect(() => {
    if (notifications.length > 0) {
      const today = new Date();
      const closest = notifications.reduce((prev, curr) => {
        const prevDate = new Date(prev.date);
        const currDate = new Date(curr.date);
        return currDate >= today && currDate < prevDate ? curr : prev;
      });
      setClosestNotification(closest);
    } else {
      setClosestNotification(null);
    }
  }, [notifications]);

  const handleRemoveNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
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
              <button
                className="remove-button"
                onClick={() => handleRemoveNotification(notification.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {closestNotification && (
          <div className="new-notification">
            <p>Upcoming Notification:</p>
            <p className="notification-title">{closestNotification.title}</p>
            <p className="notification-date">
              {closestNotification.date} | {closestNotification.time}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentNotificationsPage;
