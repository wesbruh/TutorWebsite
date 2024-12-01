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
    const [selectedSubject, setSelectedSubject] = useState('');
    const [subjects, setSubjects] = useState([]);

    const UpdateInfo = async (e) => { };

    return (
        <div className="tutor-settings">
            <Sidebar />
            <main className="main-content">
                
                <h1>Account Settings</h1>
                <p>Change your profile picture, bio, and settings.</p>
                <label>
                    Subject: 
                    <select  onChange={e => setSelectedSubject(e.target.value)} value={selectedSubject}>
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                           <option key={subject._id} value={subject._id}>{subject.name}</option>
                        ))}
                    </select>
                </label>
                <form onSubmit={UpdateInfo}>
                <div className="input-fields">
                    <div className = "input-item">
                        <div>
                        <p className="title">Subjects</p>
                        <select  onChange={e => setSelectedSubject(e.target.value)} value={selectedSubject}>
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                           <option key={subject._id} value={subject._id}>{subject.name}</option>
                        ))}
                        </select>
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