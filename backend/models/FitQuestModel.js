import mongoose from "mongoose";

const FitQuestSchema = new mongoose.Schema({
  email: { type: String, required: true },
  timer: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  tasksCompleted: { type: Number, required: true },
  totalTasks: { type: Number, required: true },
  rank: { type: String, required: true },
  suggestion: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FitQuest = mongoose.model("FitQuest", FitQuestSchema);
export default FitQuest;
