import mongoose from "mongoose";

const userWorkoutSchema = new mongoose.Schema({
  email: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  markedDates: { type: [Number], required: true },
});

export default mongoose.model("UserWorkout", userWorkoutSchema);
