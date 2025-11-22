const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },

  // Unique email
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },

  mobileNumber: { type: String, required: true },

  gstNumber: { type: String }, // optional

  city: { type: String, required: true },
  state: { type: String, required: true },

  // PASSWORD stored as HASH
  createPassword: { type: String, required: true },
  confirmPassword: { type: String, required: true }, // store hashed password again (same value)

  // OTP during registration
  otp: { type: String },
  isOtpVerified: { type: Boolean, default: false },

  // Forgot password OTP
  resetOtp: { type: String },
  resetOtpExpiry: { type: Date },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
