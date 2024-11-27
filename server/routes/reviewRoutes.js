import express from 'express';
import { addReview } from '../controllers/reviewController.js'; // Import controller

const router = express.Router();

// POST route to add a review
router.post('/', addReview);

export default router;