import React, { useEffect, useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentNotifications.css";

const StudentNotificationsPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Cancellation of Appointment with Jane Smith",
      date: "2024-11-26T11:00:00",
    },
    {
      id: 2,
      title: "Confirmation of Appointment with Jane Smith",
      date: "2024-11-25T14:00:00",
    },
    {
      id: 3,
      title: "Cancellation of Appointment with Clark Kent",
      date: "2024-11-24T10:32:00",
    },
    {
      id: 4,
      title: "Confirmation of Appointment with Clark Kent",
      date: "2024-11-23T13:30:00",
    },
    {
      id: 5,
      title: "Completion of Appointment with Clark Kent",
      date: "2024-11-22T15:00:00",
    },
    {
      id: 6,
      title: "Confirmation of Appointment with Clark Kent",
      date: "2024-11-21T12:00:00",
    },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');

  // Add a new notification
  const addNotification = () => {
    if (newTitle && newDate) {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: Date.now(), title: newTitle, date: newDate },
      ]);
      setNewTitle('');
      setNewDate('');
      setShowPopup(false);
    }
  };

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Get the most recent upcoming notification
  const upcomingNotification = notifications
    .filter((notification) => new Date(notification.date) > currentTime)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  return (
    <div className="notifications-page">
      <Sidebar />
      <main className="main-content">
        <h1>Notifications</h1>
        <h3>View your notifications regarding the status of your appointments.</h3>
        <button className="add-button" onClick={() => setShowPopup(true)}>
          Add Appointment
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Add Appointment</h2>
              <label>
                Title:
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </label>
              <label>
                Date:
                <input
                  type="datetime-local"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </label>
              <div className="popup-actions">
                <button onClick={addNotification}>Add</button>
                <button onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        {upcomingNotification && (
          <div className="new-notification">
            <p>Upcoming Notification:</p>
            <p className="notification-title">{upcomingNotification.title}</p>
            <p className="notification-date">{new Date(upcomingNotification.date).toLocaleString()}</p>
          </div>
        )}
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon"></div>
              <div>
                <p className="notification-title">{notification.title}</p>
                <p className="notification-date">{new Date(notification.date).toLocaleString()}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeNotification(notification.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentNotificationsPage;
