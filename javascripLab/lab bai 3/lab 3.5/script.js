const population = 13;
population >= 33
  ? console.log("Portugal's population is above average")
  : console.log("Portugal's population is below average");

const tuoi = population >= 33 ? "above average" : "below average";
console.log(tuoi);

let tuoi2;
if (population >= 33) {
  tuoi2 = "above averagae";
} else {
  tuoi2 = "below average";
}
console.log(tuoi2);

console.log(
  `Portugal's population is ${
    population >= 33 ? "above average" : "below average"
  }`
);
