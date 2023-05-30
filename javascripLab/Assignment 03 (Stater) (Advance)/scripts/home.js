"use strict";
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const Logout = document.getElementById("btn-logout");

displayhome();

// hiển thị nội dung trang home tên đang đăng nhập

function displayhome() {
  console.log(userActive);
  // nếu đã đăng nhập thì ẩn 'loginModal' và hiển thị 'maincontent'
  if (userActive) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";
    // thêm thông báo welcomeMessage
    welcomeMessage.textContent = `Welcome ${userActive.firstname}`;
    // nếu chưa đang nhập thì ẩn 'maincontent' và hiển thị 'loginmodal'
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}
// chức năng log out
Logout.addEventListener("click", function () {
  const isLogout = confirm("bạn có muốn Logout không ?");
  if (isLogout) {
    // gán userActive về null để biểu thị chưa có ai đăng nhập
    userActive = null;
    // cập nhật dữ liêu xuong locaStorage
    saveToStorage("userActive", userActive);
    // hiển thị lại trang home
    displayhome();
  }
});
