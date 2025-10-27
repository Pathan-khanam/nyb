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


//24-10-2025
//searching and checking methods
let Arr=[1,2,3,4,5,6,6,5,5,5,"hi","hello","grapes","orange",true,false,null,undefined,{},[],[[[]],[]],"good","bad"]
//search indexof():-it returns the index of that particular element.if that element is not present then it returns negive value 
console.log(Arr.indexOf(5))
console.log(Arr.indexOf(0))
//search lastindexof():-gives the last occurance of that item from the array
console.log(Arr.lastIndexOf(6))
console.log(Arr.lastIndexOf(0))
//search includes():-checks if element exists(true/false)
console.log(Arr.includes(3))
console.log(Arr.includes(0))

//find():-returns first element matching conditions
let arr1=[1,2,3,3,4,5,7,8,10]
//search 11 is in the array or not if yes print 11 is present or if no print 11 is not present.
//find()
function find(a){
    for (var i of a){
    if(i==11){
        return "11 is present "
    }
}
return "11 is not present"
}
console.log(find(arr1))
//by using includes() to find() (search) 11 is present or not
function find(a){
    if(a.includes(11)){
        return "11 is present in the array"
    }
    else{
        return "11 is not present in the array"
    }
}
console.log(find(arr1))

//using indexof() to find 11 is present or not

function find(b){
    if(b.indexOf(11)){
        return '11 is present in the array'
    }
    else{
        return '11 is not present in the array'
    }
}
 console.log(arr1.indexOf(11))

//another way to find() (search) by using indexof()
 function find(b){
    for(var i=0; i<b.length;i++){
    if(b[i]==1){
return "11 is present"
    }
 }
 return "11 is not present"
}
console.log(arr1.indexOf(10))

//loop
const arr3 = [10, 20, 30, 40];

for (let i = 0; i < arr3.length; i++) {
  console.log(i, arr[i]);
}


const arr4 = [10, 20, 30, 40];

for (const num of arr4) {
  console.log(num);
}

const arr5 = [10, 20, 30, 40];

for (const index in arr5) {
  console.log(index, arr5[index]);
}
//copy
const ar6r = [1, 2, 3];
var copy = [...ar6r];

console.log(copy); // [1, 2, 3]
console.log(copy === ar6r); // false (different array)

const arr7 = [1, 2, 3];
var copy = arr7.slice();

console.log(copy); // [1, 2, 3]

var arr8 = [1, 2, 3];
var copy = Array.from(arr8);

console.log(copy); // [1, 2, 3]
