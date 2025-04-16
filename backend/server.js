/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // Import user routes
import fitQuestRoutes from "./routes/fitQuestRoutes.js";
import usercalRoutes from './routes/usercalRoutes.js'
dotenv.config();
connectDB();// database connection

const app = express();

// ✅ Enable CORS for frontend (http://localhost:5173)
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true, // Allow cookies if needed
    })
  );
// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);//LOGIN SIGU UP
app.use("/api/user", userRoutes); // Add SETTING USER INFO DASHBOARD
app.use("/api/fitquest", fitQuestRoutes);
app.use("/api/user", usercalRoutes);



// ✅ Debugging: Check if the server is receiving requests
app.get("/", (req, res) => {
  res.send("Server is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
  