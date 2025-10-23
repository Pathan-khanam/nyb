//how to define array
let empname=[]
let empsalary=[]
let arr=[1,2,3,4,5,6,7,true,false,null,undefined,"hello","hi",{},[],[[]],[[[]],[]],[{}],"Good Afternoon"]
console.log(arr)
//how to access an array
//by using values[]
console.log(arr[7])
console.log(arr.length-1)
console.log(arr[arr.length-1])

//how to add new array
//add at the beginning
arr.unshift("orange","grapes")
console.log(arr)
//add at the end
arr.push("strawberry")
console.log(arr)

//remove from the beginning
arr.shift()
console.log(arr)

//remove from the end
arr.pop()
console.log(arr)

//slice copies part of array(without changing it) two arg passing for slice
arr.slice(1,8)
console.log(arr)

//splice
arr.splice(13,1,"hey")
console.log(arr)
console.log(arr[arr.length-1])
//remove all the items in the array
arr.length=0
console.log(arr.length)

console.log(arr)