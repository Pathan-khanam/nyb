//for loop
for (var i=1;i<=5; i++){
    console.log(i)
}
//while loop
var i=1;
while(i<=5){
    console.log(i)
    i++;
}

//do while loop
 var i=10;
do{
 console.log(i)
 i++

}while (i<=3)

    //for in
    var student={
        name:"khan",
        age:10,
        city:"hyd"
    }
    for (var key in student){
        console.log(key,':',student[key])
    }
    //for of loop
    var arr=[10,20,30,40,50];
    for(var value of arr){
        console.log(value)

    }
    //1-10 numbers 
    for (var i=1; i<=10; i++){
        console.log(i)
    }

    //even numbers
    for(i=1; i<=100; i++){
        if(i%2 === 0) console.log(i);//i%2===0 checks  if the number is even.
        // even number remainder after dividing by 2=0 if condition is true it will print
    }
    //reverse order even number
    for (var i=100; i>=1; i--){
        if(i % 2 === 0) console.log(i)//loop starts at 100 goes down to 1
    }
//sum of all even numbers 1-100

sum =0 //starting value 
for(var i=2; i<=100;i+=2){//i+=2 jumps only through even numbers (2,4,6...)
    sum+=i//adds each even to sum
}
console.log(sum)

//odd numbers 1-200
for(var i=1; i<=200; i++){
    if(i%2 !== 0) console.log(i)//odd not divisible by 2
}
//factorial 
var m=5
var fact=1// starts with 1
for (var i=1; i<=m; i++){
    fact *=i//fact keeps storing updated value
}
console.log(fact)
// m ->5
// 1*1=1,1*2= 2,2*3=6,6*4=24,24*5=120


//reverse a string 
var hi="hello";
var reverse=""

for(var i=hi.length-1; i>=0;i--){
    reverse += hi[i]
}
console.log(reverse)

var txt="this is a paragraph"
var rev=""
for(var i=txt.length-1;i>=0;i--){
    rev+=txt[i]
}
console.log(rev)


var n="heading"
var reverse=""
for(var i=n.length-1; i>=0; i--){
    reverse+=n[i]
}
console.log(reverse)

//vowels counter 
var s="javascript"
var count=0
var vowels="aeiou";
for(var i=0; i<s.length;i++){
    if(vowels.includes(s[i]))
        count++
}
console.log(s)
console.log(count)

//fibonacci series 10
var a=0
b=1
console.log(a,b)

for (var i=3;i<=10;i++){
    var c=a+b
    console.log(c)
    a=b
    b=c
}

//star pattern
for(var i=1;i<=10;i++){
    var row=""
    for(var j=1; j<=i;j++)row +="*";
    console.log(row)
}


//while loop
// var password=""
// while(password !== "123"){
//     password=prompt("Enter password:")
// }

let cart = [
    { item: "Shirt", price: 799 },
    { item: "Jeans", price: 1299 },
    { item: "Shoes", price: 1999 },
    { item: "Cap", price: 299 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
}

console.log("Total Cart Value:", total);

var messages = ["Hi", "Hello", "Typing...", "Seen", "Ok"];
var count = 0;

for (var i = 0; i < messages.length; i++) {
    count++;
}

console.log("Total Messages:", count);

//while
let pin = "1234";
let userInput = "";
let attempts = 0;

while (userInput !== pin) {
    userInput = prompt("Enter ATM PIN:");
    attempts++;
}

console.log("Correct PIN entered!");
console.log("Attempts taken:", attempts);

let size = 5;

for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === 1 || j === size) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    console.log("_".repeat(5 - i) + "*".repeat(i));
}

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let underscores = "_ ".repeat(i);
    console.log(spaces + underscores);
}

let output = "";

for (let i = 1; i <= 5; i++) {
    output += "_".repeat(5 - i) + i + "\n";
}

console.log(output);

var n = 5;

// Upper half
for (var i = 1; i <= n; i++) {
    console.log("_".repeat(n - i) + "* ".repeat(i));
}

// Lower half
for (var i = n - 1; i >= 1; i--) {
    console.log("_".repeat(n - i) + "* ".repeat(i));
}

//for of
const colors = ["🟢", "🔵", "🟣","⚫","🔴", "🟠", "🟡" ];
var n = colors.length;

// Upper half
for (let color of colors) {
    let i = colors.indexOf(color) + 1;
    console.log(" ".repeat(n - i) + (color + " ").repeat(i));
}

// Lower half
for (let color of [...colors].reverse().slice(1)) {
    let i = colors.indexOf(color) + 1;
    console.log(" ".repeat(n - i) + (color + " ").repeat(i));
}

const rainbow = ["🔴","🟠","🟡","🟢","🔵","🟣"];
var n = rainbow.length;

// Upper half
for (let color of rainbow) {
    let rowIndex = rainbow.indexOf(color) + 1;
    console.log(" ".repeat(n - rowIndex) + color.repeat(rowIndex * 2 - 1));
}

// Lower half
for (let color of [...rainbow].reverse().slice(1)) {
    let rowIndex = rainbow.indexOf(color) + 1;
    console.log(" ".repeat(n - rowIndex) + color.repeat(rowIndex * 2 - 1));
}
