import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";
import "./indexHomePage.css";

export const Home = () => {
    const navigate = useNavigate();
    const login = () =>{
        navigate('/studentlogin')
    }
    const signup = () =>{
        navigate('/studentsignup')
    }
    return (
        <div className="home">
            <div className="div">
                <div className="button">
                    <button className="button-sign-in" >
                        <div className="overlap-group">
                            <button className="text-wrapper" onClick={signup}>Sign Up</button>
                        </div>
                    </button>

                    <div className="overlap-wrapper">
                        <div className="overlap-group">
                            <button className="text-wrapper-2" onClick={login}>Log in</button>
                        </div>
                    </div>
                </div>

                <p className="TUTOR-TITANS">
                    <span className="span">TUTOR</span>

                    <span className="text-wrapper-3">&nbsp;</span>

                    <span className="text-wrapper-4">TITANS</span>
                </p>

                <img className="logo" alt="Logo" src={logo} />
            </div>
        </div>
    );
};
