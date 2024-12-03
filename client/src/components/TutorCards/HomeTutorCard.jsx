import React from 'react';
import "./HomeTutorCard.css";

export const HomeTutorCard = ({
    imgSrc, 
    imgAlt,
    title,
    subject,
    rating,
    description,
}) => {
    return (
        <div className="homecard-container">
            <img src={imgSrc} alt={imgAlt} className="hometutor-card-img" />
            {title && <h1 className="hometutor-card-title">{title}</h1>}
            <h2 className="hometutor-card-h2"> 
                <span className="hometutor-card-subject">{subject}</span>
                <span className="hometutor-card-rating">{rating}</span>
            </h2>
            {description && <p className="hometutor-card-description">{description}</p>}
        </div>
    );
};
