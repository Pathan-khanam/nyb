var arr = [10, 20, 30, 20, 10];
console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(20));

var numbers = [2, 4, 6, 8];
console.log(numbers.includes(4));
console.log(numbers.includes(5));


arr.splice(1, 2);
console.log(arr);

var users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Meena", active: true }
];
console.log(users)

let activeUsers = users.filter(user => user.active === true);
console.log(activeUsers);

console.log(users.active)

const fruits = ["apple", "banana", "cherry"];
var numbers = [1, 2, 3, 4, 5];
var booleans = [true, false, true];
fruits.push("orange");        // Add at end: ["apple","banana","cherry","orange"]
numbers.pop();                // Remove last: [1,2,3,4]
booleans.includes(false);     // true
var mixed = [42, "hello", true, null, {name: "Alice"}, [1,2,3]];
mixed[1];            // "hello"
mixed[4].name;       // "Alice"
mixed[5][2];         // 3
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrix[0][1];       // 2
matrix[2][2];       // 9
for(let row of matrix){
  for(let num of row){
    console.log(num);
  }
}
const complex = [
  1,
  ["a", "b", ["x","y"]],
  {name:"Bob", hobbies:["reading","gaming"]},
  true
];

console.log(complex[1][2][0]); // "x"
console.log(complex[2].hobbies[1]); // "gaming"
