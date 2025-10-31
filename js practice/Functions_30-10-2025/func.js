// a section of reusable code declare code once and use it whenever u want call the function to execute that code
function functionName(){
 return;
}
//call by using func name

//function expression 
let hi=function (){
return value;
}
// calling with variable name
//arrow 
let hello=() => {
    return value;
}
//call by using variable name

//another way using arrow its a concise way
var value=(a,b)=> a+b; 

console.log(value(20,80))

//iife 
// (function(){
//     console.log("immediately invoked function expression")
// })();
// (function()
//  {
//   console.log("hello");
// })();

function HBD(username,age){
    console.log("HAPPY BIRTHDAY PATHAN");
    console.log("This day brings u happiness n blessing")
    console.log(`HAPPY BIRTHDAY ${username}`)
    console.log(`Pookie turns ${age}`)
}
HBD()
HBD()
HBD('khan',2);


function add(x,y){
    let result= x+y;
    return result;
}
let val=add(2,10)
console.log(val)


function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
console.log(add(10,5))
console.log(div(30,10))
console.log(sub(10,30))
console.log(mul(20,40))



function isEven(num){
    if(num % 2 === 0){
        return `${num} is an even number`;
    }
    else{
        return `${num} is not an even number`;
    }
}
console.log(isEven(20))



//ternary operator
function isEven(num){
    return num % 2 ? true : false;
}

function isValid(email){
    // if(email.includes("@")){
    //     return `${email} is valid`;
    // }
    // else{
    //     return `${email} is not valid`;
    // }
    return email.includes('@')? true :false;
}
console.log(isValid("khan@flask.com"))
console.log(isValid("khanflask.com"))
console.log(isValid("khanval@text.com"))