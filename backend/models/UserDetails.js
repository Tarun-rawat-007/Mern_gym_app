import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  height: { type: Number },
  weight: { type: Number },
  bmi: { type: Number },
  name: { type: String },
  age: { type: Number },
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

export default UserDetails;
