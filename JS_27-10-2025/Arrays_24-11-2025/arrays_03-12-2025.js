const tags = ["JavaScript", "Node", "React"];

const exists = tags.map(t => t.toLowerCase())
                   .includes("react"); 
const keys = ["a", "b", "c"];

const nested = keys.reduceRight((acc, key) => ({ [key]: acc }), null);

const logins = [
  { user:"A", last:"2024-01-01" },
  { user:"B", last:"2024-05-10" }
];

logins.sort((a, b) => new Date(a.last) - new Date(b.last));

const messages = ["msg1", "msg2", "msg3"];
messages.reverse();
const parts = ["users", "123", "photos"];
const url = "/" + parts.join("/");

const items = [
  { name: "Pen", price: 5, stock: 10 },
  { name: "Book", price: 15, stock: 0 },
  { name: "Bag", price: 25, stock: 4 },
];

const total = items
  .filter(i => i.stock > 0 && i.price > 10)
  .map(i => i.price * i.stock)
  .reduce((a, b) => a + b, 0);

console.log(total); 

var orders = [
  {id: 1, items: ["apple", "banana"]},
  {id: 2, items: ["carrot"]}
];

var allItems = orders.flatMap(o => o.items);
var numbers = [1, 2, 3];

numbers.push(4); 
numbers.pop();   

const students = [
  {name:"Alice", score:85},
  {name:"Bob", score:92}
];

const names = students.map(s => s.name);

console.log(names);

const arr = [1, [2, 3], [4, [5, 6]]];

const flat = arr.flat(2);

console.log(flat); 
const cart = [
  {item:"Laptop", price:1000, qty:1},
  {item:"Mouse", price:50, qty:3},
  {item:"Keyboard", price:80, qty:1}
];

var subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

var discount = subtotal > 1000 ? subtotal * 0.1 : 0; // 10% off if >1000
var  tax = (subtotal - discount) * 0.07; // 7% tax

var ttl = subtotal - discount + tax;

console.log({subtotal, discount, tax, ttl});

const letters = ["a", "b", "a", "c", "a"];

const count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(count);

