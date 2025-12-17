function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log(this.name + " is eating");
};

function Dog(name) {
  Animal.call(this, name); // sets this.name
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add new Dog-specific method
Dog.prototype.bark = function () {
  console.log(this.name + " is barking!");
};

const d = new Dog("Buddy");
d.eat();  // Buddy is eating
d.bark(); // Buddy is barking!


function Shape(color) {
  this.color = color;
}

Shape.prototype.describe = function () {
  console.log("This shape is " + this.color);
};

function Circle(color, radius) {
  Shape.call(this, color); // this → new Circle instance
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  console.log("Area:", Math.PI * this.radius * this.radius);
};

const c = new Circle("red", 5);
c.describe();   // this → c
c.area();       // this → c


function File(filename,size){
    this.filename=filename;
    this.size=size;
}

File.prototype.details=function (){
    console.log(`${this.filename} (${this.size}KB)`);
}
function SecureFile(filename, size, hash){
    File.call(this,filename, size)
    this.hash = hash;
}
SecureFile.prototype= Object.create(File.prototype);
SecureFile.prototype.constructor=SecureFile;

SecureFile.prototype.verify=function (){
    console.log(`file hash verified: ${this.hash}`);
}
const sf=new SecureFile("report_2025#.pdf", 4320,"A3F9#**99!XYZ");
sf.details();
sf.verify();

var original = [ { score: 10 } ];
var shallow = [...original];

shallow[0].score = 999;

console.log(original[0].score); // 999 ❌ (linked)

var original = [
  { id: 1, data: { value: 100 } },
  { id: 2, tags: ["#A", "#B!"] }
];

var deep = structuredClone(original);

deep[0].data.value = 999;

console.log(original[0].data.value); // 100 ✔
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  var result = {};
  for (const key in value) {
    result[key] = deepClone(value[key]);
  }
  return result;
}

var original = [{ x: 1 }, [{ y: 2 }]];
var deep = deepClone(original);
var secret = Symbol("secret");

var user = {
  "name#1!": "Alice",
  "level@": 5,
  nested: { msg: "Hello" },
  [secret]: "private"
};

var hello = structuredClone(user);

hello.nested.msg = "Changed";

console.log(user.nested.msg); // "Hello" ✔

var products = [
  { id: "P#1", price: 100, tags: ["new", "heat!"] },
  { id: "P#2", price: 200, meta: { rating: 4.9 } }
];

var hi = structuredClone(products);

hi[0].tags.push("🔥");

console.log(products[0].tags); // unchanged ✔


var data = {
  id: "USR#1001",
  numbers: [1, 2, 3, [4, 5]],
  details: {
    active: true,
    score: { math: 90, eng: 88 }
  },
  created: new Date(),
  tags: new Set(["A", "B"]),
  config: new Map([["mode", "dark"]])
};

var deep = structuredClone(data);

deep.details.score.math = 0;
deep.tags.add("C");
deep.numbers[3][0] = 999;

console.log(data.details.score.math); // 90 ✔
console.log(data.tags.has("C"));      // false ✔
console.log(data.numbers[3][0]);      // 4 ✔

var cart = {
  total: 0,
  items: [
    { id: 1, qty: 2, price: 100 },
    { id: 2, qty: 1, price: 200 }
  ]
};

var copy = { ...cart };  // shallow

copy.items[0].qty = 99;

console.log(cart.items[0].qty); // 99 ❌ still linked


var state = {
  theme: "dark",
  options: { sound: true }
};

var shallow = { ...state };
Object.freeze(shallow);

shallow.options.sound = false;

console.log(state.options.sound); // false ❌ mutation passed through


var handlers = [
  () => console.log("Start"),
  () => console.log("Stop")
];

var shallow = [...handlers];

shallow[0] = () => console.log("BEGIN");

shallow[1](); // "Stop"
handlers[1](); // "Stop" (function reference same!)
shallow[1] === handlers[1]; // true ✔

const report = {
  name: "Q4",
  author: { name: "Alice" }
};

var  shallow = { ...report };

// temporary modify
shallow.author.name = "Bob";

// revert
shallow.author.name = "Alice";

console.log(report.author.name); // "Alice" ✔
// Because they shared the same reference!

var tasks = [
  { id: 1, status: "open" },
  { id: 2, status: "done" }
];

var shallow = tasks.map(x => x); // still shallow!

shallow[1].status = "pending";

console.log(tasks[1].status); // "pending" ❌

var obj = {
  settings: {
    shortcuts: ["A", "B"]
  }
};


var user = {
  profile: {
    social: { twitter: "@abc" }
  }
};

var shallow = { ...user };

console.log(shallow.profile?.social?.twitter); // "@abc"
shallow.profile.social.twitter = "@zzz";

