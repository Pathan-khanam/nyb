//scope defines thw visibility and life tym of variables
//global
//function scope
//block scope
//global scope

var global="I'm global";

function show(){
    console.log(global)
}

console.log(global);


//function scope

function myFunc(){
    var hello=  "I'm inside function"
    console.log(hello);//works
}
myFunc()
//console.log(hello)//error

//block scope
for (let i = 0; i < 3; i++) {
  console.log("let i inside loop:", i);
}

try {
  console.log(i); // ❌ ReferenceError
} catch {
  console.log("i is not accessible outside the loop");
}

// Using var:
for (var j = 0; j < 3; j++) {
  console.log("var j inside loop:", j);
}
console.log("var j outside loop:", j); 

{
  const greeting = "Hello, Block!";
  console.log(greeting); // ✅ Works
}
try {
  console.log(greeting); // ❌ ReferenceError
} catch {
  console.log("greeting is block-scoped!");
}



//lexical scope

let name = "Outer";

function outer() {
  let name = "Inner";

  function inner() {
    console.log(name); // ✔️ "Inner"
  }

  return inner;
}

let fn = outer();
fn(); 




let a = 1;

function first() {
  let b = 2;

  function second() {
    let c = 3;
    console.log(a, b, c);
  }

  second();
}

first();


let M = 1;

function first() {
  let b = 2;

  function second() {
    let c = 3;
    //console.log(M, b, c); // ✔️ 1 2 3
  }

  second();
}

first();


let x = 5;

function test() {
  let x = 10; // shadows the outer x
  console.log(x); // 10
}

test();
console.log(x); // 5


// Global array
var globalAnimals = ["Lion", "Tiger", "Bear"];

if (true) {
  let blockAnimals = ["Elephant", "Giraffe"];
  const constAnimals = ["Penguin", "Parrot"];

  // Inside block
  console.log("Inside block:", blockAnimals, constAnimals, globalAnimals);
}

// Outside block
console.log("Global array:", globalAnimals);

try {
  console.log(blockAnimals); // ❌ ReferenceError
} catch {
  console.log("blockAnimals is NOT accessible outside block!");
}

try {
  console.log(constAnimals); // ❌ ReferenceError
} catch {
  console.log("constAnimals is NOT accessible outside block!");
}


if (true) {
  let fruits = ["Apple", "Banana"];
  fruits.push("Mango"); // ✅ Works
  console.log("Inside block:", fruits); // ["Apple", "Banana", "Mango"]

  fruits = ["Orange", "Peach"]; // ✅ Works because `let` can be reassigned
}

const veggies = ["Carrot", "Broccoli"];
veggies.push("Spinach"); // ✅ Works! You can modify the contents of const arrays
// veggies = ["Tomato"]; // ❌ Error! Cannot reassign const variable


var arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

for (var i = 0; i < arr1.length; i++) {
  console.log("var loop:", arr1[i]);
}
console.log("i after var loop:", i); // ✅ Accessible, i = 3

for (let j = 0; j < arr2.length; j++) {
  console.log("let loop:", arr2[j]);
}
try {
  console.log(j); // ❌ ReferenceError
} catch {
  console.log("j is block scoped in loop");
}

function scopeWithArray() {
  var localArr = ["Dog", "Cat"];
  let localLetArr = ["Rabbit", "Hamster"];

  console.log("Inside function:", localArr, localLetArr);
}

scopeWithArray();

try {
  console.log(localArr); // ❌ ReferenceError
} catch {
  console.log("localArr is not accessible outside the function!");
}

try {
  console.log(localLetArr); // ❌ ReferenceError
} catch {
  console.log("localLetArr is not accessible outside the function!");
}


function createArrayClosure() {
  let arr = ["Red", "Green", "Blue"];
  return function() {
    arr.push("Yellow");
    console.log("Closure array:", arr);
  };
}

const arrClosure = createArrayClosure();
arrClosure(); // ["Red", "Green", "Blue", "Yellow"]
arrClosure(); // ["Red", "Green", "Blue", "Yellow", "Yellow"]
