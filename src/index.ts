

import dotenv from 'dotenv'
dotenv.config
import express, { Request, Response } from "express";
import cors from "cors";





const app = express();


app.use(cors());
app.use(express.json());


console.log("start")
app.get("/", (req:Request, res:Response) => {
  res.json({ message: "✅ Backend is running successfully!" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
