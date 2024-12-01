import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./styleTutorDashboard.css";

//Currently prints from the whole array of users. This is incorrect and does not have the desired result.
const TutorDashboard = () => {
  const [users, setUsers] = useState([]);
  
  //Grabs all users
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/userRoute/getUserData')
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <h1>
        {users.length > 0
          ? `Hello, ${users[13].name}` //Need to develop way to specify by _id. 
          : 'Loading...'}
      </h1>
    </div>
  );
};



// const TutorDashboard = ({ tutorId} ) => {
// const[user, SetUser] = useState(null)
//   useEffect(()=> {
//     axios.get('http://localhost:8080/api/v1/userRoute/getname' , {
//        params: { tutorId } 
//       })
//     .then(user => SetUser(user.data.name))
//     .catch(err => console.log(err))
//   }, [tutorId])


//   return (
//     <div className="dashboard">
//     <Sidebar />
// <h1>Hello,{user ? user.name : "Loading..."} </h1>
//     </div>
//   );
// }


// const TutorDashboard = ({ tutorId }) => {
//   const [tutorName, setTutorName] = useState("Loading...");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTutorName = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/v1/tutorRoute/getTutorName", { tutorId });
        
//         // Assuming response.data is an array of tutor objects
//         //const response = response.data.find((tutor) => tutor._id === tutorId); // Match by tutorId
//         if (response.data) {
//           setTutorName(response.data.name || "No name available");
//         } else {
//           setError("Tutor not found");
//         }
//       } catch (err) {
//         console.error("Error fetching tutor data:", err);
//         setError(err.response?.data?.error || "Failed to fetch tutor data");
//       }
//     };

//     fetchTutorName();
//   }, [tutorId]);

//   // Placeholder data for upcoming appointments
//   const tutorAppointments = [
//     { id: 1, date: "1 October, 2024", time: "10:30", subject: "Calculus", studentName: "John Doe" },
//     { id: 2, date: "2 October, 2024", time: "12:30", subject: "Statistics", studentName: "Mary Jones" },
//   ];

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <main className="main-content">
//         {error ? (
//           <p className="error-message">{error}</p>
//         ) : (
//           <>
//             <h1>Hello, {tutorName}.</h1>
//             <p>Welcome to your Tutor dashboard.</p>
//           </>
//         )}
//         <ul className="appointments-list">
//           <h2>Upcoming Sessions</h2>
//           {tutorAppointments.map((appointment) => (
//             <li key={appointment.id} className="appointments-item">
//               <div className="appointments-icon"></div>
//               <div>
//                 <p className="appointments-date">{appointment.date}</p>
//                 <p className="appointments-time">{appointment.time}</p>
//                 <p className="appointments-subject">{appointment.subject}</p>
//                 <p className="appointments-studentName">{appointment.studentName}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="payroll">
//           <h2>Recent Paystub: $85</h2>
//           <p>Your biweekly paystub has been posted to your account.</p>
//         </div>
//       </main>
//     </div>
//   );
// };

export default TutorDashboard;