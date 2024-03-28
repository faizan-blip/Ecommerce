const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String },
    accountId: { type: String },
    provider: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
