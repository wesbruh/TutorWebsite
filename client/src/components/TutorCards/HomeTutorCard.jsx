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
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="tutor-card-img" />
            {title && <h1 className="tutor-card-title">{title}</h1>}
            <h2 className="tutor-card-h2"> 
                <span className="tutor-card-subject">{subject}</span>
                <span className="tutor-card-rating">{rating}</span>
            </h2>
            {description && <p className="tutor-card-description">{description}</p>}
        </div>
    );
};
