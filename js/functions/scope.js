// for(i=0; i<10; i++){
//     if(i% 2 ==0){
//         if(i%4 ==0){
//             continue
//         }
//         console.log(i)
//     }
// }



//global scope

// var a=20
// var b=30

// let c=8
// let d=89

// const E=2
// const f=40


// function sum() {

//     console.log(a+b)
//     console.log(c+d)
// }


// sum()

// console.log(E+f)

//function scope 
//variables declared with var inside a function
//accessible only inside that block
// let a=10
// let b=40
// function add(){
//     var a=50
//     var b=20
//     console.log(a+b)
//     console.log(a)

// }
// console.log(a+b)
// add()

//console.log(a)


//block scope es-6
var a=10
var b=30
let c=50
const d=20

function sum(){
    var a=30
    const b=40
    var c=60
    console.log(a,b,c)
    console.log(a+c)
    console.log(b)
    // {
    //     let c=4
    //     var d=5
    //     console.log(c+d)
        
    // }

}
console.log(a+c+d)


//lexical scope / scope chain


function greet(){
    let msg='hi'
    function hello(){
        console.log(msg)
    }
    hello()
}
greet()
console.log(a+b)


//redeclaration var allowed
//var reinitialization allowed

var a=30
var b=50
var a=10
console.log(a,b)

// let a=10
// let b=30
 a=5
// const b=10;
console.log(a)


//reinitialization let allowed
//let redeclaration not allowed

let x=10
x=19
x=30
var y=60
y=80
const k=30
const p=13
console.log(x,y,k)

//let y=10
y=20
// const z=40
console.log(y)

//const redeclaration not allowed

//const reinitialization also not allowed

let l=70

const h=80
//h=56
console.log(h,l)

// const w=10
// w=9
// console.log(w)


