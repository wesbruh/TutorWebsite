// Support images
// Update global styleguide
import React from "react";
import { CalendarIcon } from "./CalendarIcon";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import image from "./image.svg";
import logOutIconFrame from "./log-out-icon-frame.svg";
import logo from "./logo.png";
import maskGroup from "./mask-group.png";
import personaPhoto from "./persona-photo.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import star1 from "./star-1.svg";
import star2 from "./star-2.svg";
import star3 from "./star-3.svg";
import star4 from "./star-4.svg";
import star5 from "./star-5.svg";
import "./styleTutorProfilePage.css";
import vector from "./vector.svg";

export const TutorProfilePage = () => {
    return (
        <div className="tutor-profile-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="overlap-group">
                            <div className="log-out">
                                <div className="rectangle" />

                                <div className="div">
                                    <img
                                        className="img"
                                        alt="Log out icon frame"
                                        src={logOutIconFrame}
                                    />

                                    <div className="text-wrapper">Log out</div>
                                </div>
                            </div>

                            <div className="side-bar">
                                <div className="div-2">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <img
                                            className="img"
                                            alt="Dashboard icon frame"
                                            src={dashboardIconFrame}
                                        />

                                        <div className="text-wrapper-2">Dashboard</div>
                                    </div>
                                </div>

                                <div className="div-2">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <div className="div-3">
                                            <img className="vector" alt="Vector" src={vector} />

                                            <CalendarIcon className="calendar-icon" />
                                        </div>

                                        <div className="text-wrapper">Appointments</div>
                                    </div>
                                </div>

                                <div className="div-2">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <div className="div-3">
                                            <img className="vector-2" alt="Vector" src={image} />

                                            <Statistic1 className="user-interface" />
                                        </div>

                                        <div className="text-wrapper">Tutor Analytics</div>
                                    </div>
                                </div>

                                <div className="div-2">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <img
                                            className="email-icon-frame"
                                            alt="Email icon frame"
                                            src={emailIconFrame}
                                        />

                                        <div className="text-wrapper">Notifications</div>
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

                                <div className="div-2">
                                    <div className="rectangle-2" />

                                    <div className="div">
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

                                    <p className="janesmith">
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

                        <div className="persona">
                            <div className="persona-name">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-5">Jane Smith</div>
                                </div>
                            </div>

                            <img
                                className="persona-photo"
                                alt="Persona photo"
                                src={personaPhoto}
                            />

                            <div className="quote">
                                <div className="my-goal-is-to-build-wrapper">
                                    <p className="my-goal-is-to-build">
                                        <span className="text-wrapper-6">“</span>

                                        <span className="text-wrapper-7">
                                            My goal is to build relationships with each student that I
                                            come across utilizing my empathy, emotion, and values
                                            shared in my work.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="demographics">
                                <div className="overlap-2">
                                    <div className="element-reviews">
                                        4/5&nbsp;&nbsp;(13 Reviews)
                                    </div>

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
                            </div>

                            <div className="overlap-3">
                                <div className="goals">
                                    <div className="overlap-4">
                                        <p className="p">
                                            Calculus
                                            <br />
                                            Organic Chemistry
                                            <br />
                                            Data Structures &amp; Algorithms
                                            <br />
                                            Linux Programming
                                        </p>

                                        <div className="text-wrapper-8">Subjects</div>
                                    </div>
                                </div>

                                <div className="frustrations">
                                    <div className="overlap-5">
                                        <p className="p">
                                            Mathematics Major
                                            <br />
                                            Currently attending Harvard University
                                            <br />
                                            Teacher Assistant <br />
                                            Leader of the Calculus Club
                                        </p>

                                        <div className="text-wrapper-8">Qualifications</div>
                                    </div>
                                </div>

                                <div className="frustrations-2">
                                    <div className="overlap-6">
                                        <p className="p">
                                            I want to be able to help every student reach their
                                            maximum potential.
                                            <br />
                                            I&#39;m trying to be the best version of myself everyday.
                                            <br />
                                            Everyday, I focus on improving the aspects of my life that
                                            I have control over.
                                        </p>

                                        <div className="text-wrapper-8">Opportunities</div>
                                    </div>
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
                            <span className="text-wrapper-9">TUTOR</span>

                            <span className="text-wrapper-10">&nbsp;</span>

                            <span className="text-wrapper-11">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
