var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

var age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}

var score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Example data
var username = "John";
var password = "12345";
var role = "admin";
var age = 20;

//if statement
if (username === "John") {
  console.log("✅ Username recognized.");
}

//if...else statement
if (password === "12345") {
  console.log("🔓 Password correct. Access granted.");
} else {
  console.log("❌ Incorrect password. Access denied.");
}

//if...else if...else (multi-condition)
if (age < 13) {
  console.log("👶 You are too young to use this site.");
} else if (age < 18) {
  console.log("🧒 You can use the site with supervision.");
} else {
  console.log("👨 You have full access.");
}

//switch statement
switch (role) {
  case "admin":
    console.log("👑 Welcome, Admin! You have full privileges.");
    break;
  case "editor":
    console.log("📝 Welcome, Editor! You can modify content.");
    break;
  case "viewer":
    console.log("👀 Welcome, Viewer! You can read content only.");
    break;
  default:
    console.log("👤 Unknown role. Please contact support.");
}

// Ternary operator
var isLoggedIn = true;
var accessMessage = isLoggedIn ? "✅ You are logged in." : "🔒 Please log in first.";
console.log(accessMessage);

//Nested conditionals
if (isLoggedIn) {
  if (role === "admin") {
    console.log("🛠 You can manage users and settings.");
  } else {
    console.log("📄 You can view and edit your own profile.");
  }
} else {
  console.log("❌ You must log in to continue.");
}


let cartTotal=12000

if(cartTotal>= 10000){
    console.log("You have qualified for free shipping")
}

