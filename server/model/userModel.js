const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter Your Name"],
    maxLength: [25, "Name should not exceed 25 charaters"],
    minLenght: [4, "name charaters shloud more that 4 charaters"],
  },
  email: {
    type: String,
    required: [true, "please Enter Your Email"],
  },
  password: {
    type: String,
    required: [true, "please Enter your Password"],
    minLenght: [8, "password should be greater than 8 characters"],
    select: false,
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,}
});


// -------JWT token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
