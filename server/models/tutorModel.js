const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    hourlyRate: { type: Number, required: true },
    workHours: { type: Number, default: 0 },
});

module.exports = mongoose.model('Tutor', tutorSchema);