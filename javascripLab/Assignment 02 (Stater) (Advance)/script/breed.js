'use strict';

// const breedNameInput = document.getElementById('input-breed');
// const breedTypeInput = document.getElementById('input-type');
// const submitBtn = document.getElementById('submit-btn');
// const tbody = document.getElementById('tbody');

// /////////////////FUNCTION /////////////////////////////////
// // hien thi bang breed
// function renderBreedTable() {
//   tbody.innerHTML = '';
//   breedArr.forEach((breed, i) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//           <td scope="col">${++i}</td>
//           <td scope="col">${breed.name}</td>
//           <td scope="col">${breed.type}</td>
//           <td scope="col">
//               <button class="btn btn-danger" onclick="deleteBreed('${
//                 breed.name
//               }')">Delete</button>
//           </td>
//       `;
//     tbody.appendChild(row);
//   });
// }

// // reset form
// function clearInput() {
//   breedNameInput.value = '';
//   breedTypeInput.value = 'Select Type';
// }

// // Kiem tra du lieu nhap ap && thong bao loi neu co
// function validateBreed(data) {
//   if (data.name.trim() === '') {
//     alert('Input Breed can not be blank');
//     return false;
//   }
//   if (data.type === 'Select Type') {
//     alert('Please select Type!');
//     return false;
//   }
//   // ! kiem tra Unique của breed nếu trùng thì không thêm vào breedArr
//   const checkArr = breedArr.filter(breed => breed.type === data.type);
//   for (let i = 0; i < checkArr.length; i++) {
//     if (checkArr[i].name === data.name) {
//       alert('Breed không được trùng');
//       // Nếu breed name trùng thì dùng vòng lặp
//       return false;
//     }
//   }
//   return true;
// }
// //////////////////////////////////////////
// // 3. Chức năng: Quản lý Breed
// // Nhap du lieu
// submitBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   const data = {
//     name: breedNameInput.value,
//     type: breedTypeInput.value,
//   };

//   // them du lieu vao mang breedArr
//   const validate = validateBreed(data);
//   // Kiem tra du lieu nhap vao neu thoa dk thi them vao
//   if (validate) {
//     breedArr.push(data);
//     // Luu vaof localStorage
//     saveToStorage('breedArr', breedArr);
//     renderBreedTable();
//     clearInput();
//   }
// });

// //////////////////////////////////////////
// // Chuc nang xoa breed
// // Su dung onclick="deleteBreed()" de chay ham - khi an vao nut Delete
// function deleteBreed(breedName) {
//   //    kiem tra dieu kien xoa
//   const isDelete = confirm('Are you sure? ');
//   if (!isDelete) return;
//   //   Tim index trong breedArr bang id
//   const index = breedArr.findIndex(el => el.name === breedName);
//   //   xoa du lieu trong mang breedArr && cap nhat tren localStorage
//   breedArr.splice(index, 1);
//   saveToStorage('breedArr', breedArr);
//   renderBreedTable();
// }

let breedArr = JSON.parse(getFromStorage("breedArr")) || [];
const breed = document.getElementById("input-breed");
const breedType = document.getElementById("input-type");
const btnsubmit = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");


// hàm hiện danh sách breed
function renderBreedTable(breedArr) {
    tableBodyEl.innerHTML = "";
    for (let i = 0; i < breedArr.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<th>${i + 1}</th>  <td>${breedArr[i].name}</td>   <td>${breedArr[i].type
            }</td>    <td><button type="button" class="btn btn-danger" onclick="deleteBreed('${breedArr[i].name
            }','${breedArr[i].type}')">Delete</button></td>`; //thêm hàm xóa Breed theo tên breed và type khi click button Delete
        tableBodyEl.appendChild(row);
    }
}
breedArr = JSON.parse(getFromStorage("breedArr"));
renderBreedTable(breedArr);
//hàm xóa các dữ liệu vừa nhập trên Form theo tên Breed
function deleteBreed(breed, type) {
    if (confirm("Are you sure?")) {
        for (let i = 0; i < breedArr.length; i++) {
            if (breed === breedArr[i].name && type === breedArr[i].type) {
                breedArr.splice(i, 1); //xóa breedArr[i] ra khỏi mảng và xóa 1 phần tử bắt đầu từ breedArr[i]
                renderBreedTable(breedArr);
                saveToStorage("breedArr", JSON.stringify(breedArr)); // chuyển breedArr thành dạng string, lưu lại vào storage
            }
        }
    }
}

//HÀM xóa các dữ liệu mà người dùng vừa nhập ở trên Form.
function clearInput() {
    breed.value = "";
    breedType.value = "0";
}
//hàm kiểm tra dữ liệu
function validate() {
    let checkBreed = true;
    const dataBreed = {
        name: breed.value,
        type: breedType.value,
    };
    //kiểm tra có breed đã tồn tại hay chưa
    for (let i = 0; i < breedArr.length; i++) {
        if (
            breed.value === breedArr[i].name &&
            breedType.value === breedArr[i].type
        ) {
            checkBreed = false;
            alert(`species already exist`);
            clearInput();
            return checkBreed;
        }
    }
    if (dataBreed.name !== "" && dataBreed.type !== "0") {
        breedArr.push(dataBreed);
        clearInput();
        saveToStorage("breedArr", JSON.stringify(breedArr));
        //console.log(breedArr);
        renderBreedTable(breedArr);
    } else if (dataBreed.name === "" || dataBreed.type === "0") {
        if (dataBreed.name === "") alert(`Please breed name`);
        if (dataBreed.type === "0") alert("Please Select Type");
    }
}

btnsubmit.addEventListener("click", validate);