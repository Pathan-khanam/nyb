//functions

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("khan"));

var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

var multiply = (a, b) => a * b;

function power(base, exp = 2) {
  return base ** exp;
}

power(5); 


function greet() {
    console.log("Hello!");
}
greet();   // Output: Hello!


function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Output: 8


function welcome(name) {
    return "Welcome, " + name + "!";
}

console.log(welcome("Aarav"));


function checkAge(age) {
    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are a minor.";
    }
}

console.log(checkAge(16));


function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbers(); // Prints 1 to 5

function greetUser(name = "Guest") {
    console.log("Hello, " + name);
}

greetUser();       // Hello, Guest
greetUser("Ravi"); // Hello, Ravi
