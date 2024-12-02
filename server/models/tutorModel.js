import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    hourlyRate: { type: Number, default: 20 },
    workHours: { type: Number, default: 0 },
    amountDue: { type: Number, default: 0 },
    subjectName: {type: String, default: "Math" },
    subjectId: {type: mongoose.Schema.Types.ObjectId, ref: 'subjects', default: '6747f8357c930e91c52e6c57' },
    availableTimes: { type: [Date], default: [] },
    bookedAppointments: [
      {
        date: { type: Date, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        userName: { type: String, required: true },
      }
    ],
    bio: {type: String, default: " "}
});

export default mongoose.model('tutors', tutorSchema);
