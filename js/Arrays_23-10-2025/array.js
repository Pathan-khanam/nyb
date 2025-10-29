// //how to define array
// let empname=[]
// let empsalary=[]
// let arr=[1,2,3,4,5,6,7,true,false,null,undefined,"hello","hi",{},[],[[]],[[[]],[]],[{}],"Good Afternoon"]
// console.log(arr)
// //how to access an array
// //by using values[]
// console.log(arr[7])
// console.log(arr.length-1)
// console.log(arr[arr.length-1])

// //how to add new array
// //add at the beginning
// arr.unshift("orange","grapes")
// console.log(arr)
// //add at the end
// arr.push("strawberry")
// console.log(arr)

// //remove from the beginning
// arr.shift()
// console.log(arr)

// //remove from the end
// arr.pop()
// console.log(arr)

// //slice copies part of array(without changing it) two arg passing for slice
// arr.slice(1,8)
// console.log(arr)

// //splice
// arr.splice(13,1,"hey")
// console.log(arr)
// console.log(arr[arr.length-1])
// //remove all the items in the array
// arr.length=0
// console.log(arr.length)

// console.log(arr)


// //24-10-2025
// //searching and checking methods
// let Arr=[1,2,3,4,5,6,6,5,5,5,"hi","hello","grapes","orange",true,false,null,undefined,{},[],[[[]],[]],"good","bad"]
// //search indexof():-it returns the index of that particular element.if that element is not present then it returns negive value 
// console.log(Arr.indexOf(5))
// console.log(Arr.indexOf(0))
// //search lastindexof():-gives the last occurance of that item from the array
// console.log(Arr.lastIndexOf(6))
// console.log(Arr.lastIndexOf(0))
// //search includes():-checks if element exists(true/false)
// console.log(Arr.includes(3))
// console.log(Arr.includes(0))

// //find():-returns first element matching conditions
// let arr1=[1,2,3,3,4,5,7,8,10]
// //search 11 is in the array or not if yes print 11 is present or if no print 11 is not present.
// //find()
// function find(a){
//     for (var i of a){
//     if(i==11){
//         return "11 is present "
//     }
// }
// return "11 is not present"
// }
// console.log(find(arr1))
// //by using includes() to find() (search) 11 is present or not
// function find(a){
//     if(a.includes(11)){
//         return "11 is present in the array"
//     }
//     else{
//         return "11 is not present in the array"
//     }
// }
// console.log(find(arr1))

// //using indexof() to find 11 is present or not

// function find(b){
//     if(b.indexOf(11)){
//         return '11 is present in the array'
//     }
//     else{
//         return '11 is not present in the array'
//     }
// }
//  console.log(arr1.indexOf(11))

// //another way to find() (search) by using indexof()
//  function find(b){
//     for(var i=0; i<b.length;i++){
//     if(b[i]==1){
// return "11 is present"
//     }
//  }
//  return "11 is not present"
// }
// console.log(arr1.indexOf(10))




// //loop 27-10-2025
// const arr3 = [10, 20, 30, 40];

// for (let i = 0; i < arr3.length; i++) {
//   console.log(i, arr[i]);
// }


// const arr4 = [10, 20, 30, 40];

// for (const num of arr4) {
//   console.log(num);
// }

// const arr5 = [10, 20, 30, 40];

// for (const index in arr5) {
//   console.log(index, arr5[index]);
// }
// //copy
// const ar6r = [1, 2, 3];
// var copy = [...ar6r];

// console.log(copy); // [1, 2, 3]
// console.log(copy === ar6r); // false (different array)

// const arr7 = [1, 2, 3];
// var copy = arr7.slice();

// console.log(copy); // [1, 2, 3]

// var arr8 = [1, 2, 3];
// var copy = Array.from(arr8);

// console.log(copy); // [1, 2, 3]


// //


// Basic array
let number = [10, 20, 30, 40, 50];

// Mixed data types
let mixed = [1, "hello", true, null];
// Create array from a string
let str = "hello";
let letters = Array.from(str);
console.log(letters); // ['h', 'e', 'l', 'l', 'o']

