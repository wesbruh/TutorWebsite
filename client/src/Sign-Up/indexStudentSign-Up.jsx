import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./style.css";

export const StudentSignUp = () => {
  const navigate = useNavigate();
  const tutorSignup = () => {
    navigate("/tutorsignup");
  };
  const home = () => {
    navigate("/");
  };
  const back = () => {
    navigate("/");
  };

  // getter setter
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form function
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, name, email, password);
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
                <div className="text-wrapper">Student Sign Up</div>

                <form onSubmit={handleSignUp}>
                  <div className="frame-3">
                    <div className="frame-4">
                      <input
                        className="div-wrapper"
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />

                      <input
                        className="div-wrapper"
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />

                      <input
                        className="div-wrapper"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                      <input
                        className="div-wrapper"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />

                      <input
                        className="div-wrapper"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <button className="sign-in-button" type="submit">
                      <div className="text-wrapper-3">Sign Up</div>
                    </button>
                  </div>
                </form>
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
                  <button className="tutor" onClick={tutorSignup}>
                    Tutor Sign Up
                  </button>
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
