import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/* IMAGES NEED TO BE SUPPORTED, JUST TESTING RIGHT NOW - JAGROOP*/
/*import { Frame } from "./Frame";*/
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./style.css"; // Modified
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../context/auth";

export const TutorLoginPage = () => {
  const navigate = useNavigate();
  // navigation functions used for buttons
  const studentSignup = () => {
    navigate("/studentsignup");
  };
  const tutorSignup = () => {
    navigate("/tutorsignup");
  };
  const studentLogin = () => {
    navigate("/studentlogin");
  };
  const home = () => {
    navigate("/");
  };
  const back = () => {
    navigate("/");
  };
  const forgotPassword = () => {
    navigate("/forgotPassword");
  };

  // getter setter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  // form function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //response
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      //check student or tutor
      if (res.data.user.role === "student") {
        toast.error("Wrong login page");
        toast.loading("student login page");
        setTimeout(() => {
          navigate("/studentlogin");
        }, 1000);
      } else if (res && res.data.success) {
        toast.success(res.data.message);
        toast.loading("Dashboard");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // save user data to localStorage
        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate("/tutordashboard");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Wrong Email or Password");
      } else {
        console.log(error);
        toast.error("Huh Something wrong");
      }
    }
  };

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:8080/auth/google";
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

                <form className="frame-3" onSubmit={handleLogin}>
                  <div className="frame-4">
                    <input
                      className="input"
                      placeholder="Email"
                      type="email"
                      /*get from user input*/
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      /*get from user input*/
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button className="sign-in-button" type="submit">
                    <div className="text-wrapper-2">Sign in</div>
                  </button>

                  <button
                    className="sign-in-button"
                    type="button"
                    onClick={forgotPassword}
                  >
                    <div className="text-wrapper-2">Forgot Password</div>
                  </button>
                </form>
              </div>
            </div>

            <div className="frame-wrapper">
              <div className="frame-5">
                <div className="rectangle" />

                <button className="text-wrapper-4" onClick={studentLogin}>
                  Student Login
                </button>

                <div className="rectangle" />
              </div>
            </div>

            <div className="div-2">
              <p className="text-wrapper">No account? Sign up as a:</p>

              <div className="sign-up-buttons">
                <div className="div-wrapper">
                  <button className="text-wrapper-5" onClick={studentSignup}>
                    Student
                  </button>
                </div>

                <div className="div-wrapper">
                  <button className="text-wrapper-5" onClick={tutorSignup}>
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
            </button>

            <button onClick={back}>
              {" "}
              <img
                className="back-button"
                alt="Back button"
                src={backButton}
              />{" "}
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
