import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";

import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";
import cartsRoute from "./routes/carts.js";

const app = express();
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
dotenv.config();
app.use(express.json());
// app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/products", productsRoute);
app.use("/users", usersRoute);
app.use("/carts", cartsRoute);

//! Connect-Mongodb-Session
const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGO,
  collection: "session",
});

//* Catch errors
store.on("error", (error) => {
  console.log(error);
});
store.on("connected", () => {
  console.log("Connected to mongodb-session ");
});

//* Express-Session
app.use(
  session({
    secret: "This is a secret",
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

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
