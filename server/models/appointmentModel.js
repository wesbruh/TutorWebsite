const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
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
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    default: 'scheduled'
  },
  notes: {
    type: String, // Optional notes for the appointment
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);