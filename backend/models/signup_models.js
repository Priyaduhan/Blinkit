import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: 3,
    max: 20,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    min: 3,
    max: 20,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    unique: true,
    lowercase: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 10,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    enum: ["Hisar", "Gurugram", "Delhi", "Noida"],
    default: "default",
  },
  state: {
    type: String,
    enum: ["Haryana", "Punjab ", "Uttarakhand", "Hyderabad"],
    default: "default",
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    // default: "user",
  },
});

export const SignupUser = mongoose.model("signupuser", userSchema);
