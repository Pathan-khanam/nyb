//AND &
var a = 5; // 0101
var b = 3; // 0011

console.log(a & b); // 0001(decimal) → 1

//OR |
var a = 5; // 0101
var b = 3; // 0011

console.log(a | b); // 0111 → 7

//Bitwise XOR (^)

// | a | b | a ^ b |
// | - | - | ----- |
// | 0 | 0 | 0     |
// | 0 | 1 | 1     |
// | 1 | 0 | 1     |
// | 1 | 1 | 0     |

var a = 5; // 0101
var b = 3; // 0011

console.log(a ^ b); // 0110 → 6

//Bitwise NOT (~)

var a = 5; // 0101

console.log(~a); //1010 → ~5 = -(5 + 1) = -6

//Left Shift (<<)
var a = 5; // 0101
//a << n = a × 2ⁿ
console.log(a << 1); // 1010 → 10
console.log(a << 2); // 10100 → 20

//Right Shift (>>)
var a = 8;  // 00001000
console.log(a >> 1); // 00000100 → 4

var b = -8; // 11111000 (two’s complement)
console.log(b >> 1); // 11111100 → -4

//a >> n = a ÷ 2ⁿ (rounded down, sign preserved)

//Zero-Fill Right Shift (>>>)
var a = 8;    // 00001000
console.log(a >>> 1); // 00000100 → 4

var b = -8;   // 11111000
console.log(b >>> 1); // 01111100 → 2147483644


var a = 5; // 0101
var b = 3; // 0011

console.log(a & b);   // 1
console.log(a | b);   // 7
console.log(a ^ b);   // 6
console.log(~a);      // -6
console.log(a << 1);  // 10
console.log(a >> 1);  // 2
console.log(a >>> 1); // 2


//ternary
let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";

console.log(message);

let score = 85;
let grade = (score >= 90) ? "A"
           : (score >= 75) ? "B"
           : (score >= 60) ? "C"
           : "F";

console.log("Grade:", grade);

function checkNumber(num) {
  return (num > 0) ? "Positive"
       : (num < 0) ? "Negative"
       : "Zero";
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-3));  // Negative
console.log(checkNumber(0));   // Zero





