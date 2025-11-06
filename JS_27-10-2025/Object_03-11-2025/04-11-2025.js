console.log(Math.sqrt(16));     // Square root: 4
console.log(Math.pow(2, 5));    // Power: 32
console.log(Math.abs(-10));     // Absolute value: 10
console.log(Math.sin(Math.PI/2)); // Sine of 90°: 1
console.log(Math.log10(100));   // Log base 10: 2


let x = 3.141592653589793;
console.log(x.toFixed(2));     // Round to 2 decimals: "3.14"
console.log(Math.floor(x));    // Floor: 3
console.log(Math.ceil(x));     // Ceil: 4
console.log(Math.PI);          // π constant
console.log(Math.E);           // Euler’s number



const car = { brand: "Toyota", model: "Corolla", year: 2022 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

const user = { name: "Alice", age: 25, country: "France" };

Object.keys(user).forEach(key => {
  console.log(key + " -> " + user[key]);
});


const product = { id: 101, name: "Laptop", price: 1200 };

for (let [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}

const numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
  console.log(num);
}





const word = "Hello";
for (let ch of word) {
  console.log(ch);
}

const text = "JavaScript Programming";
const vowels = "aeiouAEIOU";
let count = 0;

for (let ch of text) {
  if (vowels.includes(ch)) count++;
}

console.log("Vowel count:", count);



const str = "Iteration";
let reversed = "";

for (let ch of str) {
  reversed = ch + reversed;
}

console.log("Original:", str);
console.log("Reversed:", reversed);


const message = "JavaScript is Fun!";

console.log(message.toUpperCase());          // Uppercase
console.log(message.toLowerCase());          // Lowercase
console.log(message.replace("Fun", "Powerful")); // Replace
console.log(message.split(" "));             // Split into array
console.log(message.includes("Script"));     // Check substring → true


const sentence = "Better Butter Makes Batter Better";
let countT = 0;

for (let ch of sentence) {
  if (ch.toLowerCase() === 't') countT++;
}

console.log(`Letter 't' appears ${countT} times.`);

const words = "rhythm";

let found = false;
for (let ch of words) {
  if ("aeiou".includes(ch.toLowerCase())) {
    console.log("First vowel:", ch);
    found = true;
    break;
  }
}
if (!found) console.log("No vowels found.");

const texts = "Hello World From JavaScript";
let result = "";

for (let ch of texts) {
  if (ch !== " ") result += ch;
}

console.log("Without spaces:", result);
const msg = "JavaScript Is Fun!";
let upper = 0, lower = 0;

for (let ch of msg) {
  if (ch >= "A" && ch <= "Z") upper++;
  else if (ch >= "a" && ch <= "z") lower++;
}

console.log("Uppercase:", upper, "Lowercase:", lower);
const sentences = "Hello World From JS";

const reversedWords = sentences
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log("Reversed words:", reversedWords);
// Output: "olleH dlroW morF SJ"
const strng = "madam";
let reverse = "";

for (let ch of strng) reverse = ch + reverse;

console.log(str === reverse ? "Palindrome" : "Not a palindrome");
const string = "banana";
const freq = {};

for (let ch of string) {
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log("Character frequency:", freq);
// Output: { b: 1, a: 3, n: 2 }
