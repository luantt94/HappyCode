'use strict';

const idInput = document.getElementById('input-id');
const nameInput = document.getElementById('input-name');
const ageInput = document.getElementById('input-age');
const typeInput = document.getElementById('input-type');
const weightInput = document.getElementById('input-weight');
const lengthInput = document.getElementById('input-length');
const colorInput = document.getElementById('input-color-1');
const breedInput = document.getElementById('input-breed');
const vaccinatedInput = document.getElementById('input-vaccinated');
const dewormedInput = document.getElementById('input-dewormed');
const sterilizedInput = document.getElementById('input-sterilized');

const tableBodyEl = document.getElementById('tbody');
const containerForm = document.getElementById('container-form');

const submitBtn = document.getElementById('submit-btn');

/////////////// FUNCTION //////////////////
// hiển thị các thú cưng vào bảng
renderTableData(petArr);
// !Ham hien thi bang thong tin
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  petArr.forEach(pet => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                      <i class="bi bi-square-fill" style="color: ${
                        pet.color
                      }"></i>
                    </td>
                    <td><i class="bi ${
                      pet.vaccinated
                        ? 'bi-check-circle-fill'
                        : 'bi-x-circle-fill'
                    }"></i></td>
                    <td><i class="bi ${
                      pet.dewormed ? 'bi-check-circle-fill' : 'bi-x-circle-fill'
                    }"></i></td>
                    <td><i class="bi ${
                      pet.sterilized
                        ? 'bi-check-circle-fill'
                        : 'bi-x-circle-fill'
                    }"></i></td>
                  
                    <td>${pet.date}</td>
                    <td>
                      <button class="btn btn-warning edit" onclick="editPet('${
                        pet.id
                      }')">Edit</button>
                    </td>
        `;
    tableBodyEl.appendChild(row);
  });
  

  
}



//////////////////////////////////////////
// CHUC NANG: chinh sua thong tin khi an vao Edit
// Ham se hoat dong khi an vao button Edit thong qua :
//  onclick="editPet('${petArr[i].id}')
function editPet(id) {
  
  // Hien form thay doi thong tin
  containerForm.classList.remove('hide');
  // Tim du lieu cua pet trong mang dua vao id
  const pet = petArr.find(petItem => petItem.id === id);

  // Hien thi thong tin cua Pet da tim duoc len Form
  idInput.value = id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;

  // Hien thi Breed theo Type (Dog hoac Cat)  onchange="renderBreed(this.value)"
  renderBreed();
  // hiển thị loại giống thú cưng(dữ liệu ban đầu trước khi edit)
  breedInput.value = `${pet.breed}`

  }

  //////////
  // sự kiện nhấp vào typeInput
  typeInput.addEventListener("click", renderBreed);



  ///////
  //hàm hiển thị loại giống theo đúng từng loại
function renderBreed() {
  
  breedInput.innerHTML = "<option>Select Breed</option>";

  const breedDogs = breedArr.filter((breedItem) => breedItem.type === "Dog");
  const breedCats = breedArr.filter((breedItem) => breedItem.type === "Cat");



// nếu type là Dog
if (typeInput.value === "Dog") {
 
  breedDogs.forEach(function (breedItem) {
    const option = document.createElement("option");
    option.innerHTML = `${breedItem.breed}`;
    breedInput.appendChild(option)
  })
// nếu là cat
} else if (typeInput.value === "Cat") {
  
  breedCats.forEach(function (breedItem) {
    const option = document.createElement("option");
    option.innerHTML = `${breedItem.breed}`;
    breedInput.appendChild(option)
  })
}
}




// ! Han kiem tra du lieu nhap vao
// Validate dữ liệu hợp lệ
function validate(data) {
    
  if (data.id.trim() === "") {
    alert("please enter id");
    return false;
  } else if (data.name.trim() === "") {
    alert("please enter pet's name");
    return false;
  } else if (data.age < 1 || data.age > 15 || !data.age) {
    alert("Age must be between 1 and 15!");
    return false;
  } else if (data.type === "Select Type") {
    alert("Please select Type!");
    return false;
  } else if (data.weight < 1 || data.weight > 15 || !data.weight) {
    alert("Weight must be between 1 and 15!");
    return false;
  } else if (data.length < 1 || data.length > 100 || !data.length) {
    alert("Length must be between 1 and 100!");
    return false;
  } else if (data.breed === "Select Breed") {
    alert("Please select Breed!");
    return false;
  }else {
    return true;
  }
}


  // Bat su kien click vao nut Submit
  submitBtn.addEventListener('click', function () {
    // Tao object moi de thay the pet cu
    const data = {
      id: idInput.value,
      name: nameInput.value,
      age: parseInt(ageInput.value),
      type: typeInput.value,
      weight: parseInt(weightInput.value),
      length: parseInt(lengthInput.value),
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      // date: pet.date,
    };
    // Validate dữ liệu hợp lệ
    const isValidate = validate(data);

    if(isValidate) {
      const index = petArr.findIndex((pet) => pet.id === data.id)

      //vẫn giữ ngày thêm thú cưng như cũ
      data.date = petArr[index].date;
      // cập nhập lại dữ liệu của thú cưng đó
      petArr[index] = data;
      saveToStorage("petArr", petArr)

      //ẩn form đi và hiện lại bảng dữ liệu thú cưng
      containerForm.classList.add("hide");
      renderTableData(petArr);
    }
    
  });


