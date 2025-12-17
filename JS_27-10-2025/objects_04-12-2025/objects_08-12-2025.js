// Object literal
var obj1 = { key: "value" };

// Object constructor
var obj2 = new Object();
obj2.key = "value";

console.log(obj1);
console.log(obj2);

var student = { name: "John", marks: { math: 90, science: 85 } };
console.log(student.marks.math); // 90

var person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for(var key in person) {
  console.log(key, person[key]);
}


Object.keys(person).forEach(key => console.log(key));
Object.values(person).forEach(value => console.log(value));
Object.entries(person).forEach(([key,value]) => console.log(key, value));


var obj1 = { a: 1, b: 2 };
var obj2 = Object.assign({}, obj1);

var obj3 = { c: 3 };
var merged = { ...obj1, ...obj3 };


var num = Math.floor(Math.random() * 10);  
console.log(num);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(5, 15)); // generates number between 5–15


Math.floor(Math.random() * 10);
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(5, 15));  // 5 to 15
// Possible values stored in object

var name = "Khan";
console.log(`Hello, ${name}!`);
var poem = `
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!
`;

console.log(poem);

function greet(user) {
  return `Welcome back, ${user}!`;
}

console.log(greet("Sara"));


var num = Math.random();
console.log(num); // 0 <= num < 1


let N = 9;
let randomInt = Math.floor(Math.random() * (N + 1));
console.log(randomInt); // 0 to 9

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(5, 15)); // 5 to 15

let arr = [10, 20, 30, 40];
let randomElement = arr[Math.floor(Math.random() * arr.length)];
console.log(randomElement);

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

console.log(randomColor());

function randomDecimalFixed(min, max, decimals = 2) {
  return (Math.random() * (max - min) + min).toFixed(decimals);
}

console.log(randomDecimalFixed(1, 5, 3)); // e.g., 2.537

function randomEven(min, max) {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (num % 2 !== 0);
  return num;
}

console.log(randomEven(10, 50));




let data = {
  moods: ["Brave", "Calm", "Angry", "Focused", "Excited"],
  abilities: ["Fire Blast", "Wind Slash", "Earth Shield", "Water Wave", "Lightning Strike"]
};

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStats() {
  // Random numbers using Math object
  let power = randomRange(50, 100);      // Power 50-100
  let energy = randomRange(30, 100);     // Energy 30-100

  // Random mood & ability using Math.random()
  let mood = data.moods[Math.floor(Math.random() * data.moods.length)];
  let ability = data.abilities[Math.floor(Math.random() * data.abilities.length)];

  // Display in HTML
  document.getElementById("power").innerHTML = "Power: " + power;
  document.getElementById("energy").innerHTML = "Energy: " + energy;
  document.getElementById("mood").innerHTML = "Mood: " + mood;
  document.getElementById("ability").innerHTML = "Special Ability: " + ability;
}
