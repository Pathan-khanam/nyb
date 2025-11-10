console.log(5 == "5");   // true  → values equal (type converted)
console.log(5 === "5");  // false → different types
console.log(10 != "10"); // false
console.log(10 !== "10"); // true



console.log(5 == "5");    // true (string → number)
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(null == undefined); // true


let a = 10;
let b = 20;
let c = "10";

console.log("a =", a, ", b =", b, ", c =", c);
console.log("--------------------------------");

//Equality Operators
console.log("a == b →", a == b);      // false (10 != 20)
console.log("a == c →", a == c);      // true  ("10" converted to number)
console.log("a === c →", a === c);    // false (different types)
console.log("a != b →", a != b);      // true  (10 != 20)
console.log("a !== c →", a !== c);    // true  (different type)

//Relational Operators
console.log("a > b →", a > b);        // false
console.log("a < b →", a < b);        // true
console.log("a >= 10 →", a >= 10);    // true
console.log("b <= 10 →", b <= 10);    // false

//Comparing Strings
let name1 = "apple";
let name2 = "banana";
console.log("name1 < name2 →", name1 < name2);  // true ("apple" < "banana")
console.log("name1 > name2 →", name1 > name2);  // false

//Comparing Booleans
console.log("true == 1 →", true == 1);   // true
console.log("false == 0 →", false == 0); // true
console.log("true === 1 →", true === 1); // false (different types)

//Comparing Different Types
console.log("'5' < 10 →", "5" < 10);     // true ("5" → 5)
console.log("'15' > 10 →", "15" > 10);   // true
console.log("null == undefined →", null == undefined);   // true
console.log("null === undefined →", null === undefined); // false