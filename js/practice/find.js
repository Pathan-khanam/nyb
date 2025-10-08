let a=30;
let b=50;
//if else
function findMax(a,b){
    if(a>b){
        return a;
    }else {
        return b;
    }
}
let max= findMax(20,30)
console.log(max)
console.log(findMax(30,80))

//math method
function findMax(a,b){
    return Math.max(a,b);
}
console.log(findMax(30,50))

//ternary operator
const Max= (a,b) => a>=b ? a:b

console.log(findMax(2,9));