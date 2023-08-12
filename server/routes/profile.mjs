import express from "express";
import authMiddleware from "../middleware/auth.mjs";
import User from "../models/User.mjs";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    // Use req.user to get the user's ID
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
