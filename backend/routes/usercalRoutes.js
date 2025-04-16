import express from "express";
import UserWorkout from "../models/Workout.js";

const router = express.Router();

// Route to save user's workout data (marked dates for a specific month)
router.post("/save-workout", async (req, res) => {
  const { email, year, month, markedDates } = req.body;

  try {
    let userWorkout = await UserWorkout.findOne({ email, year, month });

    if (userWorkout) {
      // If data already exists, update the marked dates
      userWorkout.markedDates = Array.from(new Set([...userWorkout.markedDates, ...markedDates])).sort((a, b) => a - b);
    } else {
      // If data doesn't exist, create a new record
      userWorkout = new UserWorkout({ email, year, month, markedDates });
    }

    await userWorkout.save();
    res.status(200).json({ message: "Workout saved successfully!", userWorkout });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save workout data" });
  }
});

// Route to get previously saved workouts for a specific user
// Change the route to capture email as a URL parameter
// Route to get previously saved workouts for a specific user
router.get("/get-workouts/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const workouts = await UserWorkout.find({ email }).sort({ year: -1, month: -1 });
    res.status(200).json({ workouts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch workout data" });
  }
});
// Backend: Remove a marked workout date
router.post('/unmark-workout', async (req, res) => {
  const { email, year, month, day } = req.body;

  try {
    const existingWorkout = await UserWorkout.findOne({ email, year, month });

    if (!existingWorkout) {
      return res.status(404).json({ message: 'Workout record not found' });
    }

    existingWorkout.markedDates = existingWorkout.markedDates.filter(d => d !== day);

    await existingWorkout.save();

    res.status(200).json({ message: 'Workout date unmarked', updated: existingWorkout.markedDates });
  } catch (error) {
    console.error('Error unmarking workout:', error);
    res.status(500).json({ message: 'Failed to unmark workout' });
  }
});


export default router;