// Create array from a Set (removes duplicates)
let set = new Set([1, 2, 2, 3]);
let uniqueArray = Array.from(set);
console.log(uniqueArray); // [1, 2, 3]

// Create array using a map function
let squares = Array.from([1, 2, 3, 4], x => x * x);
console.log(squares); // [1, 4, 9, 16]

var numbers = [10, 20, 30, 40, 50];

console.log(numbers.at(0));  // 10 (first)
console.log(numbers.at(-1)); // 50 (last)
console.log(numbers.at(-2)); // 40 (second last)

let arr = [1, 2, 3, 4, 5];

// Fill entire array with 0
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// Fill part of array
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 1, 4); // value 9, start index 1, end index 4 (not inclusive)
console.log(arr2); // [1, 9, 9, 9, 5]

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

let numb = [40, 100, 1, 5, 25, 10];

// Ascending order
numb.sort((x, b) => x - b);
console.log(numb); // [1, 5, 10, 25, 40, 100]

// Descending order
numb.sort((z, b) => b - z);
console.log(numb); // [100, 40, 25, 10, 5, 1]

let nums = [10, 1, 5, 3];
nums.sort((m, b) => m - b).reverse();
console.log(nums); // [10, 5, 3, 1]

// Create array from string
let lettes = Array.from("ChatGPT");
console.log("From:", lettes);

// Access last letter
console.log("At(-1):", lettes.at(-1));

// Fill middle section
letters.fill("*", 2, 5);
console.log("After fill:", lettes);

// Numbers to sort
let nus = [4, 1, 9, 2, 7, 3];
console.log("Original:", nus);

// Sort ascending
nus.sort((a, b) => a - b);
console.log("Ascending:", nus);

// Sort descending
nus.sort((a, b) => b - a);
console.log("Descending:", nus);

// Reverse array
nus.reverse();
console.log("Reversed:", nus);

let word = "JavaScript";
let upper = Array.from(word, letter => letter.toUpperCase());
console.log(upper); // ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']

// Create an array [0, 1, 2, 3, 4, 5]
var num = Array.from({ length: 6 }, (_, i) => i);
console.log(num); // [0, 1, 2, 3, 4, 5]

let dup = [1, 2, 2, 3, 4, 4, 5];
let unique = Array.from(new Set(dup));
console.log(unique); // [1, 2, 3, 4, 5]

let colors = ["red", "green", "blue", "yellow"];
console.log(colors.at(-1)); // "yellow"
console.log(colors.at(-2)); // "blue"

let data = [10, 20, 30, 40];
let last = data.at(data.length - 1);
console.log(last); // 40
let empty = new Array(5).fill("A");
console.log(empty); // ['A', 'A', 'A', 'A', 'A']

var arrr = [1, 2, 3, 4, 5];
arr.fill(0, 2); 
console.log(arrr); // [1, 2, 0, 0, 0]

let zeros = Array(10).fill(0);
console.log(zeros); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let names = ["Zoe", "Anna", "Mike", "Bob"];
names.sort();
console.log(names); // ['Anna', 'Bob', 'Mike', 'Zoe']


let fruit = ["apple", "kiwi", "banana", "pear"];
fruit.sort((a, b) => a.length - b.length);
console.log(fruits); // ['kiwi', 'pear', 'apple', 'banana']


let letter = ["d", "a", "c", "b"];
letters.sort().reverse();
console.log(letter); // ['d', 'c', 'b', 'a']

// Create array from 1 to 10
let arrz = Array.from({ length: 10 }, (_, i) => i + 1);
console.log("Original:", arrz);

// Fill part of it
arr.fill(99, 3, 6);
console.log("After fill:", arr);

// Sort descending
arr.sort((a, b) => b - a);
console.log("Descending:", arr);

// Reverse
arr.reverse();
console.log("Reversed:", arr);

// Access with at()
console.log("Last element:", arr.at(-1));
