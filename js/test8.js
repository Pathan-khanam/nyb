// let marks =[87,93,64,95,90,91]

// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);


let n = prompt("enter a number")

let arr =[];
for(let i=1; i<=n; i++) {
    arr[i-1]=i;
}
 console.log(arr);


let sum=arr.reduce((res,curr) => {
    return res+curr;
})
console.log(sum)

let factorial = arr.reduce((res,curr) =>{
     return res*curr;
 })
 console.log("factorial =", factorial)
 