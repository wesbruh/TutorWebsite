import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    hourlyRate: { type: Number, required: true },
    workHours: { type: Number, default: 0 },
    subject: {type: String, required: true},
    available: {type: Boolean, required: true},
    slots_booked: {type:Object, default:{}},
    createdAt: {type: Date}
}, { minimize:false })

const Tutor = mongoose.models.tutor || mongoose.model('Tutor', tutorSchema);

export default Tutor;