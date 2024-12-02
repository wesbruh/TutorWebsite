import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import backButton from "../assets/BackButton.png";
import greenRectangleDesign from "../assets/greenbox.png";
import logo from "../assets/logo.svg";
import "./style.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const TutorSignUp = () => {
  const navigate = useNavigate();
  const studentSignup = () => {
    navigate("/studentsignup");
  };
  const tutorlogin = () => {
    navigate("/tutorlogin");
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
  const [answer, setAnswer] = useState("");
  const [role] = useState("tutor");

  // form function
  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, name, email, password);
    // toast.success("Register Successfully");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { firstName, lastName, name, email, password, role, answer }
      );
      // Step 2: Create the tutor entry if role is tutor
      if (role === "tutor") {
        const tutorRes = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/tutorRoute/newTutor`,
          { 
            name: `${firstName} ${lastName}`,
            email: `${email}`
          }
        );
      }
      if (res && res.data.success) {
        //console.log("success " + res.data.success);
        toast.success(res && res.data.message);
        toast.loading("Login");
        setTimeout(() => {
          navigate("/tutorlogin");
        }, 1500);
      } else {
        //console.log(res.data.success);
        toast.error(res && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wrong");
    }
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

                      {<input
                        className="div-wrapper"
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />}

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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />

                      <input
                        className="div-wrapper"
                        type="text"
                        placeholder="What is your favorite food?"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                      />
                    </div>

                    <button className="sign-in-button" type="submit">
                      <div className="text-wrapper-2">Sign Up</div>
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
              <button className="tutor" onClick={tutorlogin}>
                Tutor Login
              </button>
            </div>

            <div className="div-2">
              <div className="frame-5">
                <div className="rectangle" />

                <div className="text-wrapper-4">or Student Sign up</div>

                <div className="rectangle" />
              </div>
              <button className="tutor" onClick={studentSignup}>
                Student Sign Up
              </button>
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

      <ToastContainer hideProgressBar transition={Flip} />
    </div>
  );
};
