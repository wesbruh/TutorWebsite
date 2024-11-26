// reviewController.js
import Review from '../models/reviewModel.js';

// Controller to add a new review
export const addReview = async (req, res) => {
    try {
        const { userId, tutorId, reviewContent, rating } = req.body;

        // Validation
        if (!userId || !tutorId || !content || !rating) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
        }

        // Create a new review
        const newReview = new Review({
            userId,
            tutorId,
            reviewContent,
            rating,
        });

        // Save to database
        const savedReview = await newReview.save();

        res.status(201).json(savedReview);
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};