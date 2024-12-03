import React/*, { useState, useEffect }*/ from "react";
//import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./styleTutorDashboard.css";

//Currently is able to print user data from local storage.
const TutorDashboard = () => {
  
  //First line fetches the localData. Subsequent lines are variables initialized with said data.
  const auth = JSON.parse(localStorage.getItem("auth"));
  // const id = auth?.user?._id;
  // const token = auth?.token;
  const name = auth?.user?.firstName;

  //Appointments with dummy data
  const appointments = [
    { subject: "Math", student: "John Doe", date: "12/5/24" },
    { subject: "Science", student: "Abhijit Singh", date: "12/7/24" },
    { subject: "History", student: "Wes Bruh", date: "12/9/24" },
  ];

  const oldAppointments = [
    { subject: "Math", student: "John Doe", date: "12/1/24" },
    { subject: "Science", student: "Wes Bruh", date: "11/25/24" },
    { subject: "History", student: "Abhijit Singh", date: "11/4/24" },
  ];

  //For earnings with dummy data
  const total = 120;

  // //this clock does not function as intended. Cannot actually get user information from the backend.  
  // const [user, setUser] = useState([]);
  // // Fetch user info using the token
  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get("http://localhost:8080/api/v1/userRoute/getUserName", {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Send token in the Authorization header
  //         },
  //       })
  //       .then((response) => {
  //         setUser(response.data);
  //       })
  //       .catch((err) => console.error("Error fetching user:", err));
  //   }
  // }, [token]);

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <h1>Hello, {name}.</h1>
        <p>Welcome to your tutor dashboard.</p>
        <div className="appointments">
          <h2>Upcoming Sessions</h2>
          <div className="appointment-blocks">
            {/*Prints out only the number of blocks as there are appointments*/}
            {appointments.map((appointment, index) => (
              <div key={index} className="appointment-block">
                <div className="appointment-row">Subject: {appointment.subject}</div>
                <div className="appointment-row">Session with: {appointment.student}</div>
                <div className="appointment-row">Date: {appointment.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="appointments"> {/*Past appointments*/}
          <h2>Past Sessions</h2>
          <div className="appointment-blocks">
            {oldAppointments.map((appointment, index) => (
              <div key={index} className="appointment-block">
                <div className="appointment-row">Subject: {appointment.subject}</div>
                <div className="appointment-row">Session with: {appointment.student}</div>
                <div className="appointment-row">Date: {appointment.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="billing">
          <h2>Pay Period Earnings: ${total}</h2>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;