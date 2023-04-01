'use strict';

const breedNameInput = document.getElementById('input-breed');
const breedTypeInput = document.getElementById('input-type');
const submitBtn = document.getElementById('submit-btn');
const tableBodyEl = document.getElementById('tbody');

// hiển thị danh sách

renderTableBreed(breedArr);

// bắt sự kiện
submitBtn.addEventListener('click', function() {
   
    //lây dữ liệu từ form
    const data = {
        breed: breedNameInput.value,
        type: breedTypeInput.value
    }


// validate dữ liệu
const isValidate = validate(data);

if (isValidate) {
    breedArr.push(data);
    // lưu trũ dữ liệu lại
    saveToStorage("breedArr", breedArr);

    // hiển thị lại bảng thông tin các Breed
    renderTableBreed(breedArr);

    //xóa thông tin từ form nhập
    deleteForm()
}
});

function validate(data) {
    if (data.breed.trim() === ""){
        alert("please input for breed !")
        return false
    }else if(data.type === "Select Type"){
        alert("please select TYpe!")
        return false
    } else{
        return true
    }
}

// xóa thông tin form
function deleteForm() {
    breedNameInput.value = "";
    breedTypeInput.value = "Select Type"
}


// hiển thị thông tin các brees lên bảng
function renderTableBreed() {
    
    tableBodyEl.innerHTML = "";


// cứ mỗi loại breed ta sẽ thêm 1 dòng (row) dữ liệu vào bảng
breedArr.forEach(function (breedItem, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td scope ="col">${index + 1}</td>
    <td scope ="col">${breedItem.breed}</td>
    <td scope ="col">${breedItem.type}</td>
    <td>
    <button type="button" onclick = "deleteBreed('${breedItem.breed}')" class="btn btn-danger">Delete</button>
    </td>
    `

    tableBodyEl.appendChild(row);
})
}

// hàm xóa các breed

function deleteBreed(breed) {
    // xác nhận xóa
    const isDelete = confirm("Are you sure?");

    if (isDelete) {
        //thực hiện xóa trong bước này
        for (let i = 0; i < breedArr.length; i++) {
            if (breed === breedArr[i].breed) {
                //xóa khỏi mảng
                breedArr.splice(i, 1);
                //cập nhật lại dữ liệu dưới local storage
                saveToStorage("breedArr", breedArr);
                // gọi lại hàm hiển thị
                renderTableBreed(breedArr);
                break;
            }
        }
    }
}





















