import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
const app = express();


dotenv.config();
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connect mongoose");
  } catch (error) {
    console.log("error");
  }
};

app.listen(5000, () => {
  connect();
  console.log("run run");
});
