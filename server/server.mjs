import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "./loadEnviroment.mjs";
// import db from "./db/conn.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

import authRoutes from "./routes/authe.mjs";
app.use("/api/authe", authRoutes);

mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
