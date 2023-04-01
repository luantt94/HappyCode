'use strict';

// thêm Animation khi click vào Sidebar
const navEl = document.getElementById('sidebar');
//bắt sự kiện click
navEl.addEventListener("click", function() {
  this.classList.toggle('active')
})

// hàm lấy giữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


// hàm lưu giữ liệu
function saveToStorage(key, value) {

  localStorage.setItem(key, JSON.stringify(value));
 
}

// ** petArr và breedArr dùng chung nên khai báo tại đây để tranh lặp lại nhiều lần
// kiem tra du lieu localStorage cua petArr, breedArr
const petArr = localStorage.getItem('petArr') ? getFromStorage('petArr') : [];

const breedArr = localStorage.getItem('breedArr')
  ? getFromStorage('breedArr')
  : [];
//////////////////////////////////////////