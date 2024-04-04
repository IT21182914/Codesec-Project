const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected 🍃"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer is running on port ${PORT} 🔥`));
