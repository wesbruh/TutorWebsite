// Support images
// Update global styleguide
import React from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentSettings.css";

export const StudentSettings = () => {
    return (
        <div className="student-settings">
            <Sidebar />
            <main className="main-content">
                <h1>Account Settings</h1>
                <p>Change your profile picture, bio, and settings.</p>
                <div className="input-fields">
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Full Name</p>
                        <p className="input">Full Name</p>
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Username</p>
                        <p className="input">Username</p>
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Email</p>
                        <p className="input">Email</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
