'use strict';

// thêm Animation khi click vào Sidebar
const navEl = document.getElementById('sidebar');
//bắt sự kiện click
navEl.addEventListener("click", function() {
  this.classList.toggle('active')
})


function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}
