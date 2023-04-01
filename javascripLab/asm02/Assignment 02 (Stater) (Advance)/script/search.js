'use strict';

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");

const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const tableBodyEl = document.getElementById("tbody");
const findBtn = document.getElementById("find-btn");
const formEl = document.getElementById("container-form");

//hiển thị tất cả thú cưng
renderTableData(petArr);

// bắt sự kiện vào nút find

findBtn.addEventListener('click', function() {


  let petArrFind = petArr

  //ID
  if (idInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.id.includes(idInput.value));
  }
  // NAME
  if (nameInput.value) {
    petArrFind = petArrFind.filter((pet) => pet.name.includes(nameInput.value));
  }
  // TYPE
  if (typeInput.value !== "Select Type") {
    petArrFind = petArrFind.filter((pet) => pet.type === typeInput.value);
  }
  // BREED
  if (breedInput.value !== "Select Breed") {
    petArrFind = petArrFind.filter((pet) => pet.breed === breedInput.value);
  }

  //  vaccinatedInput
  if (vaccinatedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.vaccinated === true);
  }
  //dewormedInput
  if (dewormedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.dewormed === true);
  }
  //sterilizedInput
  if (sterilizedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.sterilized === true);
  }

  // hiển thị các thú cưng thỏa điều kiện cần tìm
  renderTableData(petArrFind)
});


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
                    
        `;
    tableBodyEl.appendChild(row);
  });
  

  
}

// hiển thị các loai giống breed
renderBreed();

// hàm hiển thị các loại giống breed

function renderBreed() {
  breedArr.forEach(function(breedItem) {
    const option = document.createElement("option")
    option.innerHTML = `${breedItem.breed}`;
    breedInput.appendChild(option);
  })
}

