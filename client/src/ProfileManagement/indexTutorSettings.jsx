// Support images
// Update global styleguide
import React from "react";
import { CalendarIcon } from "./CalendarIcon";
import { Checkbox } from "./Checkbox";
import { Group } from "./Group";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import galleryAdd from "./gallery-add.png";
import image from "./image.svg";
import line11 from "./line-11.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import "./styleTutorSettings.css";
import vector from "./vector.svg";

export const TutorSettingsPage = () => {
    return (
        <div className="tutor-settings-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="text-wrapper">Account Settings</div>

                        <div className="div">
                            <div className="log-out">
                                <div className="rectangle" />

                                <div className="div-2">
                                    <img
                                        className="img"
                                        alt="Log out icon frame"
                                        src={logOutIconFrame}
                                    />

                                    <div className="div-3">Log out</div>
                                </div>
                            </div>

                            <div className="side-bar">
                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <img
                                            className="img"
                                            alt="Dashboard icon frame"
                                            src={dashboardIconFrame}
                                        />

                                        <div className="text-wrapper-2">Dashboard</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="div-5">
                                            <img className="vector" alt="Vector" src={vector} />

                                            <CalendarIcon className="calendar-icon" />
                                        </div>

                                        <div className="div-3">Appointments</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="div-5">
                                            <img className="vector-2" alt="Vector" src={image} />

                                            <Statistic1 className="user-interface" />
                                        </div>

                                        <div className="div-3">Tutor Analytics</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <img
                                            className="email-icon-frame"
                                            alt="Email icon frame"
                                            src={emailIconFrame}
                                        />

                                        <div className="div-3">Notifications</div>
                                    </div>
                                </div>

                                <div className="billing">
                                    <div className="rectangle" />

                                    <div className="billing-button-frame">
                                        <img
                                            className="img"
                                            alt="Billing icon frame"
                                            src={billingIconFrame}
                                        />

                                        <div className="text-wrapper-2">Payroll</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle-2" />

                                    <div className="div-2">
                                        <img
                                            className="img"
                                            alt="Settings icon frame"
                                            src={settingsIconFrame}
                                        />

                                        <div className="text-wrapper-3">Account Settings</div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-topleft">
                                <User className="user-interface-user" />
                                <div className="frame">
                                    <div className="text-wrapper-4">Jane Smith</div>

                                    <p className="div-3">
                                        <span className="span">
                                            JaneSmith123
                                            <br />
                                        </span>

                                        <a
                                            href="mailto:JohnDoe@gmail.com"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <span className="span">JaneSmith@gmail.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="visuals-tab">
                            <div className="div-wrapper">
                                <div className="text-wrapper-5">Tutor Profile</div>
                            </div>

                            <p className="upcoming">
                                Create your tutor profile for <br />
                                students to check out!
                            </p>
                        </div>

                        <img className="line" alt="Line" src={line11} />

                        <div className="group-wrapper">
                            <div className="group-2">
                                <div className="group-3">
                                    <div className="text-wrapper-6">Upload your photo</div>

                                    <img
                                        className="gallery-add"
                                        alt="Gallery add"
                                        src={galleryAdd}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="your-profile-picture">
                            Your Profile&nbsp;&nbsp;Picture
                        </div>

                        <div className="input-fields">
                            <Group
                                divClassName="group-27"
                                text="Enter subjects taught"
                                text1="Subjects"
                            />
                            <div className="group-4">
                                <div className="overlap-2">
                                    <div className="text-wrapper-7">
                                        Enter your qualifications
                                    </div>
                                </div>

                                <div className="text-wrapper-8">Qualifications</div>
                            </div>
                        </div>

                        <div className="input-fields-2">
                            <Group text="Jane Smith" text1="Full name" />
                            <div className="group-4">
                                <div className="overlap-3">
                                    <div className="text-wrapper-9">JaneSmith123</div>
                                </div>

                                <div className="text-wrapper-10">Username</div>
                            </div>

                            <div className="group-5">
                                <div className="overlap-4">
                                    <div className="text-wrapper-11">JaneSmith@gmail.com</div>
                                </div>

                                <div className="text-wrapper-10">Email</div>
                            </div>

                            <div className="text-wrapper-12">Notification Reminders?</div>
                        </div>

                        <Checkbox className="checkbox-instance" state="checked" />
                        <div className="group-6">
                            <div className="overlap-5">
                                <div className="text-wrapper-13">Write your bio</div>
                            </div>

                            <div className="text-wrapper-14">Bio</div>
                        </div>

                        <button className="button">
                            <div className="overlap-6">
                                <div className="text-wrapper-15">Update Profile</div>
                            </div>
                        </button>

                        <button className="button-2">
                            <div className="text-wrapper-16">Reset</div>
                        </button>

                        <div className="student-dashboard">
                            <p className="p">
                                Change your profile picture, bio, and settings.
                            </p>
                        </div>
                    </div>

                    <div className="top-bar">
                        <div className="back-logo">
                            <img className="logo" alt="Logo" src={logo} />

                            <img className="back-button" alt="Back button" src={backButton} />
                        </div>

                        <p className="TUTOR-TITANS">
                            <span className="text-wrapper-17">TUTOR</span>

                            <span className="text-wrapper-18">&nbsp;</span>

                            <span className="text-wrapper-19">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
/*
//using code from student setting with adjustments
import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import "./styleTutorSettings.css";
import axios from "axios";

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


*/