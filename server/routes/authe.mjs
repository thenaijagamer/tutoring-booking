import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.mjs";

const router = express.Router();

// router.post("/register", async (req, res) => {
//   let newDocument = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   };
//   let collection = await db.collection("users");
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);
// });

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// import db from "../db/conn.mjs";
export default router;
