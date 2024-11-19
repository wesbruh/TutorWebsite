import React from "react";
import Sidebar from "../components/Sidebar";
import "./StudentAppointments.css";

function StudentAppointments () {

    return (
        <div className="appointments-page">
            <Sidebar />
            <main className="header">
                <h1>Appointments</h1>
                <p>View and schedule a tutoring appointment.</p>
                </main>
        </div>
    );
};

export default StudentAppointments;