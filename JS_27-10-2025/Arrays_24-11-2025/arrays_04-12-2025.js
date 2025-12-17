
var is_arr=function (input){
    //using toString method to get the class of the input and checking if it is "[object Array]"
    if(toString.call(input) ==="[object Array]")
        return true;
    return false;
}
console.log(is_arr("hi"))
console.log(is_arr([2,1,3,4,5]))

//function to clone an array
function clone(array){
    //using the slice method to create a shallow copy of the input array
    return array.slice(0)
}
console.log(clone([1,2,3,4,0]))
console.log(clone([12,3,[4,0]]))


//spread operator(...)which provides probably the easiest and most common way to create a shallow clone of an array
var x=[1,2,3,4,5]
console.log("Original array:")
console.log(x)
var y=[...x]
console.log("Clone of the said array:")
console.log(y)



var n=10;
for(let i=1;i<=n;i++){
    var row= "";
    //lst inner loop print leading spaces to center the stars 

for(let s=1;s<=n-i;s++){
    row+=" ";
    
}
//2nd inner loop print the stars for the current row
//we print 2*i-1 stars so rows are 1,3,5,7,...
for(let j=1;j<=2*i-1;j++){
    row+="*";
}
console.log(row);
}


var arr = [1, 2, 3];
console.log(arr.join());  

var arr = ["apple", "banana", "mango"];
console.log(arr.join(" - "));

//empty separator no space
var nums = [1, 2, 3, 4];
console.log(nums.join(""));

var arr = [1, [2, 3], [4, 5]];
console.log(arr.flat());

//flatten deeper 
var nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2));

var arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));

//foreach
var arr = [1, 2, 3];

arr.forEach((num, i) => {
  console.log("Index:", i, "Value:", num);
});

var arr = [1, 2, 3];

var doubled = arr.map(num => num * 2);

console.log(doubled);

var arr = [1, 2, 3, 4, 5];

var even = arr.filter(num => num % 2 === 0);

console.log(even);

var arr = [1, 2, 3, 4];

var sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);
var arr = [5, 2, 9, 1];

var max = arr.reduce((a, b) => a > b ? a : b);

console.log(max);

var nums = [10, 15, 20, 25, 30];

nums.forEach(n => {
  if (n % 2 !== 0) console.log("Odd:", n);
});


var names = ["text", "value", "key"];

var upper = names.map(n => n.toUpperCase());

console.log(upper);

var words = ["cat", "elephant", "dog", "tiger"];

var longWords = words.filter(w => w.length > 4);

console.log(longWords);

var words = ["hi", "hello", "bye"];

var totalChars = words.reduce((count, word) => count + word.length, 0);

console.log(totalChars);

var fruit = ["apple", "banana", "apple", "mango"];

var count = fruit.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});

console.log(count);

var cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 },
  { item: "Bag", price: 200 }
];

var total = cart.reduce((sum, p) => sum + p.price, 0);

console.log(total);

