let a = 10;

a += 5;  // a = a + 5 → 15
a -= 3;  // a = a - 3 → 12
a *= 2;  // a = a * 2 → 24
a /= 4;  // a = a / 4 → 6
a %= 4;  // a = a % 4 → 2
a **= 3; // a = a ** 3 → 8

console.log(a)



let x = 10;

console.log("Initial value:", x);

// 🟢 Arithmetic Assignment Operators
x += 5;   // x = x + 5
console.log("After += 5  →", x);  // 15

x -= 3;   // x = x - 3
console.log("After -= 3  →", x);  // 12

x *= 2;   // x = x * 2
console.log("After *= 2  →", x);  // 24

x /= 4;   // x = x / 4
console.log("After /= 4  →", x);  // 6

x %= 4;   // x = x % 4
console.log("After %= 4  →", x);  // 2

x **= 3;  // x = x ** 3  (Exponentiation)
console.log("After **= 3 →", x);  // 8
