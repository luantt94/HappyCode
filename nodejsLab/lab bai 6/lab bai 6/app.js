const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let users = []; // Khai báo một mảng để chứa danh sách các user

// Tạo POST route để thêm một user mới vào danh sách users
app.post("/users", (req, res) => {
  const newUser = { name: req.body.name };
  users.push(newUser);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.send(users); // Trả về danh sách users
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
