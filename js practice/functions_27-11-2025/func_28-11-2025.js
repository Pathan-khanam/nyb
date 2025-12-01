//impure function

let count = 0;

function increment() {
  count++;
  return count;
}

increment(); // modifies global "count" → impure
console.log(increment());
console.log(increment());
console.log(increment());

//star pattern 
var n=10
for(let i=0;i<=n;i++){
    console.log(String(i).repeat(i))
}


//hallow square
var n=5;
for (let i=0;i<n;i++){
    if(i === 0 || i=== n-1){
        console.log("*".repeat(n));
    }else{
        console.log("*" + " ".repeat(n-2)+"*")
    }
}

//perfect number check
var num= 28;
var sum=0;

for(let i=1;i<num;i++){
    if(num%i===0){
        sum +=i
    }
}

console.log(sum === num);

//data prcessing with loops highest,lowest,avg

var temps=[30,40,10,20,50];

var high= temps[0];
var low=temps[0];
var total =0

for(let t of temps){
    if(t > high)high=t;
    if(t< low) low=t
    total +=t;
}
 var avg= total/temps.length;
 console.log(high,low,avg);

//remove duplicates without using set
var arr=[2,1,3,5,4,6,7,9,1,2,4,3,6]
var unique=[]

for( let x of arr){
    if(!unique.includes(x)){
        unique.push(x);
    }
}
console.log(unique);

//loop control break/continue
//print numbers 1-100
//skip multiples of 3, stop at multiples of 17**

for(let i=1;i<=100;i++){
    if(i%17 === 0)break;
    if(i%3 === 0)continue;
    console.log(i)
}


//print pairs except whn i+j===10
for(let i=1;i<=10; i++){
    for(let j=1;j<=10;j++){
       if(i+j === 10)continue;
       console.log(i,j)
       
    }
}

var cmmds="FFRFFLFF";

var x=0, y=0;
var dirs=["N","E","S","W"];
var d=0;//facing north

for(let c of cmmds){
    if(c==="L") d= (d+3)%4;
    else if(c==="R") d=(d + 1)%4;
    else if(c ==="F"){
        if(dirs[d] === "N") y++;
        else if(dirs[d]==="S") y--;
        else if(dirs[d]==="E")x++;
        else if(dirs[d] ==="W")x--;
    }
}
console.log(x,y);

//discount items > $100 n ttl price

var prices =[120,145,85,60,200]
var discountedcount=0;
var total=0;

for(let p of prices){
    if(p>100){
        p *=0.85
        discountedcount ++;

    }
    total +=p;

}
console.log("Discounted:", discountedcount)
console.log("Total:", total)

var arr = [5, 3, 1, 4, 2];

for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

console.log(arr); // [1, 2, 3, 4, 5]


// Pure function
function square(x) {
  return x * x;
}
console.log(square(5)); // 25

// Impure function
var y = 10;
function addToY(x) {
  return x + y; // depends on external variable y
}
console.log(addToY(5)); // 15

// Another impure function (side effect)
function addToArray(arr, val) {
  arr.push(val); // modifies external array
}
const nums = [1,2];
addToArray(nums,3);
console.log(nums); // [1,2,3]

(function() {
  console.log("I run immediately!");
})();


var rsult = (function(a, b) {
  return a + b;
})(5, 10);

console.log(rsult); 


const student = {
  name: "Alice",
  marks: [80, 90, 70],
  average() {
    return this.marks.reduce((a,b)=>a+b,0) / this.marks.length;
  }
};

console.log(student.average()); // 80


const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak(); // Buddy makes a sound

function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("JavaScript")); // "tpircSavaJ"

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  return binarySearch(arr, target, mid + 1, right);
}

const sorted = [1,3,5,7,9];
console.log(binarySearch(sorted, 5)); // 2
console.log(binarySearch(sorted, 6)); // -1

const nestedObj = {
  a: 1,
  b: { b1: 2, b2: { b21: 3 } },
  c: 4
};

function flattenKeys(obj, parent = '', result = {}) {
  for (let key in obj) {
    const propName = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === 'object') {
      flattenKeys(obj[key], propName, result);
    } else {
      result[propName] = obj[key];
    }
  }
  return result;
}

console.log(flattenKeys(nestedObj));


