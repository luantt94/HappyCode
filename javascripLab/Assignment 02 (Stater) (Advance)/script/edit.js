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

const tbody = document.getElementById('tbody');
const containerForm = document.getElementById('container-form');

const submitBtn = document.getElementById('submit-btn');

/////////////// FUNCTION //////////////////
// !Ham hien thi bang thong tin
function renderEdit() {
  tbody.innerHTML = '';

  petArr.forEach(pet => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.lenght} cm</td>
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
    tbody.appendChild(row);
  });
}
// ! Han kiem tra du lieu nhap vao
// Validate dữ liệu hợp lệ
function validateDataEdit(data) {
  let isValidate = true;
  const result = function (meassage) {
    alert(meassage);
    isValidate = false;
  };
  // Khong can kiem tra id vi id khong thay doi
  if (data.name.trim() === '') {
    result('Name cannot be blank');
  }
  if (data.age < 1 || data.age > 15 || isNaN(data.age)) {
    result('Age must be between 1 and 15!');
  }
  if (data.type === 'Select Type') {
    result('Please select Type!');
  }
  if (data.weight < 1 || data.weight > 15 || isNaN(data.weight)) {
    result('Weight must be between 1 and 15!');
  }
  if (data.lenght < 1 || data.lenght > 100 || isNaN(data.lenght)) {
    result('Lenght must be between 1 and 100!');
  }
  if (data.breed === 'Select Breed') {
    result('Please select Breed!');
  }
  return isValidate;
}
// 4. Hiển thị Breed trong màn hình quản lý thú cưng theo Dog -Cat
function renderBreed(type) {
  breedInput.innerHTML = ' <option>Select Breed</option>';
  if (type === 'Select Type') return;
  // ** Tao Array theo type
  // TH: type = 'Dog' thi tao Array cua Dog
  // TH: type = 'Cat' thi tao Array cua Cat
  const breedArrOption = breedArr.filter(breed => breed.type === type);
  breedArrOption.forEach(breed => {
    const option = document.createElement('option');
    option.innerHTML = `${breed.name}`;
    breedInput.appendChild(option);
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
  const pet = petArr.find(pet => pet.id === id);

  // Hien thi thong tin cua Pet da tim duoc len Form
  idInput.value = id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.lenght;
  colorInput.value = pet.color;
  breedInput.value = pet.breed;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;

  // Hien thi Breed theo Type (Dog hoac Cat)  onchange="renderBreed(this.value)"
  renderBreed(typeInput.value);
  // Bat su kien click vao nut Submit
  submitBtn.addEventListener('click', function (e) {
    // Tao object moi de thay the pet cu
    const newData = {
      id: pet.id,
      name: nameInput.value,
      age: parseInt(ageInput.value),
      type: typeInput.value,
      weight: parseInt(weightInput.value),
      lenght: parseInt(lengthInput.value),
      color: colorInput.value,
      breed: breedInput.value,
      vaccinated: vaccinatedInput.checked,
      dewormed: dewormedInput.checked,
      sterilized: sterilizedInput.checked,
      date: pet.date,
    };
    // kiem tra du lieu nhap vao
    if (!validateDataEdit(newData)) return;
    // Tim vi tri index trong mang petArr
    const index = petArr.findIndex(petItem => (petItem.id = newData.id));
    // Cap nhat lai petArr va localStorage
    petArr[index] = newData;
    saveToStorage('petArr', petArr);
    // Ẩn form
    containerForm.classList.add('hide');
    // Hien thi lai bang thong tin Edit
    renderEdit();
  });
}
