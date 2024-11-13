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
import { useNavigate } from 'react-router-dom';                                     // import routes
import logo from "../assets/logo.svg";                                              // titans logo
import succeedIcon from "../assets/succeedIcon.svg";                                // succeedIcon image of succeed card
import star1 from "../assets/star-1.svg";                                           // star rating
import "./indexHomePage.css";                                                       // HomePage.css
import scheduleIcon from "../assets/scheduleIcon.svg";                              // schedule icon
import tutorcard1PersonaPhoto from "../assets/tutorcard-1-persona-photo.png";       // tutor 1 photo
import tutorcard2PersonaPhoto from "../assets/tutorcard-2-persona-photo.png";       // tutor 2 photo
import tutorcard3PersonaPhoto from "../assets/tutorcard-3-persona-photo.png";       // tutor 3 photo
import signUpCardIcon from "../assets/signUpCardIcon.svg";                          // part of 
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

                <div className="how-it-works">HOW IT WORKS</div>

                <p className="simple-steps">Simple steps to get started</p>

                <div className="signup-card">
                    <div className="overlap">
                        <div className="text-wrapper-4">Sign Up</div>

                        <p className="p">
                            Start your educational journey by creating an account today!
                        </p>

                        <div className="signup-card-icon">
                            <img className="signUpCardIcon" alt="signUpCardIcon" src={signUpCardIcon} />
                        </div>
                    </div>
                </div>

                <div className="schedule-card">
                    <div className="overlap">
                        <p className="schedule">
                            <span className="span">Schedule</span>

                            <span className="text-wrapper-5">&nbsp;</span>
                        </p>

                        <p className="p">
                            Choose a time that works for you and book your appointment with
                            our experienced tutors!
                        </p>

                        <div className="schedule-card-icon">
                            <img className="scheduleIcon" alt="scheduleIcon" src={scheduleIcon} />
                        </div>
                    </div>
                </div>

                <div className="succeed-card">
                    <div className="overlap">
                        <p className="p">
                            Complete your session, gain confidence, and excel in your studies!
                        </p>

                        <div className="text-wrapper-6">Succeed</div>

                        <div className="succeedIcon">
                            <img className="succeedIcon" alt="succeedIcon" src={succeedIcon} />
                        </div>
                    </div>
                </div>

                <div className="text-wrapper-7">Meet Our Tutors</div>

                <p className="text-wrapper-8">
                    We are here to help, in any way that the Tutor Titans can!
                </p>

                <p className="learning-made-simple">
                    <span className="text-wrapper-9">Learning </span>

                    <span className="text-wrapper-10">
                        Made Simple
                        <br />
                    </span>

                    <span className="text-wrapper-9">Success </span>

                    <span className="text-wrapper-10">
                        Made Possible
                        <br />
                    </span>
                </p>

                <div className="Sign-Up-Button">
                    <div className="signup-text">Sign Up</div>
                    <button className="signup-text" onClick={signup}>Sign Up</button>
                </div>

                <div className="Login-Button">
                    <div className="login-text">Login</div>
                    <button className="login-text" onClick={login}>Login</button>
                </div>


                <img className="logo" alt="Logo" src={logo} />

                <p className="TUTOR-TITANS">
                    <span className="text-wrapper-9">TUTOR</span>

                    <span className="text-wrapper-12">&nbsp;</span>

                    <span className="text-wrapper-10">TITANS</span>
                </p>
            </div>
        </div>
    );
};
