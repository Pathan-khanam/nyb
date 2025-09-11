//A block of code designed to perform a specific task, which can be called or invoked as needed.

// function myFunction() {//parameter
//     console.log("welcom of functions")
//     console.log("im learning js:")

// }

// myFunction();
// myFunction();//argument


// function sum(x,y){
//     //console.log(x+y);
//  S = x+y;
// console.log("before return")
// return S;
// }
// let val=sum(3,4);
// console.log(val);


//**Function parameters behave like local variables within a function and have block scope.


function sum(a,b){
    return a+b;
}
const arrowSum =(a,b) => {
    console.log(a+b);

};

function mul(a,b){
    return a*b;

}
const arrowMul=(a,b) => {
    console.log(a*b);
};