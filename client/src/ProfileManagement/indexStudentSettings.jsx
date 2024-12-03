// Support images
// Update global styleguide
import React, {useState} from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentSettings.css";
import axios from "axios";


export const StudentSettings = () => {

    //First line fetches the localData. Subsequent lines are variables initialized with said data.
    const auth = JSON.parse(localStorage.getItem("auth"));
    const id = auth?.user?._id;
    const token = auth?.token;

    const [firstName, setFirstName] = useState(auth?.user?.firstName);
    const [lastName, setLastName] = useState(auth?.user?.lastName);
    const [name, setName] = useState(auth?.user?.name);
    const [email, setEmail] = useState(auth?.user?.email);

    const UpdateInfo = async (e) => {
        e.preventDefault();
        if (token) {
            try {
                const response = await axios.put(
                    "http://localhost:8080/api/v1/userRoute/setFirstName",
                    { firstName }, // Send updated first name in request body
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
                    <button className="input" type="submit">Submit</button>
                </div>
                </form>
            </main>
        </div>
    );
};
