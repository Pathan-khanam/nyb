// //code executes first 
// //condition checks nxt
// //syntax:-do{//code to run }while (condition);

// //loop runs atleat once (even if condition is false)

// var x=10;
// do{
//     console.log("this runs once")//code executes first
// }while(x<5);//false butthe do block still runs one tym after that loop stops


// //condition is checked after executing the block

// var n=1
// do{
//     console.log("Inside loop:",n)//executes first
//     n++;
// }while(n<=3);//true ->repeats

// //keep asking until user enters valid number 
// //<0 loop stops on 0 and positive values loop repeats on negative values 

// var number;
// do{
//     number=0;//assume user input
//     console.log("Checking input:",number)
// }while(number <0);

// var i=1;
// do{
//     console.log("heading:",i)
//     i++;
// }while(i<=3);



// var x=10;
// do{
//     console.log("hello")

// }while(x<5);
// //functions

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("khan"));

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(2, 3));


const multiply = (a, b) => a * b;

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
