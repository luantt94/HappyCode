"use strict";
const inputFirstname = document.querySelector("#input-firstname");
const inputLastname = document.querySelector("#input-lastname");
const inputUsername = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const Sumbit = document.getElementById("btn-submit");

// Bắt sự kiện khi nhấn nút register
Sumbit.addEventListener("click", function () {
  // lấy các dữ liệu từ người dùng nhập vào
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  // kiểm tra và đẩy dữ liệu user lên Storage
  const isvalidate = validate(user);

  if (isvalidate) {
    // thêm user vào mảng userArr
    userArr.push(user);

    saveToStorage("userArr", userArr); // cập nhật lại dữ liệu
    alert(" đăng ký thành công ");

    // điều hướng sang trang login
    window.location.href = "../pages/login.html";
  }
});

////
// validate thông tin đăng ký của người dùng khi nhập vào form
// trả về true nếu hợp lệ và false nếu không hợp lệ
function validate(user) {
  let isvalidate = true;
  //kiểm tra thông tin không được để trống
  if (user.firstname.trim().length === 0) {
    alert("vui lòng nhập first name");
    isvalidate = false;
  }
  if (user.lastname.trim().length === 0) {
    alert("vui lòng nhập lastname");
    isvalidate = false;
  }
  if (user.username.trim().length === 0) {
    alert("vui lòng nhập user");
    isvalidate = false;
  }

  // điều kiện để đặt mật khẩu
  if (user.password.length < 8) {
    alert("mật khẩu phải có ít nhất 8 ký tự");
    isvalidate = false;
  }
  if (user.password !== inputPasswordConfirm.value) {
    alert(" password phải trùng với Password Confirm ");
    isvalidate = false;
  }
  // kiểm tra user name
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === user.username) {
      alert(`đã tồn tại tài khoản ${user.username}`);
      isvalidate = false;
    }
  }
  return isvalidate;
}
