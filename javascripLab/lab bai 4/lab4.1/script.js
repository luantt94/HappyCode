function describeCountry(country, population, capitalCity) {
  const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return describe;
}

const describeCountry2 = describeCountry("VietNam", 90, "HaNoi");
console.log(describeCountry2);
const describeCountry3 = describeCountry("VietNam", 90, "HaNoi");
console.log(describeCountry2);
const describeCountry4 = describeCountry("VietNam", 90, "HaNoi");
console.log(describeCountry2);
