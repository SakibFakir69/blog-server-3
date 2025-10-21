"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
console.log("start");
app.get("/", (req, res) => {
    res.json({ message: "✅ Backend is running successfully!" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
