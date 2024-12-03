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
        <p>Welcome to your student dashboard.</p>
        <div className="appointments">
          <h2>Upcoming Sessions</h2>
        </div>
        <div className="oldAppointments">
          <h2>Past Sessions</h2>
        </div>
        <div className="billing">
          <h2>Pay Period Earnings: $</h2>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;