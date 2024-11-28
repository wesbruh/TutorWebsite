import React from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentDashboard.css";
//import user controller

function StudentDashboard() {
  // get name of user
  // const [name, getName] = useState("");

  // useEffect(() => ){
  //     async function fetchName(){
  //         try{
  //             const response = await fetch()
  //         }
  //     }
  // } //Just messing with some things...Will likely scrap this approach...I think we need a separate thing to control calls to the database...

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <h1>Hello, Billy Joel.</h1>
        <p>Welcome to your student dashboard.</p>
        <div className="appointments">
          <h2>Upcoming Sessions</h2>
        </div>
        <div className="oldAppointments">
          <h2>Past Sessions</h2>
        </div>
        <div className="billing">
          <h2>Balance Due: $</h2>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
