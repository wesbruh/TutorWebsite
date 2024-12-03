import React/*, { useState, useEffect }*/ from "react";
//import axios from "axios";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentDashboard.css";





function StudentDashboard() {
  
  //First line fetches the localData. Subsequent lines are variables initialized with said data.
  const auth = JSON.parse(localStorage.getItem("auth"));
  // const id = auth?.user?._id;
  // const token = auth?.token;
  const name = auth?.user?.firstName;

  //Appointments with dummy data. 
  const appointments = [
    { subject: "Math", tutor: "John Doe", date: "12/5/24" },
    { subject: "Science", tutor: "Abhijit Singh", date: "12/7/24" },
    { subject: "History", tutor: "Wes Bruh", date: "12/9/24" },
  ];

  const oldAppointments = [
    { subject: "Math", tutor: "John Doe", date: "12/1/24" },
    { subject: "Science", tutor: "Wes Bruh", date: "11/25/24" },
    { subject: "History", tutor: "Abhijit Singh", date: "11/4/24" },
  ];

  //For payroll with dummy data.
  const total = 85;

  // //Not functioning properly.
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
        <p>Welcome to your student dashboard.</p>
        <div className="appointments">
          <h2>Upcoming Sessions</h2>
          <div className="appointment-blocks">
            {/*Prints out only the number of blocks as there are appointments*/}
            {appointments.map((appointment, index) => (
              <div key={index} className="appointment-block">
                <div className="appointment-row">Subject: {appointment.subject}</div>
                <div className="appointment-row">Session with: {appointment.tutor}</div>
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
                <div className="appointment-row">Session with: {appointment.tutor}</div>
                <div className="appointment-row">Date: {appointment.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="billing">
          <h2>Balance Due: ${total}</h2>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
