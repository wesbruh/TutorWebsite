import React from "react";
/* IMAGES NEED TO BE SUPPORTED, JUST TESTING RIGHT NOW - JAGROOP*/
/*import { Frame } from "./Frame";*/
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./styleStudentLogin.css"; // Modified

export const StudentLoginPage = () => {
    return (
        <div className="student-login-page">
            <div className="div">
                <div className="overlap-group">
                    {/*<img
                        className="green-rectangle"
                        alt="Green rectangle"
                        src={greenRectangleDesign}
                    />*/}

                    <div className="sign-in-box">
                        <div className="div-2">
                            <div className="frame-2">
                                <div className="text-wrapper">Student Login</div>

                                <div className="frame-3">
                                
                                <div className="frame-4">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Username"
                                    />
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>

                                    <div className="sign-in-button">
                                        <div className="text-wrapper-2">Sign in</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-wrapper-3">Forgot your password?</div>
                        </div>

                        <div className="frame-wrapper">
                            <div className="frame-5">
                                <div className="rectangle" />

                                <div className="text-wrapper-4">Tutor Login</div>

                                <div className="rectangle" />
                            </div>
                        </div>

                        <div className="div-2">
                            <p className="text-wrapper">No account? Sign up as a:</p>

                            <div className="sign-up-buttons">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-5">Student</div>
                                </div>

                                <div className="div-wrapper">
                                    <div className="text-wrapper-5">Tutor</div>
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
                        <span className="span">TUTOR</span>

                        <span className="text-wrapper-6">&nbsp;</span>

                        <span className="text-wrapper-7">TITANS</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
