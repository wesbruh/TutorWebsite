// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import logo from "../assets/logo.svg";
// import "./indexHomePage.css";

// export const Home = () => {
//     const navigate = useNavigate();
//     const login = () =>{
//         navigate('/studentlogin')
//     }
//     const signup = () =>{
//         navigate('/studentsignup')
//     }
//     return (
//         <div className="home">
//             <div className="div">
//                 <div className="button">
//                     <button className="button-sign-in" >
//                         <div className="overlap-group">
//                             <button className="text-wrapper" onClick={signup}>Sign Up</button>
//                         </div>
//                     </button>

//                     <div className="overlap-wrapper">
//                         <div className="overlap-group">
//                             <button className="text-wrapper-2" onClick={login}>Log in</button>
//                         </div>
//                     </div>
//                 </div>

//                 <p className="TUTOR-TITANS">
//                     <span className="span">TUTOR</span>

//                     <span className="text-wrapper-3">&nbsp;</span>

//                     <span className="text-wrapper-4">TITANS</span>
//                 </p>

//                 <img className="logo" alt="Logo" src={logo} />
//             </div>
//         </div>
//     );
// };
import React from "react";
import { useNavigate } from "react-router-dom"; // import routes
import logo from "../assets/logo.svg"; // titans logo
import star1 from "../assets/star-1.svg"; // star rating
import "./indexHomePage.css"; // HomePage.css
import tutorcard1PersonaPhoto from "../assets/tutorcard-1-persona-photo.png"; // tutor 1 photo
import tutorcard2PersonaPhoto from "../assets/tutorcard-2-persona-photo.png"; // tutor 2 photo
import tutorcard3PersonaPhoto from "../assets/tutorcard-3-persona-photo.png"; // tutor 3 photo
import { useAuth } from "../context/auth";

export const Home = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/studentlogin");
  };
  const signup = () => {
    navigate("/studentsignup");
  };
  //const [auth, setAuth] = useAuth();
  return (
    <div className="home">
      {/*<pre>{JSON.stringify(auth, null, 4)}</pre>*/}
      <div className="div">
        <div className="tutorcard">
          <img
            className="tutorcard-persona"
            alt="Tutorcard persona"
            src={tutorcard1PersonaPhoto}
          />

          <div className="tutorcard-quote">
            <p className="my-goal-is-to-build">
              <span className="text-wrapper">
                “My goal is to build relationships with each student that I come
                across utilizing my empathy, emotion, and values shared in my
                work.”
              </span>
            </p>
          </div>

          <div className="tutorcard-rating">
            <div className="rating">
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="text-wrapper-2">4/5</div>
          </div>
        </div>

        <div className="tutorcard-2">
          <img
            className="tutorcard-persona"
            alt="Tutorcard persona"
            src={tutorcard2PersonaPhoto}
          />

          <div className="tutorcard-quote">
            <p className="my-goal-is-to-build">
              <span className="text-wrapper">
                “My goal is to build relationships with each student that I come
                across utilizing my empathy, emotion, and values shared in my
                work.”
              </span>
            </p>
          </div>

          <div className="tutorcard-rating">
            <div className="rating">
              <img className="star" alt="Star" src={star1} />
            </div>

            <div className="text-wrapper-2">4/5</div>
          </div>
        </div>

        <div className="tutorcard-3">
          <img
            className="tutorcard-persona"
            alt="Tutorcard persona"
            src={tutorcard3PersonaPhoto}
          />

          <div className="tutorcard-quote">
            <p className="my-goal-is-to-build">
              <span className="text-wrapper">
                “My goal is to build relationships with each student that I come
                across utilizing my empathy, emotion, and values shared in my
                work.”
              </span>
            </p>
          </div>

          <div className="tutorcard-rating">
            <div className="rating">
              <img className="star" alt="Star" src={star1} />
            </div>

            <div className="text-wrapper-2">4/5</div>
          </div>
        </div>

        {/* <div className="how-it-works">HOW IT WORKS</div> */}

        {/* <p className="simple-steps">Simple steps to get started</p> */}

      


        <div className="text-wrapper-7">Meet Our Tutors</div>

        <p className="text-wrapper-8">
          We are here to help, in any way that the Tutor Titans can!
        </p>

        <p className="learning-made-simple">
          <span className="tutor-learning-success-texts">Learning </span>

          <span className="other-title-text">
            Made Simple
            <br />
          </span>

          <span className="tutor-learning-success-texts">Success </span>

          <span className="other-title-text">
            Made Possible
            <br />
          </span>
        </p>

        <div className="Sign-Up-Button">
          <div className="signup-text">Sign Up</div>
          <button className="signup-text" onClick={signup}>
            Sign Up
          </button>
        </div>

        <div className="Login-Button">
          <div className="login-text">Login</div>
          <button className="login-text" onClick={login}>
            Login
          </button>
        </div>

        <img className="logo" alt="Logo" src={logo} />

        <p className="TUTOR-TITANS">
          <span className="tutor-learning-success-texts">TUTOR</span>

          <span className="text-wrapper-12">&nbsp;</span>

          <span className="other-title-text">TITANS</span>
        </p>
      </div>
    </div>
  );
};
