const ngoNgu = prompt("ngôn ngữ");
const soDan = prompt("dân số");
const khuVuc = prompt("Có phải đảo quốc không");

if (ngoNgu === "tieng anh" && soDan < 50 && khuVuc === "khong") {
  console.log("You should live in Portugal :)");
} else console.log("Portugal does not meet your criteria :(");
