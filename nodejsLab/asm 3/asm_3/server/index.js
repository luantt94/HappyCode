import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";

const app = express();
// app.use(cors())
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/products", productsRoute);
app.use("/users", usersRoute);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoose");
  } catch (error) {
    console.log("error while connecting mongoose");
    console.log(error);
  }
};

app.listen(5000, () => {
  connect();
  console.log("run run");
});
