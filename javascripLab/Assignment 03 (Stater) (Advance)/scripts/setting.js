"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const saveSetting = document.getElementById("btn-submit");

saveSetting.addEventListener("click", function () {
  if (validate()) {
    // cập nhật lại userActive
    userActive.pagesize = Number.parseInt(inputPageSize.value);
    userActive.category = inputCategory.value;
    saveToStorage("userArr", userArr);
    // find index dùng để tìm kiếm index username đã đăng nhập

    // cập nhật lại mảng use
    const index = userArr.findIndex(
      (item) => item.username === userActive.username
    );

    userArr[index] = userActive;
    saveToStorage("userActive", userActive);

    // reset lại form đăng nhập và thông báo cài đặt thành công
    alert("successful");
    inputPageSize.value = "";
    inputCategory.value = "General";
  }
});
function validate() {
  let isvalidate = true;
  if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
    alert(" page không hơp lệ");
    isvalidate = false;
  }
  if (inputCategory.value === "General") {
    alert("thuộc tính không hợp lệ");
    isvalidate = false;
  }
  return isvalidate;
}
