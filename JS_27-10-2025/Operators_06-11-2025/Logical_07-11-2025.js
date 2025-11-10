let a = true;
let b = false;

console.log(a && b); // false → both must be true
console.log(a || b); // true → Atleast one is true
console.log(!a);     // false → inverts true
console.log(!b);     // true → inverts false

//using in conditions
var age = 25;
var hasLicense = true;

// AND (both conditions true)
if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}

// OR (at least one condition true)
if (age >= 18 || hasLicense) {
  console.log("You meet one of the conditions.");
}

// NOT (negate condition)
if (!hasLicense) {
  console.log("You don’t have a license.");
}

//using NOT in conditions
var isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first!");
} else {
  console.log("Welcome back!");
}

//accessing NOT on Non-Boolean Values
//The ! operator converts any value to a Boolean first, then inverts it.
console.log(!0);        // true  (0 is falsy)
console.log(!1);        // false (1 is truthy)
console.log(!"");       // true  (empty string is falsy)
console.log(!"hello");  // false (non-empty string is truthy)
console.log(!null);     // true  (null is falsy)
console.log(!undefined);// true  (undefined is falsy)

//All Logical Operators in One Program
var age = 20;
var hasLicense = true;
var hasCar = false;

// AND (&&) → Both must be true
if (age >= 18 && hasLicense) {
  console.log("✅ You are allowed to drive.");
} else {
  console.log("❌ You are not allowed to drive.");
}

// OR (||) → At least one condition true
if (hasCar || hasLicense) {
  console.log("🚗 You can travel somehow.");
} else {
  console.log("🚶 You have to walk!");
}

// NOT (!) → Reverses a condition
if (!hasCar) {
  console.log("🅿️ You don’t own a car.");
}

// Combine all three
if ((age >= 18 && hasLicense) || !hasCar) {
  console.log("🎉 You meet the travel condition!");
} else {
  console.log("🚫 You don’t meet the travel condition.");
}


//Logical Operators with Non-Booleans
let user = "Khan";
let password = "";

console.log(user && password);   // "" → stops at falsy value
console.log(user || password);   // "Khan" → returns first truthy
console.log(!user);              // false (since "Alice" is truthy)


let username = "admin";
let pswd = "1234";
var isLoggedIn = false;

// Check credentials
if (username === "admin" && pswd === "1234") {
  isLoggedIn = true;
}

// Access condition
if (isLoggedIn || username === "guest") {
  console.log("✅ Access granted!");
} else {
  console.log("❌ Access denied!");
}

// Deny access if NOT logged in
if (!isLoggedIn) {
  console.log("⚠️ Please log in first!");
}
