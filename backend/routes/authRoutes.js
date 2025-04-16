/* eslint-disable no-undef */
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";  //authentication +autarization
import User from "../models/user.js";  // Ensure this file exists

const router = express.Router();

// 🟢 Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);   //adding salt to paswsword
        const hashedPassword = await bcrypt.hash(password, salt);//secure password by hasing 

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        console.log(error)
    }
});

// 🟢 Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log("🔍 Incoming Request Body:", req.body); // ✅ Debugging

        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);                  //cpiompare bycrypt password
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        console.log(error)
    }
});

export default router;
