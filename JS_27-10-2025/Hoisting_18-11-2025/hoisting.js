
// //hoisting:-Accessing of memory value even before its excution 
// //always declare variables at the top to avoid hoisting confusion.
// //var:-hoisted,initialized with undefined(value doesn't create but memory location)

// console.log(x)// before declaration calling hoisted with undefined
// console.log(y)

// var x=20;
// var y=40;

// console.log(x)

// //let:-hoisted but not initialized(temporal dead zone)TDZ
// //console.log(b)// Cannot access 'b' before initialization-reference error

// let a="hi"
// let b="hey"

// console.log(a)

// //const:-hoisted but not initialized(TDZ)
// //console.log(m)//ReferenceError m is not defined
// const value ="khan"
// console.log(value)


// //var-redeclaration allowed in the same scope
// var z=10;
// var z=2;

// console.log(z)//overwrites the previous one

// //var-deinitialization allowed in the same scope
// var y=60;
// y=5

// console.log(y)//overwrites


//19-11-2025

//let-redeclaration is trying to declare the same variable again in the same scope.
//let-declaration not allowed(in the same scope)->throw a syntax error
//let- can be declared in a different block scope

//same block

let H=20;
//let H=30; //syntaxerror

//different block scope
let a=20//outer block 
//let a=30;//syntax error
{
    let a=40;//allowed, new variable in inner block
    console.log(a);
}
console.log(a);//outer block




//let -reinitialization is when you try to assign a value to a variable at the time of declaration again.
//let- cannot be initialized again in the same scope
//let- must be declared once per scope

let b=5;
//let b=10;//syntaxerror

//let-reassigning is when you change the value of an already declared variable(without redeclaring).
let c= 15;
c=30;
console.log(c)// overwrites old value


//const-redeclaration is trying to declare the same variable again in the same scope.
//not allowed in the same scope 
//allowed in different block scope (because its a new variable)

const x=10;
//const x=20;
{
    const x=40;
    console.log(x);
}
console.log(x);


//const-reassignment is trying to give a new value to an already declared variable 
//const-not allowed for primitive values
//const-allowed for object properties or array elements(because object reference stays the same)

const y=20;
//y=50;

const obj={
    name:"sara"
}
obj.name="khan";//allowed
//obj={}//error

const arr=[1,2];
arr.push(3);//allowed
//arr=[4,5]//error
