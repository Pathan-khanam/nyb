//arrays
let arr=[3,6,9,20,30,40,5,9];
console.log(arr[2])
//replace 2nd element with 25
arr[1]=25
console.log(arr[1])
console.log(arr)
//array length
console.log(arr.length)
//accesss last element dynamically
console.log(arr[arr.length-1]);
//add value to end
arr.push(90)
console.log(arr)
//dlt from end
arr.pop()
console.log(arr)
//add to start
arr.unshift(4)
console.log(arr)
//dlt from start
arr.shift()
console.log(arr)
//return piece of code
arr.slice(0,arr.length-1)
console.log(arr)

//find max without math.max
function findMax(arr){
    if(arr.length===0){return "array is empty"}
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}
console.log(findMax([4,932,60,6,5,240]))
//find min without math.min
function findMin(arr){
    if(arr.length===0){return "array is empty"}
    let min=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([7,0,33,8,26,20]))


function arraySum(arr){
    if(arr.length===0){
        return 0;
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i];
    }
    return sum;
}
console.log(arraySum([642,90,64,72,74,8]))

//arrayavg(arr) returns avg of numbers round the result using math.round( )and return0 for empty array
function arrayavg(arr){
    if(arr.length===0){
        return 0;
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]

    }
    let avg=sum/arr.length;
    return Math.round(avg*100)/100;
}
console.log(arrayavg([10,19]))
console.log(arrayavg([]))

//odd and even
function countEven(arr){
    if(arr.length===0){
        return "even"
    }
    let even=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0)even++;
    }
    return even;

}
console.log(countEven([2,4,5,7,8,9,2]))

function countodd(arr){
    if(arr.length===0){return odd}
    let odd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0)odd++;
    }
    return odd
}
console.log(countodd([2,1,3,5,6,7,8,9]))

function countEvenOdd(arr){
    if(arr.length===0){return "even or odd"}
    let even=0,odd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0)even++;
        else {
            odd++
        }
    }
    return {even,odd}
}
console.log(countEvenOdd([23,3,4,5,6,9,7,8])) 
//reverse array
function reverseArray(arr){
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,2,3,4]))
//positive values
function sumpositive(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0)
            sum+=arr[i];
    }
    return sum
};
console.log(sumpositive([-4,-6,9,6,8]))