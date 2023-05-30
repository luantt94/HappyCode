"use strict";

// kích hoạt các chức năng khi đăng nhập
const arrActive = getFromStorage("userActive");

if (userActive) {
  getDataNews("us", 1, arrActive.category, arrActive.pagesize);
  // hiển thị bài viết
  const container = document.getElementById("news-container");
  const prev = document.getElementById("btn-prev");
  const next = document.getElementById("btn-next");
  const num = document.getElementById("page-num");

  let totalResults = 0;
  //
  async function getDataNews(country, page, category, pageSize) {
    try {
      // liên kết với dữ liệu
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&category=${category}&apiKey=4228f3b0031b4dc1a273f00e711d99e1`
      );
      const data = await res.json();

      // gọi hàm để hiển thị list News
      displayNewList(data);

      // bắt lỗi
    } catch (err) {
      alert("đã bị lỗi");
    }
  }
  //bắt sự kiện khi nhấn vào nút next
  next.addEventListener("click", function () {
    getDataNews(
      "us",
      ++num.textContent,
      arrActive.category,
      arrActive.pagesize
    );
  });

  //bắt sự kiện khi nhấn vào nút prev
  prev.addEventListener("click", function () {
    getDataNews(
      "us",
      --num.textContent,
      arrActive.category,
      arrActive.pagesize
    );
  });

  function displayNewList(data) {
    totalResults = data.totalResults;
    checkPrev();
    checkNext();
    let html = ""; // tạo một chuỗi rỗng , để các new hiển thị
    data.articles.forEach(function (data) {
      html += `
        <div class="card flex-row flex-wrap">
        <div class="card mb-3" style="">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${data.urlToImage}" class="card-img"
                        alt="img
                        ">
                </div>
                <div class="col-md-8">
                    <div class="card flex-row flex-wrap" c >
                        <div class="card-img" class="p-4 p-md-5 pt-5">
                            
                        </div>
                            
                            <div  class="card-body">
                            <h4  class="card-title"> ${data.title}</h4>
                            <p class="card-text"> ${data.description}</p>
                            
                                <a href="${data.url}" target="_blank" class="btn btn-primary" >View</a>
                            
                            </div>
                     </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    container.innerHTML = html;
  }

  //  kiểm tra và ẩn nút prev
  function checkPrev() {
    if (num.textContent == 1) {
      prev.style.display = "none";
    } else {
      prev.style.display = "block";
    }
  }

  // kiểm tra và ẩn nút next
  function checkNext() {
    if (num.textContent == Math.ceil(totalResults / userActive.pagesize)) {
      next.style.display = "none";
      console.log(userActive.pagesize);
    } else {
      next.style.display = "block";
    }
  }
} else {
  alert("vui lòng đăng nhập vào tài khoản");
  window.location.assign("../index.html");
}
