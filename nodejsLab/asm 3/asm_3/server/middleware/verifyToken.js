import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import { createError } from "./error.js";

// Tạo hàm verify token
export const verifyToken = (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  // Thay thế process.env.ACCESS_TOKEN_SECRET bằng giá trị cụ thể
  const secret = "Y38fH7gO9P";

  jwt.verify(token, secret, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));

    User.findById(user._id).then((res) => {
      req.user = res;
      next();
    });
  });
};

// Các hàm verify user, verify counselors và verify admin sẽ được giữ nguyên.
// Đảm bảo rằng chỉ thay đổi ACCESS_TOKEN_SECRET trong hàm verifyToken.

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
