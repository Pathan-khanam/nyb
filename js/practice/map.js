// let nums=[67,57,89];

// let newArr =nums.map((val)  => {
//     return val*2;

// });

// console.log(newArr);

// let calcSquare =(num) => {
//     console.log(num*num);
// };

// reduce method

let arr =[8,10,7,3,2]

const output = arr.reduce((prev ,curr) => {
    return prev > curr? prev : curr;
});

console.log(output);
