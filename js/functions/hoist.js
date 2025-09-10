
//var is hoisted
console.log(x)

var x=10
console.log(x)


//let & const is not hoisted

// console.log(z)
// let y=20
// const z = 40
// console.log(y)


//functions declaration is fully hoisted

greet()

function greet(){
    console.log('hello')
}
greet()


//function expressions are not hoisted 

// sayHi()

// const sayHi =function (){
//     console.log('hey')
// }
// sayHi()


//arrow 

a()

var a = () => {
    console.log(56)
}

a()