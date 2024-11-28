import React from "react";
/*import { CalendarIcon } from "./CalendarIcon";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import image from "./image.png";
import image1 from "./image.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import maskGroup from "./mask-group.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import star12 from "./star-1-2.svg";
import star13 from "./star-1-3.svg";
import star14 from "./star-1-4.svg";
import star1 from "./star-1.svg";
import star22 from "./star-2-2.svg";
import star23 from "./star-2-3.svg";
import star24 from "./star-2-4.svg";
import star2 from "./star-2.svg";
import star32 from "./star-3-2.svg";
import star33 from "./star-3-3.svg";
import star34 from "./star-3-4.svg";
import star3 from "./star-3.svg";
import star42 from "./star-4-2.svg";
import star43 from "./star-4-3.svg";
import star44 from "./star-4-4.svg";
import star4 from "./star-4.svg";
import star52 from "./star-5-2.svg";
import star53 from "./star-5-3.svg";
import star54 from "./star-5-4.svg";
import star5 from "./star-5.svg";*/
import Sidebar from "../components/Sidebar";
import "./styleTutorDashboard.css";
import vector from "./vector.svg";

export const TutorDashboardPage = () => {
    return (
        <div className="tutor-dashboard-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="frame">
                            <p className="text-wrapper">
                                A paystub has been posted to your account for the bi-weekly
                                period of Oct. 14 - Oct. 28, 2024.
                            </p>

                            <div className="div-wrapper">
                                <div className="div">Download</div>
                            </div>
                        </div>

                        <div className="text-wrapper-2">Welcome, Jane!</div>

                        <div className="overlap-group">
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
                                    <div className="rectangle-2" />

                                    <div className="div-2">
                                        <img
                                            className="img"
                                            alt="Dashboard icon frame"
                                            src={dashboardIconFrame}
                                        />

                                        <div className="text-wrapper-3">Dashboard</div>
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
                                            <img className="vector-2" alt="Vector" src={image1} />

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

                                        <div className="text-wrapper-4">Payroll</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <img
                                            className="img"
                                            alt="Settings icon frame"
                                            src={settingsIconFrame}
                                        />

                                        <div className="div-3">Account Settings</div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-topleft">
                                <User className="user-interface-user" />
                                <div className="frame-2">
                                    <div className="text-wrapper-5">Jane Smith</div>

                                    <p className="div-3">
                                        <span className="span">
                                            JaneSmith123
                                            <br />
                                            JaneSmith
                                        </span>

                                        <a
                                            href="mailto:JohnDoe@gmail.com"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <span className="span">@gmail.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="student-dashboard">
                            <div className="text-wrapper-5">Tutor Dashboard</div>

                            <p className="p">
                                Briefly view completed appointments, upcoming appointments, and
                                more.
                            </p>
                        </div>

                        <div className="account-balance">
                            <div className="text-wrapper-5">Pay Stub Available</div>

                            <p className="p">View your recent pay stub.</p>
                        </div>

                        <div className="progress-report">
                            <div className="tutor-frame">
                                <div className="frame-3">
                                    <div className="text-wrapper-6">Name</div>

                                    <div className="text-wrapper-7">Subject</div>

                                    <div className="text-wrapper-8">Your Rating</div>
                                </div>

                                <div className="frame-4">
                                    <div className="text-wrapper-9">John Doe</div>

                                    <div className="text-wrapper-10">Math</div>

                                    <div className="rating">
                                        <img className="star-2" alt="Star" src={star1} />

                                        <img className="star-2" alt="Star" src={star2} />

                                        <img className="star-2" alt="Star" src={star3} />

                                        <img className="star-2" alt="Star" src={star4} />

                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <img className="star-3" alt="Star" src={star5} />

                                                <img
                                                    className="mask-group"
                                                    alt="Mask group"
                                                    src={maskGroup}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frame-5">
                                    <div className="text-wrapper-11">student</div>

                                    <div className="text-wrapper-12">subject</div>

                                    <div className="rating">
                                        <img className="star-2" alt="Star" src={star12} />

                                        <img className="star-2" alt="Star" src={star22} />

                                        <img className="star-2" alt="Star" src={star32} />

                                        <img className="star-2" alt="Star" src={star42} />

                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <img className="star-3" alt="Star" src={star52} />

                                                <img
                                                    className="mask-group"
                                                    alt="Mask group"
                                                    src={image}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frame-5">
                                    <div className="text-wrapper-13">student</div>

                                    <div className="text-wrapper-12">subject</div>

                                    <div className="rating">
                                        <img className="star-2" alt="Star" src={star13} />

                                        <img className="star-2" alt="Star" src={star23} />

                                        <img className="star-2" alt="Star" src={star33} />

                                        <img className="star-2" alt="Star" src={star43} />

                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <img className="star-3" alt="Star" src={star53} />

                                                <img
                                                    className="mask-group"
                                                    alt="Mask group"
                                                    src={maskGroup2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="frame-5">
                                    <div className="text-wrapper-13">student</div>

                                    <div className="text-wrapper-12">subject</div>

                                    <div className="rating">
                                        <img className="star-2" alt="Star" src={star14} />

                                        <img className="star-2" alt="Star" src={star24} />

                                        <img className="star-2" alt="Star" src={star34} />

                                        <img className="star-2" alt="Star" src={star44} />

                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <img className="star-3" alt="Star" src={star54} />

                                                <img
                                                    className="mask-group"
                                                    alt="Mask group"
                                                    src={maskGroup3}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="visuals-tab">
                            <div className="text-wrapper-14">Upcoming Appointments</div>

                            <div className="frame-6">
                                <p className="element-PM-thursday">
                                    4:00 PM Thursday <br />
                                    October 28, 2024
                                </p>
                            </div>
                        </div>

                        <div className="text-wrapper-15">Past Appointments</div>
                    </div>

                    <div className="top-bar">
                        <div className="back-logo">
                            <img className="logo" alt="Logo" src={logo} />

                            <img className="back-button" alt="Back button" src={backButton} />
                        </div>

                        <p className="TUTOR-TITANS">
                            <span className="text-wrapper-16">TUTOR</span>

                            <span className="text-wrapper-17">&nbsp;</span>

                            <span className="text-wrapper-18">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
/*

const TutorDashboard = () => {
    //placeholder data for upcoming appointments
  const tutorAppointments = [
    { id: 1, date: "1 October, 2024, time: "10:30", subject: "Calculus", studentName: "John Doe"},
    { id: 2, date: "2 October, 2024, time: "12:30", subject: "Statistics", studentName: "Mary Jones"},
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
            <h1>Hello, Jane Smith.</h1>
            <p>Welcome to your Tutor dashboard.</p>
        <ul className="appointments-list">
        <h2>Upcoming Sessions</h2>
          {tutorAppointments.map((tutorAppointments) => (
            <li key={tutorAppointments.id} className="appointments-item">
              <div className="appointments-icon"></div>
              <div> //map the data onto the student tutor dashboard
                <p className="appointments-date">{tutorAppointments.date}</p>
                <p className="appointments-time">{tutorAppointments.time}</p>
                <p className="appointments-subject">{tutorAppointments.subject}</p>
                <p className="appointments-studentName">{tutorAppointments.studentName}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="payroll"> //add preview paystub for tutor
            <h2>Recent Paystub: $85</h2>
            <p>Your biweekly paystub has been posted to your account.</p>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;

*/