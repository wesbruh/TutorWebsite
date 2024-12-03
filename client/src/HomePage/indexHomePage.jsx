import React from "react";
import { useNavigate } from "react-router-dom"; // import routes
import logo from "../assets/logo.svg"; // titans logo
import "./indexHomePage.css"; // HomePage.css
import  {HomeTutorCard}  from "../components/TutorCards/HomeTutorCard";
import tutorcard1PersonaPhoto from "../assets/tutorcard-1-persona-photo.png"
import tutorcard2PersonaPhoto from "../assets/tutorcard-2-persona-photo.png"
import tutorcard3PersonaPhoto from "../assets/tutorcard-3-persona-photo.png"

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
      <img className="logo" alt="Logo" src={logo} />
      
      <div className="top-section">
        <h1>
          <span className="TUTOR-title">TUTOR</span><span className="TITANS-title">TITANS</span>
        </h1>
      </div>
      <div className="button">
          <button className="button-text" onClick={signup}>
            Sign Up
          </button>
          <button className="button-text" onClick={login}>
            Login
          </button>
        </div>

      <h3>Learning Made Simple<br/>
          Success Made Possible
      </h3>
      <div className="tutor-cards">
      <HomeTutorCard
        imgSrc={tutorcard1PersonaPhoto}
        imgAlt="Tutor1 Image" 
        title="Jane Smith"
        subject="Math" 
        rating = "5/5"
        description="My goal is to build relationships with each student that I come across utilizing my empathy, emotion, and values shared in my work."/>
        <HomeTutorCard
        imgSrc={tutorcard2PersonaPhoto}
        imgAlt="Tutor2 Image" 
        title="Ava Lee"
        subject="Biology"
        rating = "4/5"
        description="My goal is to build relationships with each student that I come across utilizing my empathy, emotion, and values shared in my work."/>
        <HomeTutorCard
        imgSrc={tutorcard3PersonaPhoto}
        imgAlt="Tutor3 Image" 
        title="Eleanor Brooks"
        subject="English"
        rating = "4/5"
        description="My goal is to build relationships with each student that I come across utilizing my empathy, emotion, and values shared in my work."/>
      </div>
      
    </div>
  );
};