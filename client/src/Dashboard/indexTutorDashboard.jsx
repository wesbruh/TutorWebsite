import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./styleTutorDashboard.css";

//Currently prints from the whole array of users. This is incorrect and does not have the desired result.
const TutorDashboard = () => {
  
  //The following two lines successfully retrieve the token
  const auth = JSON.parse(localStorage.getItem("auth"));
  const id = auth?.user?._id;
  const token = auth?.token;

  const [user, setUser] = useState([]);


// Fetch user info using the token
useEffect(() => {
  if (token) {
    axios
      .get("http://localhost:8080/api/v1/userRoute/getUserName", {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in the Authorization header
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }
}, [token]);


//   //Grabs user
//   useEffect(() => {
//     axios
//     .get('http://localhost:8080/api/v1/userRoute/getUserName')
//     .then((response) => setUser(response.data))
//     .catch((err) => console.log(err));
//   }
// )

  return (
    <div className="dashboard">
      <Sidebar />
      <h1> {user.firstName} {id} {token}
        {/* {users.length > 0
          ? Hello, ${users[12].name} ${user.name} ${token} //First prints from array, second prints from token
          : 'Loading...'} */}
      </h1>
    </div>
  );
};

export default TutorDashboard;