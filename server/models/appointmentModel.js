import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tutors',
    required: true
  },
  tutorName: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes (e.g., 60 for 1 hour)
    default: 60
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    default: 'scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('appointments', AppointmentSchema);