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


