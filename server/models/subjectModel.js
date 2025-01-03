import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema({
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: "Subject", //references to subjects model id ! 
        required: true
      },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("subjects", subjectsSchema);