console.log(user.profile.social.twitter); // "@zzz" ❌


var config = {
  ui: { theme: "dark" },
  flags: ["beta"]
};

var copy = { ...config };

console.log(copy === config);             // false ✔ top object is new
console.log(copy.ui === config.ui);       // true ❌ shared
console.log(copy.flags === config.flags); // true ❌ shared

var arr = [
  { name: "A" },
  { name: "B" }
];

var shallow = arr.slice();

shallow[1].name = "Z";

console.log(arr[1].name); // "Z" ❌


var base = {
  data: {
    scores: [10, 20]
  }
};

var copy = { ...base };

copy.data.scores[0] = 999;

var merged = { ...copy, updated: true };

console.log(base.data.scores[0]); // 999 ❌

var a = 10;   // primitive
var b = a;    // normal copy → value copied

b = 99;

console.log(a); // 10 ✔ unaffected
//console.log(b); // 99



var a = [1, 2, 3];
var b = a;

b.push(999);

console.log(a); // [1, 2, 3, 999] ❌

function hi() { console.log("hi"); }

var a = hi;
var b = a;

//b(); // hi
//a(); // hi

console.log(a === b); // true ✔ (same reference)

var data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 }
];

// Copy and remove even values
var filteredCopy = data.filter(item => item.value % 20 !== 0);

console.log(filteredCopy);
console.log(data); // original unchanged ✔

var shapes = [
  [1, 2],
  [3, 4],
  [5, 6]
];

var copy = shapes.map(row => [...row]); // shallow clone each sub-array

copy[0][0] = 999;

console.log(shapes[0][0]); // 1 ✔


var arr = [
  { id: 1, info: { score: 10 } },
  { id: 2, info: { score: 20 } }
];

var  copy = arr.map(item => ({
  ...item,
  info: { ...item.info } // clone nested object too
}));

copy[1].info.score = 999;

console.log(arr[1].info.score); // 20 ✔



var secret = Symbol("s");

var arr = [
  "hello!",
  123,
  { user: "A#", nested: { x: 9 } },
  ["Z", "!Q@#"],
  { [secret]: "hidden" }
];


// Creating objects
var dog = new Animal("Buddy", 3);
//dog.speak();  // Buddy makes a sound


class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  display() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

var myCar = new Car("Toyota", "Corolla");
myCar.display(); // Car: Toyota Corolla

class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  display() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

var myCar = new Car("Toyota", "Corolla");
myCar.display(); // Car: Toyota Corolla

class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
  }

  subtract(num) {
    this.value -= num;
  }

  getValue() {
    return this.value;
  }
}

const calc = new Calculator();
calc.add(10);
calc.subtract(3);
console.log(calc.getValue()); // 7



class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} by ${this.author}`);
  }
}

const book1 = new Book("1984", "George Orwell");
book1.info(); // Output: 1984 by George Orwell
class User {
  constructor(name = "Guest", role = "Visitor") {
    this.name = name;
    this.role = role;
  }

  greet() {
    console.log(`Hello ${this.name}, your role is ${this.role}`);
  }
}

const user1 = new User(); 
user1.greet(); // Output: Hello Guest, your role is Visitor

const user2 = new User("khan", "Admin");
user2.greet(); // Output: Hello Alice, your role is Admin

class BankAccount {
  #balance; // private property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${this.owner} deposited $${amount}. New balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice", 500);
account.deposit(200); // Alice deposited $200. New balance: $700
console.log(account.getBalance()); // 700


class Classroom {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addStudent(studentName) {
    this.students.push(studentName);
  }

  showStudents() {
    console.log(`Class ${this.name} has students: ${this.students.join(", ")}`);
  }
}

varclass1 = new Classroom("Math");
class1.addStudent("riya");
class1.addStudent("sara");
class1.showStudents(); 


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}
var rect = new Rectangle(10, 5);
console.log(rect.area());      // 50
console.log(rect.perimeter()); // 30

class value {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(d) {
    this.radius = d / 2;
  }
}

var circle = new Circle(5);
console.log(Circle.diameter); // 10

circle.diameter = 20;
console.log(circle.radius);   // 10

class MathHelper {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log(MathHelper.square(5)); // 25
console.log(MathHelper.cube(3));   // 27

class Counter {
  #count = 0; // private property

  increment() {
    this.#count++;
  }

  get value() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.value); // 2

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  scorePoint() {
    this.score++;
    console.log(`${this.name} scored! Total: ${this.score}`);
  }

  resetScore() {
    this.score = 0;
    console.log(`${this.name}'s score reset.`);
  }
}

const player1 = new Player("Alice");
player1.scorePoint(); // Alice scored! Total: 1
player1.scorePoint(); // Alice scored! Total: 2
player1.resetScore(); // Alice's score reset.
