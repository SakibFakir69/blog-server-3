

import dotenv from 'dotenv'
dotenv.config
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import cors from "cors";
import { userRouter } from './modules/users/user.route';
import { authRouter } from './modules/auth/auth.route';

// import "types/express";



const app = express();


app.use(
  cors({
    origin: ["https://blog-qvx3b2ykl-sakibfakirs-projects.vercel.app","https://blog-5ad23efxt-sakibfakirs-projects.vercel.app",'https://blog-ui-rosy.vercel.app' ] ,// frontend URL

     credentials: true, // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow all HTTP methods

    allowedHeaders: ["Content-Type", "Authorization"], // allow headers
  })
);

app.use(express.json());
app.use(cookieParser()); // 
app.use(express.json());


app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req:Request, res:Response) => {
  res.json({ message: "✅ Backend is running successfully!" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
