const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ["Berra, Yogi", "Becker, Carl", "Bernhard, Sandra", "Benjamin, Walter", "Berle, Milton", "Berry, Halle", "Berne, Eric", "Beecher, Henry", "Benn, Tony", "Bierce, Ambrose", "Benchley, Robert", "Benson, Leana", "Beddoes, Mick", "Begin, Menachem", "Bennington, Chester", "Biden, Joseph", "Beethoven, Ludwig", "Blair, Tony", "Beck, Glenn", "Bergman, Ingmar", "Bentsen, Lloyd", "Bethea, Erin", "Benenson, Peter", "Black, Elk", "Blair, Robert", "Berlin, Irving", "Beckett, Samuel", "Bent, Silas", "Blake, William", "Berry, Wendell", "Berio, Luciano", "Biondo, Frank", "Bevel, Ken", "Bellow, Saul", "Bevan, Aneurin", "Belloc, Hilaire", "Birrell, Augustine", "Ben-Gurion, David", "Billings, Josh", "Biko, Steve", "Berger, Ric"];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(inventor => inventor.year.toString()[1] == 5)
console.table(filteredInventors)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((firstInventor, secondInventor) => firstInventor.year - secondInventor.year)
console.table(sortedInventors)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)
console.log(totalYears)

// 5. Sort the inventors by years lived
const oldest = inventors.sort((firstInventor, secondInventor) => (secondInventor.passed - secondInventor.year) - (firstInventor.passed - firstInventor.year))
console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const links = [...document.querySelectorAll('.mw-category a')]

links.map(link => link.textContent).filter(streetName => streetName.includes('de'))


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeople = people.sort()
console.log(sortPeople)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const howMany = data.reduce((allVehicles, vehicle) => {
  allVehicles[vehicle] = (allVehicles[vehicle] || 0) + 1
  return allVehicles
}, {})
console.log(howMany)