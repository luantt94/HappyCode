"use strict";

//  Bắt sự kiện Click vào nút "Submit"
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const tableBodyEl = document.getElementById("tbody");
const healthyBtn = document.getElementById("healthy-btn");



// hiển thị danh sách thú cưng
renderTableData(petArr);

// bắt sự kiện khi ấn chọn vào typeInput để hiển thị loại giống theo đúng loại
typeInput.addEventListener('click', renderBreed);

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





// thêm các sự kiện vào nút submit

submitBtn.addEventListener("click", function () {
  
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
    // dinh dang hien thi dd/mm/yyyy
    date: new Date().toLocaleDateString('en-GB'),
  };

  // Validate dữ liệu hợp lệ
  // const isValidate = validateData(data);
  // if (isValidate) {
  //   petArr.push(data);
  //   saveToStorage("petArr", petArr);
  //   renderTableData(petArr);
  //   deleteForm()
  // }


  //
  function validateData(data) {
    
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

  // kiểm tra trùng ID

  for (let i = 0; i < petArr.length; i++) {
    if (idInput.value === petArr[i].id) {
      alert("ID must unique!");
      checkId = false;
      return checkId;
    }
  }

  // Thêm thú cưng vào danh sách

  const validate = validateData(data);
  if (validate) {
    petArr.push(data);
    clearInput();
    renderTableData(petArr);
  }
});

// Hiển thị danh sách thú cưng

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    let doc = `<th>${petArr[i].id} </th>  <td>${petArr[i].name} </td>  <td>${
      petArr[i].age
    } </td> <td>${petArr[i].type} </td>
    <td>${petArr[i].weight} kg</td>  <td>${petArr[i].length} cm</td>  <td>${
      petArr[i].breed
    } </td>  <td><i class="bi bi-square-fill" style="color: ${
      petArr[i].color
    }"></i></td>
    <td>${
      petArr[i].vacinated === true
        ? "<i class='bi bi-check-circle-fill'></i>"
        : "<i class='bi bi-x-circle-fill'> </i>"
    }</td>
    <td>${
      petArr[i].dewormed === true
        ? "<i class='bi bi-check-circle-fill'></i>"
        : "<i class='bi bi-x-circle-fill'> </i>"
    }</td>
    <td>${
      petArr[i].sterilized === true
        ? "<i class='bi bi-check-circle-fill'></i>"
        : "<i class='bi bi-x-circle-fill'> </i>"
    }</td>

    <td>${petArr[i].date}</td>

    <td><button type="button" class="btn btn-danger" onclick="deletePetId('${
      petArr[i].id
    }')">Delete</button></td>`;
    console.log(petArr[0].length);
    console.log(petArr[0].weight);

    row.innerHTML = doc;
    tableBodyEl.appendChild(row);
  }
}

// Xóa các dữ liệu vừa nhập trên Form



const clearInput = () => {
  idInput.value = '';
  nameInput.value = '';
  ageInput.value = '';
  typeInput.value = 'Select Type';
  weightInput.value = '';
  lengthInput.value = '';
  colorInput.value = '#000';
  breedInput.value = 'Select Breed';
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

// Xóa một thú cưng

const deletePetId = (petId) => {
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petId.length; i++) {
      if (petId === petArr[i].id) {
        petArr.splice(i, 1);
        saveToStorage("petArr", petArr);
        renderTableData(petArr);
        
      }
    }
  }
};

// Hiển thị các thú cưng khỏe mạnh

let healthyCheck = false;
healthyBtn.addEventListener("click", function () {
  if (healthyCheck === true) {
    let healthyPetArr = petArr.filter((petArr) => {
      return petArr.vacinated && petArr.dewormed && petArr.sterilized;
    });
    renderTableData(healthyPetArr);
    healthyBtn.textContent = "Show all pet";
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    healthyBtn.textContent = "show healthy pet";
    healthyCheck = true;
  }
});

