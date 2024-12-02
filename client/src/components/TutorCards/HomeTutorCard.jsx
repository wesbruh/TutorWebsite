import React from 'react';
import "./HomeTutorCard.css";
import tutorcard1PersonaPhoto from "../../assets/tutorcard-1-persona-photo.png"


export const HomeTutorCard = ({
    imgAlt,
    title,
    subject,
    description,
}) => {
    return (
        <div className="card1-container">
            <img src={tutorcard1PersonaPhoto} alt={imgAlt} className="tutorcard1-img" />
            {title && <h1 className="tutor1card-title">{title}</h1>}
            <h2 className="tutor1card-subject">{subject}</h2>
            {description && <p className="tutorcard1-description">{description}</p>}
        </div>
    );
};
