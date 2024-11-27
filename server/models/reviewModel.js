import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    tutorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true},
    dateWritten: {type: Date, default: Date.now, required: true},
    reviewContent: {type: String, required: true},
    rating: {type: Number, required: true, min: 1, max: 5}
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;