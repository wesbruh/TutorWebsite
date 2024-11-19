import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/* IMAGES NEED TO BE SUPPORTED, JUST TESTING RIGHT NOW - JAGROOP*/
/*import { Frame } from "./Frame";*/
import backButton from "../assets/BackButton.png";
import logo from "../assets/logo.svg";
import "./style.css"; // Modified
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/auth";
import axios from "axios";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  // navigation functions used for buttons
  const studentLogin = () => {
    navigate("/studentlogin");
  };
  const home = () => {
    navigate("/");
  };
  const tutorLogin = () => {
    navigate("/tutorlogin");
  };

  // getter setter
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState();

  // form function
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        //console.log("success " + res.data.success);
        toast.success(res && res.data.message);
        toast.loading("Login");
        setTimeout(() => {
          navigate("/studentLogIn");
        }, 1500);
      } else {
        //console.log(res.data.success);
        toast.error(res && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wrong: forgot password");
    }
  };

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
                <div className="text-wrapper">Forgot Password</div>

                <form className="frame-3" onSubmit={handleForgotPassword}>
                  <div className="frame-4">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      /*get from user input*/
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <input
                      className="input"
                      type="password"
                      placeholder="New Password"
                      /*get from user input*/
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />

                    <input
                      className="input"
                      type="text"
                      placeholder="What is your favorite food"
                      /*get from user input*/
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      required
                    />
                  </div>

                  <button className="sign-in-button" type="submit">
                    <div className="text-wrapper-2">Reset Password</div>
                  </button>
                </form>
              </div>
            </div>

            <div className="div-2">
              <p className="text-wrapper">Login:</p>

              <div className="sign-up-buttons">
                <div className="div-wrapper">
                  <button className="text-wrapper-5" onClick={studentLogin}>
                    Student
                  </button>
                </div>

                <div className="div-wrapper">
                  <button className="text-wrapper-5" onClick={tutorLogin}>
                    Tutor
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
              <img className="back-button" alt="Back button" src={backButton} />
            </button>
          </div>

          <p className="TUTOR-TITANS">
            <span className="span">TUTOR</span>

            <span className="text-wrapper-6">&nbsp;</span>

            <span className="text-wrapper-7">TITANS</span>
          </p>
        </div>
      </div>
      <ToastContainer hideProgressBar transition={Flip} />
    </div>
  );
};

export default ForgotPasswordPage;
