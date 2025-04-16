import express from "express";
import FitQuest from "../models/FitQuestModel.js";

const router = express.Router();

// ✅ Store completed FitQuest session
router.post("/save", async (req, res) => {
  try {
    const { email, timer, caloriesBurned, tasksCompleted, totalTasks, rank, suggestion } = req.body;

    if (!email || !timer || !caloriesBurned || !tasksCompleted || !totalTasks || !rank || !suggestion) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFitQuest = new FitQuest({ email, timer, caloriesBurned, tasksCompleted, totalTasks, rank, suggestion });
    await newFitQuest.save();

    res.status(201).json({ message: "FitQuest session saved successfully" });
  } catch (error) {
    console.error("Error saving FitQuest session:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// ✅ Fetch FitQuest sessions for a specific user
router.get("/records", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const records = await FitQuest.find({ email }).sort({ createdAt: -1 });

    // Format the date before sending response
    const formattedRecords = records.map((record) => ({
      ...record._doc,
      createdAt: record.createdAt.toISOString() // Change format as needed
    }));

    res.status(200).json(formattedRecords);
  } catch (error) {
    console.error("Error fetching FitQuest records:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

  // ✅ Delete a FitQuest record by ID
router.delete("/records/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ message: "Record ID is required" });
      }
  
      const deletedRecord = await FitQuest.findByIdAndDelete(id);
  
      if (!deletedRecord) {
        return res.status(404).json({ message: "Record not found" });
      }
  
      res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
      console.error("Error deleting record:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  

export default router;
