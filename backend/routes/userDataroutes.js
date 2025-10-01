import express from "express";
import dotenv from "dotenv";

import { getUserData, getallData } from "../controllers/getuserData.js";
import { SignupUser } from "../models/signup_models.js";
import jwt from "jsonwebtoken";
import ensureAuthenticated from "../middlewares/Auth.js";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";
// import User from "./models/signup_models.js";

const router = express.Router();

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET);
};

//route to get the firstname of users stored in db
router.get("/firstname", async (req, res) => {
  try {
    const result = await SignupUser.find({}, { firstName: true, _id: false });
    console.log(result);
    //   res.send({ message: "success" });
    const fetchingFirstname = result.map((item, index) => item.firstName);

    res.json(fetchingFirstname);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// route for dynamic parameters if id matches return that id data

// router.route("/user/:userId").get(getUserData);

// router.patch("/signup/:userId", async (req, res) => {
//   const result = await SignupUser.findByIdAndUpdate(req.params.id, {
//     email: "pria1234@gmail.com",
//   });
//   return res.json({ status: "Success" });
// });
// router.route("/").get(getallData);

//route to update the existing data field value
router.patch("/signup/:userId", async (req, res) => {
  try {
    const signupId = req.params.userId;
    const updatedData = req.body;
    const updatedSignupData = await SignupUser.findByIdAndUpdate(
      signupId,
      { $set: updatedData },
      { new: true }
    );
    if (!updatedSignupData) {
      return res.status(404).json({ message: "employee id not found" });
    }
    return res.json({
      message: "User updated successfully",
      data: updatedSignupData,
    });
  } catch (error) {
    console.log("error in updating data", error);
    res.status(505).send("Server Error");
  }
});

//route to delete a user from mongodb
router.delete("/signup/:userId", async (req, res) => {
  // const signupId = req.params.userId;
  await SignupUser.findByIdAndDelete(req.params.userId);
  return res.json({ msg: "Success" });
});

//------------route for signup form and save in db-------------------
router.post("/signup", async (req, res) => {
  try {
    const formData = req.body; // Access the form data from req.body
    //   console.log("Received form data:", formData);
    //   console.log("firsName :", formData.firstName);
    //   console.log("email consolded is ", formData.email);
    const result = await SignupUser.create({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contactNumber: formData.contactNumber,
      city: formData.city,
      state: formData.state,
      pinCode: formData.pinCode,
      address: formData.address,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
    });
    console.log(result);
    // const jwt_data = generateToken(result._id);

    //   res.json({ message: "Form data received successfully", data: formData });
    return res.json({ msg: "success data " });
  } catch (error) {
    console.log(error);

    return res.json({ msg: "failed saving data in db" });
  }
});

router.post("/userArray", (req, res) => {
  console.log("fetching array from frontend");
  const userArray = req.body;
  //   console.log(userArray);
  userArray.forEach((item, idx) => {
    console.log(
      `user firstName is : ${item.firstName} and email is: ${item.email}`
    );
  });
  res.json({
    message: "data is shown in backend successfully",
    SendedData: userArray,
  });
});

//route to get the data stored in my mongodb
router.get("/", async (req, res) => {
  const result = await SignupUser.find({});
  res.json({
    status: "ok",
    data: result,
  });
});

// --------------------route for login --------------------------
router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const user = await SignupUser.findOne({ email: email });
  if (!user) return res.json({ data: "No user exist" });
  console.log("User from DB:", user);
  console.log("User role:", user.role); // Check this!
  console.log("User role type:", typeof user.role);
  if (user.password == password) {
    const token = generateToken(user._id, user.email, user.role);

    res.cookie("jwtoken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax", // or "none" if cross-origin
      path: "/",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    // console.log("cookies is ", cookie);

    return res.json({ msg: "success", accessToken: token, role: user.role });
  } else {
    return res.json({ msg: "Password is incorrect" });
  }

  //   const { email, password } = req.body;
  //   await SignupUser.findOne({ email: email })
  //     .then((user) => {
  //       if (user) {
  //         // console.log("user exisit");
  //         console.log(user);
  //         console.log(password);
  //         console.log("user.password is ", user.password);

  //         if (user.password == password) {
  //           return res.json("success");
  //         } else {
  //           return res.json("password is in correct");
  //         }
  //       } else {
  //         return res.json("no user existed");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
});

router.get(
  "/verify",
  ensureAuthenticated,
  authorizeRoles("user", "admin"),
  (req, res) => {
    return res.json({ success: true, user: req.user });
  }
);

// ---------------logout---------------------
router.post("/logout", (req, res) => {
  res.clearCookie("jwtoken", {
    httpOnly: true,
    secure: false, // set true if using https
    sameSite: "lax",
    path: "/",
  });
  return res.json({ success: true, msg: "Logged out" });
});

router.post(
  "/admin",
  ensureAuthenticated,
  authorizeRoles("admin"),
  (req, res) => {
    return res.json({ msg: "success admin render" });
  }
);

router.get("/products", ensureAuthenticated, (req, res) => {
  console.log(req.cookies);

  res.status(200).json([
    {
      name: "mobile",
      price: 2000,
    },
    {
      name: "laptop",
      price: 4000,
    },
  ]);
});

export default router;
