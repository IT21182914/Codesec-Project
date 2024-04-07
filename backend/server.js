const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors middleware
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", recipeRoutes); // Use the recipe routes

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB successfully connected 🍃"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer is running on port ${PORT} 🔥`));
