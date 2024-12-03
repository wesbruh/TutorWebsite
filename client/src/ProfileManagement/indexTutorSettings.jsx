//using code from student setting with adjustments
import React, {useState} from "react";
import "./styleTutorSettings.css";
import axios from "axios";
import Sidebar from "../components/TutorSideBar/Sidebar";

export const TutorSettings = () => {

    //First line fetches the localData. Subsequent lines are variables initialized with said data.
    const auth = JSON.parse(localStorage.getItem("auth"));
    const token = auth?.token;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState(""); //needs fixing because larger text box is needed
    const [selectedSubject, setSelectedSubject] = useState('');
    //const [subjects, setSubjects] = useState([]);

    const UpdateFirstName = async (e) => {
        e.preventDefault();
        if (token) {
            try {
                const response = await axios.put(
                    "http://localhost:8080/api/v1/userRoute/setFirstName",
                    { firstName }, // Send updated first name
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // Update the frontend state with the new first name
                setFirstName(response.data.user.firstName);
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        ...auth,
                        user: { ...auth.user, firstName: response.data.user.firstName },
                    })
                );
                console.log('First name updated successfully:', response.data);
            } catch (err) {
                console.error("Error updating first name:", err.response?.data || err.message);
            }
        }
    };
    const UpdateLastName = async (e) => {
        e.preventDefault();
        if (token) {
            try {
                const response = await axios.put(
                    "http://localhost:8080/api/v1/userRoute/setLastName",
                    { lastName }, // Send updated last name
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // Update the frontend state with the new last name
                setFirstName(response.data.user.lastName);
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        ...auth,
                        user: { ...auth.user, lastName: response.data.user.lastName },
                    })
                );
                console.log('Last name updated successfully:', response.data);
            } catch (err) {
                console.error("Error updating last name:", err.response?.data || err.message);
            }
        }        
    };
    const UpdateEmail = async (e) => {
        e.preventDefault();
        if (token) {
            try {
                const response = await axios.put(
                    "http://localhost:8080/api/v1/userRoute/setEmail",
                    { email }, // Send updated email
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // Update the frontend state with the new email
                setFirstName(response.data.user.email);
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        ...auth,
                        user: { ...auth.user, email: response.data.user.email },
                    })
                );
                console.log('Email updated successfully:', response.data);
            } catch (err) {
                console.error("Error updating email:", err.response?.data || err.message);
            }
        }   
    };


    return (
        <div className="tutor-settings">
            <Sidebar />
            <main className="main-content">
                
                <h1>Account Settings</h1>
                <p>Change your profile picture, bio, and settings.</p>
                
                <div className="input-fields">
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter First Name</p>
                        <form onSubmit={UpdateFirstName}>
                        <input 
                        className="input" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <button className="input" type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Last Name</p>
                        <form onSubmit={UpdateLastName}>
                        <input 
                        className="input" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <button className="input" type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">Enter Email</p>
                        <form onSubmit={UpdateEmail}>
                        <input 
                        className="input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="input" type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
    );
};

export default TutorSettings;