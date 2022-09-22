const cities = [
  { name: 'Hilo', population: 44100 },
  { name: 'Honolulu', population: 350000 },
  { name: 'Kailua', population: 40500 },
  { name: 'Kaneohe', population: 37400 },
  { name: 'Pearl City', population: 46000 },
  { name: 'Waipahu', population: 43500 },
];

function averagePopulation(data) {
  const numbers = _.pluck(data, 'population');
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0) / numbers.length;
}

console.log(averagePopulation(cities));// prints: 93583.33333333333

function biggestAndSmallest(data) {
  const numbers = _.pluck(data, 'population');
  const max = _.filter(data, function (entry) {
    return entry.population === _.max(numbers);
  });
  const min = _.filter(data, function (entry) {
    return entry.population === _.min(numbers);
  });
  return `Biggest: ${max.name}; Smallest: ${min.name}`;
}

console.log(biggestAndSmallest(cities));// prints: Biggest: Honolulu; Smallest: Kaneohe
