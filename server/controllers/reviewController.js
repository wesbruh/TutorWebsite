// reviewController.js
//import { Reviews } from 'emotion-icons/material';
import Review from '../models/reviewModel.js';

// Controller to add a new review
export const addReview = async (req, res) => {
    const { author, tutor, content, rating } = req.body; // Declare the individual fields as the req.body.
    // Validation
    if (!author || !tutor || !content || !rating) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
    }
    // Set a new review with the valid fields.
    const newReview = new Review({ author, tutor, content, rating });
    // Try to save the review.
    try {
        await newReview.save();
        res.status(201).json({ sucess: true, data: newReview });
    } catch (error) {
        console.error('Error saving review:', error.message);
        res.status(500).json({ sucess: false, message: 'Server error. Please try again later.' });
    }
};
// Controller to get all reviews. 
export const getReviews = async (req, res) => {
    // Try to get all reviews.
    try {
        const reviews = await Review.find({});
        res.status(200).json({ success: true, data: reviews });
    } catch (error) {
        console.log("Error in fetching reviews.", error.message);
        res.status(500).json({ success: false, message: "Sever error methinks."})
    }
}