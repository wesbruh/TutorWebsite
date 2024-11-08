import React from "react";
import { CalendarIcon } from "./CalendarIcon";
import { GraduationCap } from "./GraduationCap";
import { StarWrapper } from "./StarWrapper";
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
import maskGroup from "./mask-group.png";
import settingsIconFrame from "./settings-icon-frame.svg";
import star12 from "./star-1-2.svg";
import star13 from "./star-1-3.svg";
import star1 from "./star-1.svg";
import star22 from "./star-2-2.svg";
import star23 from "./star-2-3.svg";
import star2 from "./star-2.svg";
import star32 from "./star-3-2.svg";
import star33 from "./star-3-3.svg";
import star3 from "./star-3.svg";
import star42 from "./star-4-2.svg";
import star43 from "./star-4-3.svg";
import star4 from "./star-4.svg";
import star52 from "./star-5-2.svg";
import star53 from "./star-5-3.svg";
import star5 from "./star-5.svg";
import "./styleStudentReview.css";
import vector from "./vector.svg";

export const StudentReviewsPage = () => {
    return (
        <div className="student-reviews-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="green-rectangle" />

                    <div className="whole-dashboard">
                        <div className="text-wrapper">Reviews</div>

                        <div className="overlap-group">
                            <div className="log-out">
                                <div className="rectangle" />

                                <div className="div">
                                    <img
                                        className="img"
                                        alt="Log out icon frame"
                                        src={logOutIconFrame}
                                    />

                                    <div className="div-2">Log out</div>
                                </div>
                            </div>

                            <div className="side-bar">
                                <div className="div-3">
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

                                <div className="div-3">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <div className="div-4">
                                            <img className="vector" alt="Vector" src={vector} />

                                            <CalendarIcon className="calendar-icon" />
                                        </div>

                                        <div className="div-2">Appointments</div>
                                    </div>
                                </div>

                                <div className="div-3">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <div className="div-4">
                                            <img className="vector-2" alt="Vector" src={image1} />

                                            <Statistic1 className="user-interface" />
                                        </div>

                                        <div className="div-2">View Progress</div>
                                    </div>
                                </div>

                                <div className="div-3">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <img
                                            className="email-icon-frame"
                                            alt="Email icon frame"
                                            src={emailIconFrame}
                                        />

                                        <div className="div-2">Notifications</div>
                                    </div>
                                </div>

                                <div className="div-3">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <div className="tutor-icon-frame">
                                            <div className="tutor-icon">
                                                <GraduationCap className="graduation-cap" />
                                            </div>
                                        </div>

                                        <div className="text-wrapper-3">Tutors</div>
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

                                        <div className="text-wrapper-2">Billing</div>
                                    </div>
                                </div>

                                <div className="div-3">
                                    <div className="rectangle-2" />

                                    <div className="div">
                                        <div className="img">
                                            <StarWrapper className="star-instance" />
                                        </div>

                                        <div className="text-wrapper-4">Reviews</div>
                                    </div>
                                </div>

                                <div className="div-3">
                                    <div className="rectangle" />

                                    <div className="div">
                                        <img
                                            className="img"
                                            alt="Settings icon frame"
                                            src={settingsIconFrame}
                                        />

                                        <div className="div-2">Account Settings</div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-topleft">
                                <User className="user-interface-user" />
                                <div className="frame">
                                    <div className="text-wrapper-5">John Doe</div>

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
                        </div>

                        <div className="student-dashboard">
                            <div className="text-wrapper-5">Tutor Reviews</div>

                            <p className="p">
                                Read inspiring reviews from students who have been guided to
                                success by our dedicated tutors or leave your own review!
                            </p>
                        </div>

                        <div className="progress-report">
                            <div className="frame-2">
                                <div className="content">
                                    <div className="text-wrapper-6">Student Success Stories</div>
                                </div>

                                <div className="testimonials">
                                    <div className="testmonial">
                                        <div className="frame-3">
                                            <div className="rating">
                                                <div className="rating-2">
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

                                                <div className="text-wrapper-7">4/5</div>
                                            </div>

                                            <div className="text">
                                                <p className="text-wrapper-8">
                                                    Jane Smith was an incredible math tutor! She explained
                                                    concepts clearly and was always patient when I needed
                                                    extra help. Thanks to her guidance, my confidence in
                                                    math has improved, and my grades have gone up. I
                                                    highly recommend Jane to anyone looking for a
                                                    supportive and knowledgeable tutor!&#34;
                                                </p>
                                            </div>
                                        </div>

                                        <div className="name">
                                            <div className="user-profile">
                                                <div className="text-wrapper-9">JD</div>
                                            </div>

                                            <div className="group">
                                                <div className="text-wrapper-10">John Doe</div>

                                                <div className="text-wrapper-11">Student</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testmonial">
                                        <div className="frame-3">
                                            <div className="rating">
                                                <div className="rating-2">
                                                    <img className="star-2" alt="Star" src={star12} />

                                                    <img className="star-2" alt="Star" src={star22} />

                                                    <img className="star-2" alt="Star" src={star32} />

                                                    <img className="star-2" alt="Star" src={star42} />

                                                    <div className="div-wrapper">
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

                                                <div className="text-wrapper-7">5/5</div>
                                            </div>

                                            <div className="text">
                                                <p className="text-wrapper-8">
                                                    Clark Kent was a very informative and helpful biology
                                                    tutor. In particular, his thorough explanation of
                                                    human cell structure was very easy to comprehend. This
                                                    was a topic that has been plaguing me since we first
                                                    learned about it in school, however Clark was able to
                                                    explain it in a way that my teacher could not!
                                                </p>
                                            </div>
                                        </div>

                                        <div className="name">
                                            <div className="user-profile">
                                                <div className="text-wrapper-9">JD</div>
                                            </div>

                                            <div className="group">
                                                <div className="text-wrapper-10">John Doe</div>

                                                <div className="text-wrapper-11">Student</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testmonial-2">
                                        <div className="frame-3">
                                            <div className="rating">
                                                <div className="rating-2">
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

                                                <div className="text-wrapper-7">4/5</div>
                                            </div>

                                            <div className="text">
                                                <p className="text-wrapper-8">
                                                    Lily Lee was an exceptional tutor who was able to help
                                                    me pass my most recent American History Exam with a
                                                    97%. Lily was very patient and explained some of the
                                                    most trivial history concepts to me in a very easy to
                                                    understand way. Also, her constant quizzes throughout
                                                    the session helped me stay on top of my game. Thank
                                                    you!
                                                </p>
                                            </div>
                                        </div>

                                        <div className="name">
                                            <div className="user-profile">
                                                <div className="text-wrapper-9">JD</div>
                                            </div>

                                            <div className="group">
                                                <div className="text-wrapper-10">John Doe</div>

                                                <div className="text-wrapper-11">Student</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="visuals-tab">
                            <p className="upcoming">Ready to Write Your Review?</p>

                            <div className="frame-4">
                                <p className="text-wrapper-12">We would love your feedback</p>
                            </div>

                            <div className="frame-5">
                                <div className="text-wrapper-13">Write your Review</div>
                            </div>
                        </div>
                    </div>

                    <div className="top-bar">
                        <div className="back-logo">
                            <img className="logo" alt="Logo" src={logo} />

                            <img className="back-button" alt="Back button" src={backButton} />
                        </div>

                        <p className="TUTOR-TITANS">
                            <span className="text-wrapper-14">TUTOR</span>

                            <span className="text-wrapper-15">&nbsp;</span>

                            <span className="text-wrapper-16">TITANS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
