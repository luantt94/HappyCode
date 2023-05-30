"use strict";

// mục này làm trước khi vào mục register để tạo dữ liệu storage
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// hàm lưu giữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// lấy dữ liệu từ localstorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// chuyển đổi về dạng class instance
const userArr = users.map(function (user) {
  return parseUser(user);
}); // trả về 1 mảng chứa các instance của class User

// lấy dữ liệu user đang đăng nhập
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// lấy dữ liệu  từ locaStorage
let todos = getFromStorage("todoTask") ? getFromStorage("todoTask") : [];

// chuyển đổi về dạng class instance
const todoArr = todos.map(function (user) {
  return parseTodoTask(user);
});
saveToStorage("todoTask", todoArr);

// hàm  chuyển từ js object sang class instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );
  return user;
}
function parseTodoTask(taskdata) {
  const user = new Task(taskdata.task, taskdata.owner, taskdata.isdone);
  return user;
}
