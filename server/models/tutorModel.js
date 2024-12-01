import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    hourlyRate: { type: Number, required: false },
    workHours: { type: Number, default: 0 },
    amountDue: { type: Number, required: false },
    subject: {type: String, required: false},
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subjects', required: false },
    availableTimes: { type: [Date], default: [] },
    bookedAppointments: [
      {
        date: { type: Date, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        userName: { type: String, required: true },
      }
    ]
});

export default mongoose.model('Tutor', tutorSchema);

