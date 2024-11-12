import React from "react";
/*import { CalendarIcon } from "./CalendarIcon";
import { GraduationCap } from "./GraduationCap";
import { StarWrapper } from "./StarWrapper";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import divider from "./divider.svg";
import emailIconFrame from "./email-icon-frame.svg";
import image from "./image.svg";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import line4 from "./line-4.svg";
import line5 from "./line-5.svg";
import line from "./line.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import "./styleStudentDashboard.css";
import vector from "./vector.svg";*/

export const StudentDashboard = () => {
    return (
        <div className="student-dashboard">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="frame">
                            <div className="div-wrapper">
                                <div className="text-wrapper">$15.00</div>
                            </div>

                            <p className="div">A payment is due by October 31, 2024.</p>

                            <div className="frame-2">
                                <div className="text-wrapper">Billing</div>
                            </div>
                        </div>

                        <div className="text-wrapper-2">Welcome, John!</div>

                        <div className="overlap-group">
                            <div className="log-out">
                                <div className="rectangle" />

                                <div className="div-2">
                                    {/*<img
                                        className="img"
                                        alt="Log out icon frame"
                                        src={logOutIconFrame}
                                    />*/}

                                    <div className="div-3">Log out</div>
                                </div>
                            </div>

                            <div className="side-bar">
                                <div className="div-4">
                                    <div className="rectangle-2" />

                                    <div className="div-2">
                                       {/*} <img
                                            className="img"
                                            alt="Dashboard icon frame"
                                            src={dashboardIconFrame}
                                        />*/}

                                        <div className="text-wrapper-3">Dashboard</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="div-5">
                                            {/*<img className="vector" alt="Vector" src={vector} />*/}

                                            {/*<CalendarIcon className="calendar-icon" />*/}
                                        </div>

                                        <div className="div-3">Appointments</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="div-5">
                                           {/* <img className="vector-2" alt="Vector" src={image} />*/}

                                            {/*<Statistic1 className="user-interface" />*/}
                                        </div>

                                        <div className="div-3">View Progress</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        {/*<img
                                            className="email-icon-frame"
                                            alt="Email icon frame"
                                            src={emailIconFrame}
                                        />*/}

                                        <div className="div-3">Notifications</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="tutor-icon-frame">
                                            <div className="tutor-icon">
                                                {/*<GraduationCap className="graduation-cap" />*/}
                                            </div>
                                        </div>

                                        <div className="text-wrapper-4">Tutors</div>
                                    </div>
                                </div>

                                <div className="billing">
                                    <div className="rectangle" />

                                    <div className="billing-button-frame">
                                        {/*<img
                                            className="img"
                                            alt="Billing icon frame"
                                            src={billingIconFrame}
                                        />*/}

                                        <div className="text-wrapper-5">Billing</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="img">
                                            {/*<StarWrapper className="star-instance" />*/}
                                        </div>

                                        <div className="div-3">Reviews</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                       {/* <img
                                            className="img"
                                            alt="Settings icon frame"
                                            src={settingsIconFrame}
                                        /> */}

                                        <div className="div-3">Account Settings</div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-topleft">
                            {/*    <User className="user-interface-user" />*/}
                                <div className="frame-3">
                                    <div className="text-wrapper-6">John Doe</div>

                                    <p className="div-3">
                                        <span className="span">
                                            JohnDoe123
                                            <br />
                                        </span>

                                        <a
                                            href="mailto:JohnDoe@gmail.com"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <span className="span">JohnDoe@gmail.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="div-6">
                            <div className="text-wrapper-6">Student Dashboard</div>

                            <p className="p">
                                Briefly view upcoming appointments, progress reports, and more.
                            </p>
                        </div>

                        <div className="account-balance">
                            <div className="text-wrapper-6">Account Balance</div>

                            <p className="p">
                                Make a payment or view your billing information.
                            </p>
                        </div>

                        <div className="progress-report">
                            <div className="chart">
                                <div className="days">
                                    <div className="text-wrapper-7">Mon</div>

                                    <div className="tue">Tues</div>

                                    <div className="text-wrapper-8">Wed</div>

                                    <div className="text-wrapper-9">Thurs</div>

                                    <div className="text-wrapper-10">Fri</div>
                                </div>

                                <div className="overlap-2">
                                    <div className="amounts">
                                        <div className="text-wrapper-11">1</div>

                                        <div className="text-wrapper-12">2</div>

                                        <div className="text-wrapper-13">3</div>

                                        <div className="text-wrapper-14">4</div>

                                        <div className="text-wrapper-15">5</div>
                                    </div>

                                    <div className="chart-lines">
                                       {/* <img className="line" alt="Line" src={line1} />

                                        <img className="line-2" alt="Line" src={line2} />

                                        <img className="line-3" alt="Line" src={line3} />

                                        <img className="line-4" alt="Line" src={line4} />

                                        <img className="line-5" alt="Line" src={line5} /> */}
                                    </div>

                                    <div className="flow-lines">
                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                              {/*  <img className="line-6" alt="Line" src={line} />*/}

                                                <div className="flow-indicator" />

                                                <div className="flow-indicator-2" />

                                                <div className="flow-indicator-3" />

                                                <div className="flow-indicator-4" />

                                                <div className="flow-indicator-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <img className="divider" alt="Divider" src={divider} /> */}

                                <div className="tab-filters">
                                    <div className="active-tab">
                                        <div className="text-wrapper-16">Week</div>
                                    </div>
                                </div>

                                <div className="identifiers">
                                    <div className="label">
                                        <div className="identifier" />

                                        <div className="name">Tutor Rating</div>
                                    </div>
                                </div>

                                <div className="card-info">
                                    <div className="card-title">Recent Sessions</div>
                                </div>
                            </div>
                        </div>

                        <div className="visuals-tab">
                            <div className="text-wrapper-17">Upcoming Appointments</div>

                            <div className="frame-4">
                                <p className="you-have-no-upcoming">
                                    You have no <br />
                                    upcoming appointments
                                </p>
                            </div>

                            <div className="frame-5">
                                <div className="text-wrapper-18">Schedule appointment</div>
                            </div>
                        </div>
                    </div>

                    <div className="top-bar">
                        <div className="back-logo">
                          {/*  <img className="logo" alt="Logo" src={logo} />*/}

                           {/* <img className="back-button" alt="Back button" src={backButton} />*/}
                        </div>

                        <p className="TUTOR-TITANS">
                            <span className="text-wrapper-19">TUTOR</span>

                            <span className="text-wrapper-20">&nbsp;</span>

                            <span className="text-wrapper-21">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
