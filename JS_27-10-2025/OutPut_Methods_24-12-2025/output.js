console.log("Hello World");
console.log(10 + 20);

alert("Form submitted successfully!");

document.write("Welcome to JavaScript");

document.getElementById("msg").innerHTML = "Hello User";


document.getElementById("msg").textContent = "Hello User";
document.getElementById("msg").innerText = "Hello User";

const students = [
  { name: "Amit", score: 80 },
  { name: "Riya", score: 90 }
];

console.table(students);

console.error("Something went wrong");
console.warn("This is a warning");

const result = document.querySelector("#result");
result.innerHTML = `<b>Score:</b> 95`;

localStorage.setItem("result", "Passed");
console.log(localStorage.getItem("result"));

var name = prompt("Enter your name");
alert("Hello " + name);



