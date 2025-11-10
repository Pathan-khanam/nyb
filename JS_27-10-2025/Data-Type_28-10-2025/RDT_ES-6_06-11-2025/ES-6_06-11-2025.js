let map = new Map();
map.set('name', 'sara');
map.set('age', 25);
map.set(true, 'boolean key');

console.log(map.get('name')); // Alice
console.log(map.size); // 3
console.log(map.has('age')); // true

map.delete('age');
console.log(map.has('age')); // false


for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}


//weakmap
let wm = new WeakMap();

let obj = {};
wm.set(obj, 'secret data');

console.log(wm.get(obj)); // "secret data"

obj = null; // The object is now eligible for garbage collection
// The entry in WeakMap will automatically be removed.


//set
let set = new Set([1, 2, 2, 3, 4]);
console.log(set); // Set(4) {1, 2, 3, 4}

set.add(5);
console.log(set.has(3)); // true
set.delete(2);
console.log(set.size); // 4

for (let value of set) console.log(value);


//weakset
let ws = new WeakSet();
let user = { name: "Alice" };

ws.add(user);
console.log(ws.has(user)); // true

user = null; // The object can now be garbage collected

//date
let now = new Date();
console.log(now); // Current date and time

let birthday = new Date('1995-12-17T03:24:00');
console.log(birthday.getFullYear()); // 1995
console.log(birthday.getMonth()); // 11 (months are 0-indexed)
console.log(birthday.getDate()); // 17


now.getFullYear(); // 2025
now.getMonth(); // 0-11
now.getDate(); // 1-31
now.toISOString(); // "2025-11-06T10:23:45.123Z"


//regular expression
let regex = /hello/i;
console.log(regex.test('Hello world')); // true

let str = "apple, banana, cherry";
let fruits = str.match(/a\w+/g);
console.log(fruits); // ["apple", "anana"]


let user1 = { id: 1 };
let user2 = { id: 2 };

let lastLogin = new Map();
lastLogin.set(user1, "2025-11-06");
lastLogin.set(user2, "2025-10-29");

console.log(lastLogin.get(user1)); // 2025-11-06


let prices = new Map([
  ["apple", 100],
  ["banana", 80],
  ["mango", 150]
]);

for (let [fruit, price] of prices) {
  console.log(`${fruit}: ₹${price}`);
}

let pattern = /\d+/;   // one or more digits
console.log(pattern.test("123")); // true

let nonDigit = /\D+/;  // one or more non-digits
console.log(nonDigit.test("abc")); // true

let text = "Hello World JS";
let result = text.replace(/\s/g, "-");
console.log(result); // Hello-World-JS

let strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(strongPassword.test("Pass@123")); // true
console.log(strongPassword.test("pass123"));  // false


let date = new Date(2025, 10, 10, 10, 30, 0); // Month is 0-indexed (10 = November)
console.log(date);

let specificDate = new Date("2025-11-10T10:30:00");
console.log(specificDate); // Mon Nov 10 2025 10:30:00

let today = new Date();

console.log(today.getFullYear()); // 2025
console.log(today.getMonth());    // 10 (November — months start from 0)
console.log(today.getDate());     // 10 (day of month)
console.log(today.getDay());      // 1 (Monday — Sunday=0)
console.log(today.getHours());    // 14
console.log(today.getMinutes());  // 30
console.log(today.getSeconds());  // 45

let date1 = new Date("2025-11-10");
let date2 = new Date("2025-11-15");

if (date1 < date2) {
  console.log("date1 comes before date2");
}
