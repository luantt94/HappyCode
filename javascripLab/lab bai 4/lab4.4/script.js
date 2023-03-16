function describePopulation(population) {
  return (population / 7900) * 100;
}
function describePopulation1(country, population1) {
  const population3 = describePopulation(population1);
  const ha = `China has ${country} million people, which is about ${population3} of the world`;
  return ha;
}

console.log(describePopulation1(1441, 1441));
