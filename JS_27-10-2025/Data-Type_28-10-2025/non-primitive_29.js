// Primitive
let x = 10;
let y = x;
y = 20;
console.log(x); // 10  (x is not affected)

// Non-Primitive
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (both point to the same object)

let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2025,
  autopilot: true
};

console.log(car.brand); // Tesla

let star = {
  name: "Sirius",
  type: "Main Sequence",
  distance: 8.6 // light-years
};

// Accessing values
console.log(star.name); // "Sirius"
console.log(star["distance"]); // 8.6

// Adding a new property
star.mass = 2.02;
console.log(star);

function greet(name) {
  return `Hello, ${name}!`;
}

let sayHi = greet; // function reference
console.log(sayHi("Milky Way")); // "Hello, Milky Way!"

// Function inside object
let galaxy = {
  name: "Andromeda",
  describe: function() {
    return `Galaxy: ${this.name}`;
  }
};
console.log(galaxy.describe()); // "Galaxy: Andromeda"

let planets = ["Mercury", "Venus", "Earth", "Mars"];

// Accessing elements
console.log(planets[2]); // "Earth"

// Adding elements
planets.push("Jupiter");

// Looping through arrays
for (let planet of planets) {
  console.log(planet);
}
