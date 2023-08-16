import express from "express";
const router = express.Router();
import authMiddleware from "../middleware/auth.mjs";
import Booking from "../models/Bookings.mjs";

// Get booking history for the logged-in user
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/history", authMiddleware, async (req, res) => {
  try {
    const { user, subject, date, startTime, endTime } = req.body;
    const newBooking = new Booking({
      user,
      subject,
      date,
      startTime,
      endTime,
    });

    const booking = await newBooking.save();
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
