import React from "react";
import { useNavigate } from "react-router-dom"; // import routes
import logo from "../assets/logo.svg"; // titans logo

import "./indexHomePage.css"; // HomePage.css


export const Home = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/studentlogin");
  };
  const signup = () => {
    navigate("/studentsignup");
  };

  return (
    <div className="home-page">
      
      <div className="top-section">
        <h1>TUTOR TITANS</h1>
      </div>
      <div className="button">
          <button className="button-text" onClick={signup}>
            Sign Up
          </button>
          <button className="button-text" onClick={login}>
            Login
          </button>
        </div>

      <h3>Learning Made Simple&nbsp;Success Made Possible</h3>
    </div>
  );
};
