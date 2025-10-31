function findMax(arr){
    if(arr.length === 0)
        return "array is empty";

    let max =arr[0];
    for (let i=1;i<arr.lenthg;i++){
    if(arr[i]>max)
{
    max=arr[i];
}
    }
    return max;
}
console.log(findMax([10,46,80]));
//27-10-2025 es5
var numbers = [10, 20, 30];
numbers.forEach(num => console.log(num));
var numbers = [1, 2, 3];
var squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]

var numbers = [1, 2, 3, 4, 5];
var even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

var numbers = [1, 2, 3, 4];
var sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
//es6
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "date"];

const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "date"]
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
const original = [5, 6, 7];
const copy = [...original];
console.log(copy); // [5, 6, 7]
const numbrs = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num % 2 === 0)  // even numbers
  .map(num => num * num);        // squares
console.log(result); // [4, 16, 36]
//contains
const details = ["name", "id", "mango"];

console.log(details.includes("name")); // true
console.log(details.includes("grape"));  // false
const frits = ["apple", "banana", "mango"];

console.log(frits.indexOf("banana") !== -1); // true
console.log(frits.indexOf("grape") === -1);  // true (doesn’t contain)

const students = ["Alice", "Bob", "Charlie"];

students.forEach((student, index) => {
  console.log(`${index + 1}. ${student}`);
});
const prices = [100, 200, 300];
const withTax = prices.map(price => price * 1.15);
console.log(withTax); // [115, 230, 345]
var numbers = [2, 4, 6, 8];
console.log(numbers.every(num => num % 2 === 0)); // true
console.log(numbers.some(num => num > 5));        // true
console.log(numbers.some(num => num > 10));       // false

var frit = ["apple", "banana", "mango"];

// Check if array contains a value
if (frit.includes("banana")) {
  console.log("Banana is in the array");
} else {
  console.log("Banana is not in the array");
}

// Check if array doesn't contain a value
if (!frit.includes("grape")) {
  console.log("Grape is not in the array");
} else {
  console.log("Grape is in the array");
}
var numbers = [5, 10, 15, 20];

// Check multiple values
const checkNumbers = [10, 25];

checkNumbers.forEach(num => {
  if (numbers.includes(num)) {
    console.log(`${num} is in the array`);
  } else {
    console.log(`${num} is not in the array`);
  }
});

var numbers = ["pathan", "khan", 15, 20];


//galaxy code

const starCount = 1000; // Number of stars you want
const starPositions = [];

for (let i = 0; i < starCount; i++) {
  const radius = Math.random() * 500;
  const angle = Math.random() * Math.PI * 2;
  const height = (Math.random() - 0.5) * 100;

  const x = Math.cos(angle) * radius;
  const y = height;
  const z = Math.sin(angle) * radius;

  starPositions.push(x, y, z);
}

console.log(starPositions.length / 3 + " stars generated");

let planets = ["Mercury", "Venus", "Earth", "Mars"];
console.log(planets[2]); // Earth
planets.push("Jupiter");
for (let p of planets) {
  console.log(p);
}
let galaxies = [];

// for (let g = 0; g < 3; g++) {
//   let galaxy = createGalaxy();
//   galaxies.push(galaxy);
//   scene.add(galaxy);
//}
// 1️⃣ Define how many stars
// const starCount = 1000;

// // 2️⃣ Array to hold star coordinates
// const starPositions = [];

// 3️⃣ Fill the array
for (let i = 0; i < starCount; i++) {
  const radius = Math.random() * 500;
  const angle = Math.random() * Math.PI * 2;
  const height = (Math.random() - 0.5) * 100;

  const x = Math.cos(angle) * radius;
  const y = height;
  const z = Math.sin(angle) * radius;

  starPositions.push(x, y, z);
}

// // 4️⃣ NOW define the geometry (this is the step you were missing!)
// const starGeometry = new THREE.BufferGeometry();
// starGeometry.setAttribute(
//   "position",
//   new THREE.Float32BufferAttribute(starPositions, 3)
// );

// // 5️⃣ Define material
// const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });

// // 6️⃣ Create Points object and add to scene
// const stars = new THREE.Points(starGeometry, starMaterial);
// scene.add(stars);

//29-10-2025
let galaxyStars = [
  [1, 2, 3],  // Galaxy 1
  [4, 5, 6],  // Galaxy 2
  [7, 8, 9],  // Galaxy 3
];

// Access an element
console.log(galaxyStars[1][2]); // 6

// Loop through 2D array
for (let g = 0; g < galaxyStars.length; g++) {
  console.log(`Galaxy ${g + 1}: ${galaxyStars[g].join(", ")}`);
}
let planetsData = [
  { name: "Mercury", radius: 2440, color: "gray" },
  { name: "Venus", radius: 6052, color: "yellow" },
  { name: "Earth", radius: 6371, color: "blue" },
  { name: "Mars", radius: 3390, color: "red" },
];

// Accessing object properties
console.log(planetsData[2].name); // Earth

// Adding a new planet
planetsData.push({ name: "Jupiter", radius: 69911, color: "orange" });

// Looping through planets
for (let planet of planetsData) {
  console.log(`${planet.name} has radius ${planet.radius} km`);
}
let starCluster = [];
const totalStars = 50;

for (let i = 0; i < totalStars; i++) {
  let star = {
    x: (Math.random() - 0.5) * 1000,
    y: (Math.random() - 0.5) * 1000,
    z: (Math.random() - 0.5) * 1000,
    brightness: Math.random(),
  };
  starCluster.push(star);
}

// Print first 5 stars
console.log(starCluster.slice(0, 5));
let galaxyRadii = [2440, 6052, 6371, 3390, 69911];

// Multiply each radius by 2 (Map)
let doubledRadii = galaxyRadii.map(r => r * 2);
console.log(doubledRadii);

// Filter large planets (Filter)
let bigPlanets = galaxyRadii.filter(r => r > 5000);
console.log(bigPlanets);

// Sum of all radii (Reduce)
let totalRadius = galaxyRadii.reduce((sum, r) => sum + r, 0);
console.log(totalRadius);
