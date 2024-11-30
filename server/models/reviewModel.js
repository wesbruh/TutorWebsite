import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    //userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    //tutorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true},
    //dateWritten: {type: Date, default: Date.now, required: true},
    author: {type: String, required: true},
    tutor: {type: String, required: true},
    content: {type: String, required: true},
    rating: {type: Number, required: true, min: 1, max: 5}
}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;