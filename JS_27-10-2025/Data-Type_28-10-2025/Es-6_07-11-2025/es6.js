// Create a new Map
let myMap = new Map();

// Add values
myMap.set('name', 'khan');
myMap.set('age', 25);
myMap.set('isStudent', true);

console.log(myMap);
console.log(myMap.has('name'))

myMap.delete('age')
console.log(myMap.has('age'))
console.log(myMap.get('name'))

console.log(myMap.clear())
console.log(myMap.size)

let fruits = new Map([
  ['apple', 100],
  ['banana', 60],
  ['orange', 80]
]);

// Iterate over keys
for (let key of fruits.keys()) {
  console.log('Key:', key);
}

// Iterate over values
for (let value of fruits.values()) {
  console.log('Value:', value);
}

// Iterate over entries
for (let [key, value] of fruits.entries()) {
  console.log(`${key} = ${value}`);
}




let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 800 }
];

let priceLabels = products.map(p => `${p.name} costs $${p.price}`);
console.log(priceLabels);


for(let key of products.keys()){
  console.log('key:',key)
}

for(let value of products.values()){
  console.log('value:',value)
}


for(let [key,value] of products.entries()){
  console.log(`${key}=${value}`)
}


//weakmap

var id={
  name:'hi',
  age:10,
  city:'hyd'
}

console.log(id)
var x=new WeakMap();
x.set(id,'active')

console.log(x.get(id))
console.log(id.size)

id=null;
console.log(id)

//map vs weakmap

var obj={
  id:1
}
var map=new Map();
var weakmap=new WeakMap();

map.set(obj,"Map Example");
weakmap.set(obj,'WeakMap Example');
obj=null;
console.log(map);
console.log(weakmap);


// Current date and time
const now = new Date();
console.log(now); 

// specific date (year, month, day, hours, minutes, seconds, milliseconds)
const birthday = new Date(1995, 10, 10); 
console.log(birthday);

// From a date string
const dateFromString = new Date("2025-11-10T15:00:00");
console.log(dateFromString);

const date = new Date();

console.log(date.getFullYear()); 
console.log(date.getMonth());    
console.log(date.getDate());     
console.log(date.getDay());     
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
