import React from 'react';
import "./ReviewTutorCard.css";
//import tutorcard1PersonaPhoto from '../images/tutorcard-1-persona-photo.png';
//USE THIS -> "../../assets/tutorcard-1-persona-photo.png"
export const ReviewTutorCard = ({ tutor }) => {
    
    return (
        <div className="card-container">
            {/*<img src={tutorcard1PersonaPhoto} alt={imgAlt} className="tutorcard1-img" />*/}
            <h2 className="tutor1card-title">{tutor.name}</h2>
            <h2 className="tutor1card-subject">{tutor.subjectName}</h2>
            <h2 className="tutorcard1-description">{tutor.bio}</h2>
        </div>
    );
};

export default ReviewTutorCard;