//using code from student setting with adjustments
import React, {useState} from "react";
import "./styleTutorSettings.css";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";

export const TutorSettings = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState(""); //needs fixing because larger text box is needed

    const UpdateInfo = async (e) => { };

    return (
        <div className="tutor-settings">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Email</p>
                        <input 
                        className="input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Bio</p>
                        <input 
                        className="input" 
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
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

export default TutorSettings;