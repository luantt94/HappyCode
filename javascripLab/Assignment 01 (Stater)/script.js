"use strict";

//  Bắt sự kiện Click vào nút "Submit"

const inputId = document.getElementById("input-id");
const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const inputType = document.getElementById("input-type");
const inputWeight = document.getElementById("input-weight");
const inputLength = document.getElementById("input-length");
const inputColor1 = document.getElementById("input-color-1");
const inputBreed = document.getElementById("input-breed");
const inputVaccinated = document.getElementById("input-vaccinated");
const inputDewormed = document.getElementById("input-dewormed");
const inputSterilized = document.getElementById("input-sterilized");

const submitBtn = document.getElementById("submit-btn");
const petArr = [];
const tableBodyEl = document.getElementById("tbody");
const healthyBtn = document.getElementById("healthy-btn");

// thêm các sự kiện vào nút submit

submitBtn.addEventListener("click", function () {
  const fulldate = new Date();
  const data = {
    id: inputId.value,
    Name: inputName.value,
    age: inputAge.value,
    type: inputType.value,
    weight: inputWeight.value,
    length: inputLength.value,
    color: inputColor1.value,
    breed: inputBreed.value,
    vacinated: inputVaccinated.checked,
    dewormed: inputDewormed.checked,
    sterilized: inputSterilized.checked,
    date: `${fulldate.getDate()}/${
      fulldate.getMonth() + 1
    }/${fulldate.getFullYear()}`,
  };

  // Validate dữ liệu hợp lệ

  function validateData(data) {
    if (data.id.trim() === "") {
      alert("please enter id");
      return false;
    } else if (!data.Name) {
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
    } else {
      return true;
    }
  }

  // kiểm tra trùng ID

  for (let i = 0; i < petArr.length; i++) {
    if (inputId.value === petArr[i].id) {
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
    let doc = `<th>${petArr[i].id} </th>  <td>${petArr[i].Name} </td>  <td>${
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
  inputId.value = "";
  inputName.value = "";
  inputAge.value = "";
  inputType.value = "Select Type";
  inputWeight.value = "";
  inputLength.value = "";
  inputColor1.value = "#000000";
  inputBreed.value = "Select Breed";
  inputVaccinated.checked = false;
  inputDewormed.checked = false;
  inputSterilized.checked = false;
};

// Xóa một thú cưng

const deletePetId = (petId) => {
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petId.length; i++) {
      if (petId === petArr[i].id) {
        petArr.splice(i, 1);
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
