import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./styleStudentSign-Up.css";

export const StudentSignUp = () => {
    const navigate = useNavigate();
    const tutorSignup = () =>{
        navigate('/tutorsignup');
    };
    const home = () => {
        navigate('/');
    };
    const back = () => {
        navigate('/');
    };
    
    return (
        <div className="student-sign-up">
        <div className="div">
            <div className="overlap-group">
            <img
                className="green-rectangle"
                alt="Green rectangle"
                //src={greenRectangleDesign}
            />

            <div className="frame">
                <div className="div-2">
                <div className="frame-2">
                    <div className="text-wrapper">Student Sign Up</div>

                    <div className="frame-3">
                    <div className="frame-4">
                        <div className="div-wrapper">
                        <div className="text-wrapper-2">John</div>
                        </div>

                        <div className="div-wrapper">
                        <div className="text-wrapper-2">Doe</div>
                        </div>

                        <input
                        className="email"
                        placeholder="JohnDoe@gmail.com"
                        type="email"
                        />

                        <div className="email-wrapper">
                        <div className="text-wrapper-2">JohnDoe123</div>
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
                <p className="p">Need a tutor account? Sign up here:</p>

                <div className="sign-up-buttons">
                    <div className="tutor-button">
                    <button className="tutor" onClick={tutorSignup}>Tutor Sign Up</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="top-bar">
            <div className="back-logo">
                <button onClick={home}><img className="logo" alt="Logo" src={logo} /> </button>
                
                    <img className="back-button" alt="Back button" src={backButton} />
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