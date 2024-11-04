// Support images
// Update global styleguide
import React from "react";
import { CalendarIcon } from "./CalendarIcon"; // 71
import { Checkbox } from "./Checkbox";
import { GraduationCap } from "./GraduationCap";
import { Group } from "./Group";
import { StarWrapper } from "./StarWrapper";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png"; //265
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import galleryAdd from "./gallery-add.png";
import image from "./image.svg";
import line11 from "./line-11.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import "./styleStudentSettings.css";
import vector from "./vector.svg";

export const StudentSettings = () => {
    return (
        <div className="student-settings">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="text-wrapper-2">Account Settings</div>

                        <div className="overlap-2">
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
                                            <img className="vector-2" alt="Vector" src={image} />

                                            <Statistic1 className="user-interface" />
                                        </div>

                                        <div className="div-3">View Progress</div>
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

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="tutor-icon-frame">
                                            <div className="tutor-icon">
                                                <GraduationCap className="graduation-cap" />
                                            </div>
                                        </div>

                                        <div className="text-wrapper-4">Tutors</div>
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

                                        <div className="text-wrapper-3">Billing</div>
                                    </div>
                                </div>

                                <div className="div-4">
                                    <div className="rectangle" />

                                    <div className="div-2">
                                        <div className="img">
                                            <StarWrapper className="star-instance" />
                                        </div>

                                        <div className="div-3">Reviews</div>
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

                                        <div className="text-wrapper-5">Account Settings</div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-topleft">
                                <User className="user-interface-user" />
                                <div className="frame">
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

                        <img className="line" alt="Line" src={line11} />

                        <div className="group-wrapper">
                            <div className="div-wrapper">
                                <div className="group-2">
                                    <div className="text-wrapper-7">Upload your photo</div>

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

                        <div className="input-fileds">
                            <Group />
                            <div className="group-3">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-8">JohnDoe123</div>
                                </div>

                                <div className="text-wrapper-9">Username</div>
                            </div>

                            <div className="group-4">
                                <div className="overlap-3">
                                    <div className="text-wrapper-10">JohnDoe@gmail.com</div>
                                </div>

                                <div className="text-wrapper-9">Email</div>
                            </div>

                            <div className="text-wrapper-11">Notification Reminders?</div>
                        </div>

                        <div className="input-fields">
                            <div className="group-5">
                                <div className="overlap-group-2">
                                    <div className="john-doe">Enter favorite subjects</div>
                                </div>

                                <div className="text-wrapper-12">Favorite Subjects</div>
                            </div>
                        </div>

                        <Checkbox className="checkbox-instance" state="checked" />
                        <div className="group-6">
                            <div className="overlap-4">
                                <div className="text-wrapper-13">Write your Bio.</div>
                            </div>

                            <div className="text-wrapper-14">Bio</div>
                        </div>

                        <button className="button">
                            <div className="overlap-5">
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
