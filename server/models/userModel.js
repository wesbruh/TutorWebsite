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
      required: function () {
        return !this.googleId; // Password is required only if googleId is not present
      },
    },
    role: {
      type: String,
      enum: ["student", "tutor"],
      required: true,
    },
      /*no need for bio or profile picture*/

    answer: {
      type: String,
      required: function () {
        return !this.googleId; // Password is required only if googleId is not present
      },
    },
    googleId: { type: String, unique: true },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
