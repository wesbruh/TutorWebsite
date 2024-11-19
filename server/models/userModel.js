import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "tutor"],
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    profilePicture: {
      type: String, // Store the URL or path
      default: "", // Optional: Provide a default value if needed
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("users", userSchema);
