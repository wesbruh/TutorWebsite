import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amountDue: {type: Number, required: false}
});

export default mongoose.model('Student', studentSchema);