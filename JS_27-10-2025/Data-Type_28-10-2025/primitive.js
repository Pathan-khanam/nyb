
// data types decided at runtime
//primitive data-type
let x="text"//string

let y=1 //num

let z=true //boolean

let m; //undefined
  
let n=null //null-object

console.log(y)
console.log(typeof n)
console.log(x)
console.log(typeof m)

//null was stored like an object reference(00000000)

//code proof of null 
console.log(typeof null)
console.log(typeof {})
//console.log(null === {});

let txt=Symbol("user")

console.log(txt)
console.log(typeof txt)

let bignum=34565876897798789678587478587687n; //bigint

console.log(typeof bignum)

console.log(bignum)
let age = 25; // integer
let pi = 3.14159; // float
let bigNum = 9007199254740991n; // BigInt for huge numbers

console.log(typeof age); // "number"
console.log(typeof bigNum); // "bigint"

let planetName = "Earth";
let greeting = `Hello, welcome to ${planetName}!`; // template literal

console.log(planetName.length); // 5
console.log(greeting.toUpperCase()); // "HELLO, WELCOME TO EARTH!"

let isAlive = true;
let hasAtmosphere = false;

console.log(isAlive && hasAtmosphere); // false
console.log(isAlive || hasAtmosphere); // true

let emptyValue = null;
let notAssigned;

console.log(emptyValue); // null
console.log(notAssigned); // undefined

console.log(typeof emptyValue); // "object" (quirk in JS)
console.log(typeof notAssigned); // "undefined"

let starID1 = Symbol("star");
let starID2 = Symbol("star");

console.log(starID1 === starID2); // false

let universe = {
  galaxies: [
    { name: "Milky Way", stars: 100_000_000_000 },
    { name: "Andromeda", stars: 1_000_000_000_000 }
  ],
  hasDarkMatter: true,
  age: 13.8e9 // billion years
};

console.log(universe.galaxies[0].name); // "Milky Way"
let planet = {};
console.log(planet.mass); // undefined (property doesn’t exist)
console.log(planet.hasOwnProperty("mass")); // false
