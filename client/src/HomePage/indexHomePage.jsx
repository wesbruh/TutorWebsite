import React from "react";
import logo from "../assets/logo.svg";
import "./indexHomePage.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="div">
                <div className="button">
                    <button className="button-sign-in">
                        <div className="overlap-group">
                            <div className="text-wrapper">Sign Up</div>
                        </div>
                    </button>

                    <div className="overlap-wrapper">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">Log in</div>
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
