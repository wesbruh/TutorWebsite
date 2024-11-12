import React from "react";
import { useNavigate } from 'react-router-dom';
/* IMAGES NEED TO BE SUPPORTED, JUST TESTING RIGHT NOW - JAGROOP*/
/*import { Frame } from "./Frame";*/
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./styleTutorLogin.css"; // Modified

export const TutorLoginPage = () => {
    const navigate = useNavigate();
    // navigation functions used for buttons
    const studentSignup = () =>{
        navigate('/studentsignup');
    };
    const tutorSignup = () =>{
        navigate('/tutorsignup');
    };
    const studentLogin = () =>{
        navigate('/studentlogin');
    };
    const home = () =>{
        navigate('/');
    };
    const back = () => {
        navigate('/');
    };
    
    return (
        <div className="tutor-login-page">
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
                                <div className="text-wrapper">Tutor Login</div>

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

                                <button className="text-wrapper-4" onClick={studentLogin}>Student Login</button>

                                <div className="rectangle" />
                            </div>
                        </div>

                        <div className="div-2">
                            <p className="text-wrapper">No account? Sign up as a:</p>

                            <div className="sign-up-buttons">
                                <div className="div-wrapper">
                                    <button className="text-wrapper-5" onClick={studentSignup}>Student</button>
                                </div>

                                <div className="div-wrapper">
                                    <button className="text-wrapper-5" onClick={tutorSignup}>Tutor</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-bar">
                    <div className="back-logo">
                        <button onClick={home}>
                            <img className="logo" alt="Logo" src={logo} />
                        </button>
                        
                        <button onClick={back}> <img className="back-button" alt="Back button" src={backButton} /> </button>
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
