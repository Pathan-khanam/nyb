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

// Check multiple values
var checkNum = ["pathan", "hi"];

// checkNumbers.forEach(num => {
//   if (numbers.includes(num)) {
//     console.log(`${num} is in the array`);
//   } else {
//     console.log(`${num} is not in the array`);
//   }
// });
