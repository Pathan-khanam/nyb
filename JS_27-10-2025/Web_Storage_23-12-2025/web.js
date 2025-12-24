function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Save
localStorage.setItem("username", "Amit");

// Load
console.log(localStorage.getItem("username"));

var student = {
  name: "Riya",
  score: 88
};

localStorage.setItem("student", JSON.stringify(student));

// Read
var data = JSON.parse(localStorage.getItem("student"));
console.log(data.name, data.score);

// Save theme
localStorage.setItem("theme", "dark");

// Apply theme on reload
const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.body.style.background = "#222";
  document.body.style.color = "#fff";
}

// On login
localStorage.setItem("isLoggedIn", "true");
// Check login
if (localStorage.getItem("isLoggedIn") === "true") {
  console.log("User logged in");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({ item: "Book", price: 200 });

localStorage.setItem("cart", JSON.stringify(cart));
// Read cart
console.log(JSON.parse(localStorage.getItem("cart")));
sessionStorage.setItem("otp", "123456");

console.log(sessionStorage.getItem("otp"));



const emailInput = document.querySelector("#email");

// Restore value on page load
emailInput.value = localStorage.getItem("email") || "";

// Save value on input
emailInput.addEventListener("input", () => {
  localStorage.setItem("email", emailInput.value);
})


var btn = document.querySelector("#themeBtn");

const currentTheme = localStorage.getItem("theme") || "light";
document.body.className = currentTheme;

btn.addEventListener("click", () => {
  const newTheme = document.body.className === "light" ? "dark" : "light";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});

sessionStorage.setItem("username", "Amit");
console.log(sessionStorage.getItem("username")); // Amit
sessionStorage.removeItem("username");
sessionStorage.clear();
var student = { name: "Riya", score: 88 };

// Save
sessionStorage.setItem("student", JSON.stringify(student));

// Load
var data = JSON.parse(sessionStorage.getItem("student"));
console.log(data.name, data.score); // Riya 88
const input = document.querySelector("#scoreInput");
var btn = document.querySelector("#saveScore");
const display = document.querySelector("#lastScore");

// Restore last score in this session
display.textContent = sessionStorage.getItem("lastScore") 
  ? `Last Score: ${sessionStorage.getItem("lastScore")}` 
  : "No score yet";

btn.addEventListener("click", () => {
  const score = input.value;
  sessionStorage.setItem("lastScore", score);
  display.textContent = `Last Score: ${score}`;
});
