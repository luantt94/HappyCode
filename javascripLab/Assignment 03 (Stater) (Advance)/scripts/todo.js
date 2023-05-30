"use strict";
// kích hoạt khi đăng nhập
if (userActive) {
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputtask = document.getElementById("input-task");
  displayTodoList();
  // hiển thị các thông tin danh sách todo (todo list )
  function displayTodoList() {
    let html = "";
    // từ mảng todo arr lọc  ra các todo (task)
    todoArr
      .filter((todo) => todo.owner == userActive.username)
      //lọc ra tên user name người tạo ra task , username sẽ lấy theo user hiện đang login vào hệ thống
      .forEach((todo) => {
        //duyệt mảng todoarr rồi in ra
        html += `
    <li  class=${todo.isdone ? "checked" : ""}>${
          todo.task
        }<span class="close">×</span></li>`;
      });
    todoList.innerHTML = html;

    // bắt các sự kiện
    eventToggleTasks();
    DeleteTask();
  }
  //  bắt sự kiện khi click vào Add
  btnAdd.addEventListener("click", function () {
    //kiểm tra người dùng đã nhập hay chưa
    if (inputtask.value.trim().length === 0) {
      alert("vui lòng nhập vào trường này ");
    } else {
      const task = new Task(inputtask.value, userActive.username, false);
      //push task mới vào mảng
      todoArr.push(task);
      // lưu dữ liệu
      saveToStorage("todoTask", todoArr);

      // gọi hàm để hiển thị
      displayTodoList();
      // reset dữ liệu từ form nhập
      inputtask.value = ""; // reset dữ liêu từ form nhập
    }
  });

  // bắt sự kiện toggle tasks
  function eventToggleTasks() {
    // lấy tất cả các phân tử li chứa các thông tin của các task cà bắt sự kiện click trên từng phần tử li
    document.querySelectorAll("#todo-list li").forEach(function (li) {
      // thêm sự kiện vào các danh dách lilog
      li.addEventListener("click", function (e) {
        console.log("đã click");
        // tránh nút delete để không bị chồng sự kiện khi ấn nút delete
        if (e.target !== li.children[0]) {
          li.classList.toggle("checked");

          // tim task vừa click vào toggle
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === userActive.username &&
              todoItem.task === li.textContent.slice(0, -1)
          );
          // thay đổi thuộc tính is done
          todo.isdone = li.classList.contains("checked") ? true : false;
          saveToStorage("todoTask", todoArr);
        }
      });
    });
  }

  function DeleteTask() {
    // xóa task ra khỏi dữ liệu
    document.querySelectorAll("#todo-list .close").forEach(function (close) {
      close.addEventListener("click", function (e) {
        console.log("đã click");
        const isdelete = confirm("Bạn Chắc Chắn muốn xóa chứ?");
        if (isdelete) {
          const index = todoArr.findIndex(
            (item) =>
              item.owner === userActive.username &&
              item.task === close.parentElement.textContent.slice(0, -1)
          );
          // xóa task đó ra khỏi mảng
          todoArr.splice(index, 1);
          saveToStorage("todoTask", todoArr);
          //hiển thị lại list todo
          displayTodoList();
        }
      });
    });
  }
} else {
  alert("vui lòng đăng nhập vào tài khoản");
  window.location.assign("../index.html");
}
