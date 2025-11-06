let a = 8, b = 10;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= 8);  // true
console.log(a <= 7);  // false



console.log("apple" < "banana");   // true
console.log("Zebra" > "apple");    // false (uppercase comes before lowercase)
console.log("cat" === "cat");      // true


let x = 15;
let y = 20;
let z = 15;

console.log("x =", x, ", y =", y, ", z =", z);
console.log("--------------------------------");

// Greater than >
console.log("x > y →", x > y);   // false
console.log("y > x →", y > x);   // true

// Less than <
console.log("x < y →", x < y);   // true
console.log("y < x →", y < x);   // false

// Greater than or equal >=
console.log("x >= y →", x >= y); // false
console.log("x >= z →", x >= z); // true

// Less than or equal <=
console.log("x <= y →", x <= y); // true
console.log("x <= z →", x <= z); // true

// Comparing strings (lexicographical)
let str1 = "apple";
let str2 = "banana";
console.log("str1 > str2 →", str1 > str2); // false
console.log("str1 < str2 →", str1 < str2); // true

// Comparing mixed types
console.log("'25' > 20 →", "25" > 20);    // true ("25" converted to number)
console.log("'10' <= 5 →", "10" <= 5);    // false
