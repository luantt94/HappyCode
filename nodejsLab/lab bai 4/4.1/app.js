const express = require("express");
// Khai báo biến express sử dụng module "express" của Node.js để tạo ra một ứng dụng web sử dụng framework Express.
const app = express();
//  Tạo một đối tượng express app để xử lý các request và response trong ứng dụng.

//  Xử lý tất cả các request đến địa chỉ "/" bằng hàm middleware (hàm trung gian) với hàm console.log() in ra chuỗi "this always runs!" và chuyển tiếp request cho middleware tiếp theo.
app.use("/", (req, res, next) => {
  console.log("this alway runs!");
  next();
});

//  Xử lý tất cả các request đến địa chỉ "/users" bằng hàm middleware với hàm console.log() in ra chuỗi "UsersPage" và trả về HTML content "<p>The Middleware that handles just /users</p>" cho client.
app.use("/users", (req, res, next) => {
  console.log("UsersPage");
  res.send("<p>The Middleware that handles just /users</p>");
});

app.use("/", (req, res, next) => {
  console.log("homepage");
  res.send("<p>The Middleware that handles just </p>");
});

app.listen(3001);
