console.log(x);
var x=10;
x=20

console.log(x);
//reinitialised and redeclare both allowed
var x=30
x=40
console.log(x)


//before calling its not declare or initialised
//console.log(y)
let y=20;
y=40
console.log(y)
//reinitalised will allowed but not redeclaration

y=50
console.log(y)

//both are not allowed
const z=50
//z=40;
console.log(z)
//function declaration are fully hoisted can call before declare
greet();
function greet(){
    console.log("hello");
}

//function expression is not hoisted. only variable declaration is
 //text()
 var text =function (){
console.log("hey")
 }
 text()

 //arrow function treated as a variable not hoisted
 //HAPPY()//type error
 var HAPPY=() =>{
    console.log("khan")
 }
 HAPPY()

 //scope difference 
 let e=80;
 if(true){
    var a=20; 
 }
 console.log(e)

console.log(a)

