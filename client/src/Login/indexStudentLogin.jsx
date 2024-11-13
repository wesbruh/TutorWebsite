import React from "react";
import { useNavigate } from 'react-router-dom';
/* IMAGES NEED TO BE SUPPORTED, JUST TESTING RIGHT NOW - JAGROOP*/
/*import { Frame } from "./Frame";*/
import backButton from "../assets/BackButton.png";
import logo from "../assets/logo.svg";
import "./styleStudentLogin.css"; // Modified

export const StudentLoginPage = () => {
    const navigate = useNavigate();
    // navigation functions used for buttons
    const studentSignup = () =>{
        navigate('/studentsignup');
    };
    const tutorSignup = () =>{
        navigate('/tutorsignup');
    };
    const home = () =>{
        navigate('/');
    };
    const tutorLogin = () =>{
        navigate('/tutorlogin');
    };
    const studentDashboard = () =>{
        navigate('/studentdashboard');
    }
    
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
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>

                                    <button className="sign-in-button" onClick={studentDashboard}>
                                        <div className="text-wrapper-2">Sign in</div>
                                    </button>
                                </div>
                            </div>

                            <div className="text-wrapper-3">Forgot your password?</div>
                        </div>

                        <div className="frame-wrapper">
                            <div className="frame-5">
                                <div className="rectangle" />

                                <button className="text-wrapper-4" onClick={tutorLogin} >Tutor Login</button>

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
