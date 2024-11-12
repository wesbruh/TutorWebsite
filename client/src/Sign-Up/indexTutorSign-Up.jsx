import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./styleTutorSign-Up.css";

export const TutorSignUp = () => {
    const navigate = useNavigate();
    const studentSignup = () => {
        navigate('/studentsignup');
    };
    const home = () => {
        navigate('/');
    };
    const back = () => {
        navigate('/');
    };

    return (
        <div className="tutor-sign-up">
        <div className="div">
            <div className="overlap-group">
            <img
                className="green-rectangle"
                alt="Green rectangle"
                src={greenRectangleDesign}
            />
                {/*Add placeholders and input*/}
            <div className="frame">
                <div className="div-2">
                <div className="frame-2">
                    <div className="text-wrapper">Tutor Sign Up</div>

                    <div className="frame-3">
                    <div className="frame-4">
                        <div className="div-wrapper">
                        <div className="text-wrapper-2">Jane</div>
                        </div>

                        <div className="div-wrapper">
                        <div className="text-wrapper-2">Smith</div>
                        </div>

                        <input
                        className="email"
                        placeholder="JaneSmith@gmail.com"
                        type="email"
                        />

                        <div className="email-wrapper">
                        <div className="text-wrapper-2">JaneSith123</div>
                        </div>

                        <div className="email-wrapper">
                        <div className="text-wrapper-2">********</div>
                        </div>
                    </div>

                    <button className="sign-in-button">
                        <div className="text-wrapper-3">Sign Up</div>
                    </button>
                    </div>
                </div>
                </div>

                <div className="frame-wrapper">
                <div className="frame-5">
                    <div className="rectangle" />

                    <div className="text-wrapper-4">or Login</div>

                    <div className="rectangle" />
                </div>
                </div>

                <div className="div-2">
                <p className="p">Need a student account? Sign up here:</p>

                <div className="sign-up-buttons">
                    <div className="tutor-button">
                    <button className="tutor" onClick={studentSignup}>Student Sign Up</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="top-bar">
            <div className="back-logo">
                <button onClick={home}><img className="logo" alt="Logo" src={logo} /></button>
                <button onClick={back}>
                    <img className="back-button" alt="Back button" src={backButton} />
                </button>
                
            </div>

            <p className="TUTOR-TITANS">
                <span className="span">TUTOR</span>

                <span className="text-wrapper-5">&nbsp;</span>

                <span className="text-wrapper-6">TITANS</span>
            </p>
            </div>
        </div>
        </div>
    );
    };
