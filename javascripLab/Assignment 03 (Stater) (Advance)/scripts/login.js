"use strict";
// chức năng login

const Login = document.getElementById("btn-submit");
const inputPassword = document.getElementById("input-password");
const inputUsername = document.getElementById("input-username");

// bắt sự kiện vào nút login
Login.addEventListener("click", function () {
  //kiểm tra người dùng đã nhập đủ userName và fassword hay chưa
  const isvalidate = validate();
  if (isvalidate) {
    // tìm kiếm trong dữ liệu có user name và password hay không
    const user = userArr.find(
      (item) =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );
    if (user) {
      //nếu user có dữ liêu đúng đang nhập thì
      alert("bạn đăng nhập thành công ");
      saveToStorage("userActive", user); // lưu dũ liệu user
      // chuyển hướng về trang chủ
      window.location.assign("../index.html");
    } else {
      alert("tài khoản/mật khẩu nhập không chính sát, vui lòng kiểm tra lại");
    }
    return user;
  }
});
// kiểm tra user và password
function validate() {
  let isvalidate = true;
  if (inputUsername.value.trim() === "") {
    alert("User name không được để trống");
    isvalidate = false;
  }
  if (inputPassword.value === "") {
    alert("password không được để trống");
    isvalidate = false;
  }
  return isvalidate;
}
