/* eslint-disable no-undef */
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // ✅ Load .env variables
// console.log("Mongo URI:", process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
