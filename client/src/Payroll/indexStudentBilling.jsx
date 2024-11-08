// imports still need to be supported
import React from "react";
/*import { CalendarIcon } from "./CalendarIcon";
import { GraduationCap } from "./GraduationCap";
import { StarWrapper } from "./StarWrapper";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import frame from "./frame.svg";
import image2 from "./image-2.png";
import image from "./image.svg";
import logo from "./logo.png";
import rectangle2 from "./rectangle-2.svg";
import settingsIconFrame from "./settings-icon-frame.svg";*/
import "./styleStudentBilling.css";
import vector from "./vector.svg";

export const StudentBillingPage = () => {
    return (
        <div className="student-billing-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="rectangle" />

                    <div className="whole-dashboard">
                        <div className="overlap-group">
                            <div className="frame">
                                <div className="image-wrapper">
                                    <img className="image" alt="Image" src={image2} />
                                </div>

                                <div className="text-wrapper">Visa ending in 2255</div>

                                <div className="div-wrapper">
                                    <div className="div">Remove</div>
                                </div>
                            </div>

                            <div className="text-wrapper-2">Student Billing</div>

                            <div className="overlap-2">
                                <img className="img" alt="Rectangle" src={rectangle2} />

                                <div className="frame-2">
                                    <div className="frame-3">
                                        <img className="img-2" alt="Frame" src={frame} />

                                        <div className="text-wrapper-3">Log out</div>
                                    </div>

                                    <div className="rectangle-2" />
                                </div>

                                <div className="profile-topleft">
                                    <User className="user-interface-user" />
                                    <div className="frame-4">
                                        <div className="text-wrapper-4">John Doe</div>

                                        <p className="div-2">
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

                                <div className="side-bar">
                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <img
                                                className="img-2"
                                                alt="Dashboard icon frame"
                                                src={dashboardIconFrame}
                                            />

                                            <div className="text-wrapper-3">Dashboard</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <div className="div-5">
                                                <img className="vector" alt="Vector" src={vector} />

                                                <CalendarIcon className="calendar-icon" />
                                            </div>

                                            <div className="div-2">Appointments</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <div className="div-5">
                                                <img className="vector-2" alt="Vector" src={image} />

                                                <Statistic1 className="user-interface" />
                                            </div>

                                            <div className="div-2">View Progress</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <img
                                                className="email-icon-frame"
                                                alt="Email icon frame"
                                                src={emailIconFrame}
                                            />

                                            <div className="div-2">Notifications</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <div className="tutor-icon-frame">
                                                <div className="tutor-icon">
                                                    <GraduationCap className="graduation-cap" />
                                                </div>
                                            </div>

                                            <div className="text-wrapper-5">Tutors</div>
                                        </div>
                                    </div>

                                    <div className="billing">
                                        <div className="rectangle-3" />

                                        <div className="billing-button-frame">
                                            <img
                                                className="img-2"
                                                alt="Billing icon frame"
                                                src={billingIconFrame}
                                            />

                                            <div className="text-wrapper-6">Billing</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <div className="img-2">
                                                <StarWrapper className="star-instance" />
                                            </div>

                                            <div className="div-2">Reviews</div>
                                        </div>
                                    </div>

                                    <div className="div-3">
                                        <div className="rectangle-2" />

                                        <div className="div-4">
                                            <img
                                                className="img-2"
                                                alt="Settings icon frame"
                                                src={settingsIconFrame}
                                            />

                                            <div className="div-2">Account Settings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="frame-5">
                                <div className="text-wrapper-4">Appointment History</div>

                                <p className="text-wrapper-7">
                                    Manage billing information and view appointment receipts
                                </p>
                            </div>

                            <div className="frame-6">
                                <div className="text-wrapper-4">Payment Method</div>

                                <div className="text-wrapper-7">Manage billing information</div>
                            </div>

                            <div className="frame-7">
                                <div className="frame-8">
                                    <div className="text-wrapper-8">Subject</div>

                                    <div className="text-wrapper-9">Receipt</div>

                                    <div className="text-wrapper-10">Date</div>
                                </div>

                                <div className="frame-9">
                                    <div className="text-wrapper-11">Math</div>

                                    <div className="text-wrapper-12">October 13, 2024</div>

                                    <div className="frame-10">
                                        <div className="div">Download</div>
                                    </div>
                                </div>

                                <div className="frame-11">
                                    <div className="text-wrapper-11">Math</div>

                                    <div className="text-wrapper-12">October 12, 2024</div>

                                    <div className="frame-10">
                                        <div className="div">Download</div>
                                    </div>
                                </div>

                                <div className="frame-12">
                                    <div className="text-wrapper-11">Biology</div>

                                    <div className="text-wrapper-12">October 11, 2024</div>

                                    <div className="frame-10">
                                        <div className="div">Download</div>
                                    </div>
                                </div>

                                <div className="frame-13">
                                    <div className="text-wrapper-11">Math</div>

                                    <div className="text-wrapper-12">October 10, 2024</div>

                                    <div className="frame-10">
                                        <div className="div">Download</div>
                                    </div>
                                </div>
                            </div>

                            <div className="visuals-tab">
                                <div className="upcoming">Account Balance</div>

                                <div className="frame-14">
                                    <div className="text-wrapper-13">$15.00</div>
                                </div>

                                <div className="frame-15">
                                    <div className="text-wrapper-14">Make a payment</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top-bar">
                        <div className="back-logo">
                            <img className="logo" alt="Logo" src={logo} />

                            <img className="back-button" alt="Back button" src={backButton} />
                        </div>

                        <p className="TUTOR-TITANS">
                            <span className="text-wrapper-15">TUTOR</span>

                            <span className="text-wrapper-16">&nbsp;</span>

                            <span className="text-wrapper-17">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
