// Support images
// Update global styleguide
import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentSettings.css";
import axios from "axios";

export const StudentSettings = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const UpdateInfo = async (e) => { };

    return (
        <div className="student-settings">
            <Sidebar />
            <main className="main-content">
                <h1>Account Settings</h1>
                <p>Change your profile picture, bio, and settings.</p>
                <form onSubmit={UpdateInfo}>
                <div className="input-fields">
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter First Name</p>
                        <input 
                        className="input" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Last Name</p>
                        <input 
                        className="input" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Username</p>
                        <input 
                        className="input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Email</p>
                        <input 
                        className="input" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        </div>
                    </div>
                    <button className="input" type="submit">Submit</button>
                </div>
                </form>
            </main>
        </div>
    );
};
