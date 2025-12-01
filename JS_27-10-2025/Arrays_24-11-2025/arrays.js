var num=[1,2,3,4,5,6,7,8,9,0,10]


console.log(num)
num.splice(0,0,"hey")
console.log(num)
num.splice(num.length,0,"HI")
console.log(num)

var middle=Math.floor(num.length/2)
num.splice(middle,0, "hello")
console.log(num)
 num.splice(5,0,"bye")
 console.log(num)
 num.splice(2,0,"gm")

 console.log(num)
 num.splice(4,0,"gA")
 console.log(num)

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix)
console.log(matrix[0][1]);  // 2 (First row, second column)
console.log(matrix[2][1])


num.push("string");
console.log(num)

num.pop();
console.log(num)

num.shift("20")
console.log(num)

num.unshift()
console.log(num)
//Copies part of array (does not change original).
var hi=num.slice(2,7)
console.log(hi)

var items = ["a", "b", "c", "d",1,2,3,6,4,5];
var part = items.slice(3,7);
console.log(part);  
//Creates a new array by transforming each element.
var hello=num.map(n => n*2)
console.log(hello)
// Creates a new array with elements that pass a condition.
var txt=num.filter(n => n% 2===0)
console.log(txt)

//Adds/removes elements anywhere in the array.

var total = num.reduce((sum, n) => sum + n, 0);
console.log(total); 


num.forEach(n => console.log(n));
console.log(num)


let menu = ["Home", "About", "Services", "Contact"];

menu.forEach(item => {
  console.log("Menu Item:", item);
});
 var mk={
    com:"hi",
    m:"n",
    e:"56"
 }

 var{com,m}=mk
 console.log(com)


 var c={
    m:"wood",
    legs:4
 }
 let accesor="m"
 console.log(c[accesor])
 
 var traffic={
    red:function(){
        console.log("stop")
    },
    yellow: function(){
        console.log("ready")
    },
    green: function(){
        console.log("Green")
    }
 }
 console.log(traffic.yellow)
 traffic.green()



var firstEven = num.find(n => n % 2 === 0);
console.log(firstEven); 

console.log(num.includes(20))

let letters = ["a", "b", "c"];
console.log(letters.indexOf("b"));


num.sort((a, b) => a - b);
console.log(num);

let a = [1, 2];
let b = [3, 4];
var c = a.concat(b);
console.log(c);


num.reverse();
console.log(num);




