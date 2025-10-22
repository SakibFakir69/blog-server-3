

import dotenv from 'dotenv'
dotenv.config();
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import cors from "cors";
import { userRouter } from './modules/users/user.route';
import { authRouter } from './modules/auth/auth.route';
import { projectRouter } from './modules/project/project.route';

// import "types/express";



const app = express();


app.use(
  cors({
    origin: 'https://blog-ui-rosy.vercel.app'  ,// frontend URL

     credentials: true, // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow all HTTP methods

    allowedHeaders: ["Content-Type", "Authorization"], // allow headers
  })
);

app.use(express.json());
app.use(cookieParser()); // 



app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", projectRouter);
app.use('/api/v1/blog')

app.get("/", (req:Request, res:Response) => {
  res.json({ message: "✅ Backend is running successfully!" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
