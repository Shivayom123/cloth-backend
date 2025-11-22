const mongoose = require("mongoose");  // <-- YOU FORGOT THIS LINE

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  mobileNumber: { type: String, required: true }
,

  gstNumber: { type: String },

  city: { type: String, required: true },
  state: { type: String, required: true },

  password: { type: String, required: true },   // hashed password only

  otp: { type: String },

  resetOtp: { type: String },
  resetOtpExpiry: { type: Date },

  isOtpVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
