'use strict';

// Export to file json
const exportBtn = document.getElementById('export-btn');

exportBtn.addEventListener('click', function () {
  const isExport = confirm('Bạn muốn Export dữ liệu ra file?');
  if (isExport) {
    saveStaticDataToFile();
  }
});
function saveStaticDataToFile() {
  
  let file = new Blob([JSON.stringify(getFromStorage('petArr'), null, 2)], {
    type: 'application/json',
  });
  saveAs(file, 'petArr.json');
}
//////////////////////////////////////////
// ! Import file
const fileInput = document.getElementById('input-file');
const importBtn = document.getElementById('import-btn');

importBtn.addEventListener('click', xulyForm);

function xulyForm(e) {
  //neu chua chọn file - file.value.length = 0 - yeu cau chon file va thoat
  if (!fileInput.value.length) {
    alert('Vui long chon file de  Import Data');
    return;
  }

  //tạo một reader object để đọc file
  let reader = new FileReader();

  reader.readAsText(fileInput.files[0]); //dọc file đầu tiên
  reader.onload = function xulyFile(e) {
    let contentJson = e.target.result;
    // Kiem tra file co rong khong- neu rong thi thoat
    if (contentJson.trim().length === 0) return;

    // Chuyển dữ liệu dạng JSON về một Javascript Object
    let contentToObject = JSON.parse(contentJson);

    // Duyet qua cac phan tu
    contentToObject.forEach((el, i) => {
      if (validateData(el)) {
        // 1. Them du lieu vao petArr
        let index = petArr.findIndex(pet => pet.id === el.id);
        // Tim khong thay id thi them vao nhu phan tu moi
        if (index < 0) petArr.push(el);
        // tim thay id thi ghi de
        else petArr[index] = el;

        // 2. Them du lieu vao breedArr
        let breedName = breedArr
          .filter(breed => breed.type === el.type)
          .findIndex(breed => breed.name === el.breed);
        // Tim khong thay ten cua breed trong mang breedArr theo Dog-Cat >> them vao nhu phan tu moi
        if (breedName < 0) {
          breedArr.push({
            name: el.breed,
            type: el.type,
          });
        }
      }
    });
  };
  saveToStorage('petArr', petArr);
  saveToStorage('breedArr', breedArr);
  alert('Đã import file thành công !');
  fileInput.value = '';
}
// Validate dữ liệu - Ham kiem tra du lieu loi
function validateData(data) {
  let errorData =
    data.id.trim() === '' ||
    data.name.trim() === '' ||
    data.age < 1 ||
    data.age > 15 ||
    isNaN(data.age) ||
    data.weight < 1 ||
    data.weight > 15 ||
    isNaN(data.weight);
  data.lenght < 1 ||
    data.lenght > 100 ||
    isNaN(data.lenght) ||
    data.color.trim() === '' ||
    data.breed === 'Select Breed' ||
    data.breed.trim() === '' ||
    data.date.trim() === '';

  return !errorData;
}
