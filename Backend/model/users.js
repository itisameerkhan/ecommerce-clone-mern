import mongoose from "mongoose";

// Schema creating for user model
const userModel = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Users = mongoose.model("Users", userModel);
