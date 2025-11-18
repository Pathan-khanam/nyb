
//hoisting:-Accessing of memory value even before its excution 
//always declare variables at the top to avoid hoisting confusion.
//var:-hoisted,initialized with undefined(value doesn't create but memory location)

console.log(x)// before declaration calling hoisted with undefined
console.log(y)

var x=20;
var y=40;

console.log(x)

//let:-hoisted but not initialized(temporal dead zone)TDZ
//console.log(b)// Cannot access 'b' before initialization-reference error

let a="hi"
let b="hey"

console.log(a)

//const:-hoisted but not initialized(TDZ)
//console.log(m)//ReferenceError m is not defined
const value ="khan"
console.log(value)


//var-redeclaration allowed in the same scope
var z=10;
var z=2;

console.log(z)//overwrites the previous one

//var-deinitialization allowed in the same scope
var y=60;
y=5

console.log(y)//overwrites

//let-declaration not allowed(in the same scope)



