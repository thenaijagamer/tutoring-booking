import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "./loadEnviroment.mjs";
import authRoutes from "./routes/authe.mjs";

import authMiddleware from "./middleware/auth.mjs";
import profileRoutes from "./routes/profile.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// route
app.use("/api/users", authRoutes);
app.use("/api/profile", authMiddleware, profileRoutes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default db;
