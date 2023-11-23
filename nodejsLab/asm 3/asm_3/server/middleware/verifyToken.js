import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import { createError } from "./error.js";

// verify token
export const verifyToken = (req, res, next) => {
  console.log("************************************************");
  const authHeader = req.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  console.log("authheaer");
  console.log(authHeader);
  console.log("token");
  console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log("user");
    console.log(user);
    if (err) return next(createError(403, "Token is not valid!"));
    User.findById(user._id).then((a) => {
      console.log("timf thay user");
      console.log(a);
      req.user = a;
      next();
    });
  });
};

// verify user
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyCounselors = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "counselors" || req.user.role === "admin") {
      next();
    } else return res.status(403).json("You are not authorized!");
  });
};

// verify admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
