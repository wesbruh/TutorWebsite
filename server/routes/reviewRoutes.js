import express from 'express';
import { addReview, getReviews } from '../controllers/reviewController.js'; // Import controller

const router = express.Router();


// POST route to add a review
router.post('/', addReview);

router.get('/', getReviews);

export default router;