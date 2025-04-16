import express from "express";
import UserDetails from "../models/UserDetails.js";

const router = express.Router();

// ✅ Save or update user details
router.post("/save", async (req, res) => {
  const { email, height, weight, bmi, name,age } = req.body;
  try {
    const user = await UserDetails.findOneAndUpdate(
      { email },
      { height, weight, bmi, name,age },
      { new: true, upsert: true } // Upsert ensures new data is created if the user doesn't exist
    );
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Fetch user details by email
router.get("/:email", async (req, res) => {
  try {
    const user = await UserDetails.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
