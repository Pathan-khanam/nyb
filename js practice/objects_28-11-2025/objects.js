
const calculator = {
  add(a,b){ return a+b; },
  multiply(a,b){ return a*b; },
  info(){ console.log("I am a calculator"); }
};

console.log(calculator.add(2,3));      // 5
console.log(calculator.multiply(4,5)); // 20
calculator.info(); // I am a calculator

const company = {
  name: "TechCorp",
  employees: {
    manager: { name: "sara", age: 30 },
    developer: { name: "Bob", age: 25 }
  }
};

console.log(company.employees.manager.name); // Alice

const person = { name: "zain", age: 28, city: "NY" };

// Using for...in
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys / Object.values / Object.entries
console.log(Object.keys(person));   // ["name","age","city"]
console.log(Object.values(person)); // ["Charlie",28,"NY"]
console.log(Object.entries(person)); // [["name","Charlie"],["age",28],["city","NY"]]


const team = {
  name: "Developers",
  members: [
    { name: "zaya", role: "Frontend" },
    { name: "zoe", role: "Backend" }
  ],
  listMembers() {
    this.members.forEach(member => console.log(`${member.name} - ${member.role}`));
  }
};

team.listMembers();

const bankAccount = {
  accountHolder: "Alice",
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
  }
};

bankAccount.deposit(2000); // Deposited 2000. New balance: 7000
bankAccount.withdraw(3000); // Withdrew 3000. New balance: 4000
bankAccount.withdraw(5000); // Insufficient funds!

const library = {
  name: "City Library",
  books: [
    { title: "Book1", author: "Author1", available: true },
    { title: "Book2", author: "Author2", available: false }
  ],
  listAvailableBooks() {
    return this.books.filter(b => b.available).map(b => b.title);
  },
  addBook(book) {
    this.books.push(book);
  }
};

console.log(library.listAvailableBooks()); // ["Book1"]
library.addBook({ title: "Book3", author: "Author3", available: true });
console.log(library.listAvailableBooks()); // ["Book1","Book3"]

const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(itemName) {
    this.items = this.items.filter(i => i.name !== itemName);
  },
  getTotalPrice() {
    return this.items.reduce((sum, i) => sum + i.price, 0);
  }
};

cart.addItem({ name: "Shoes", price: 50 });
cart.addItem({ name: "Shirt", price: 30 });
console.log(cart.getTotalPrice()); // 80
cart.removeItem("Shoes");
console.log(cart.getTotalPrice()); // 30


const counter = {
  count: 0,
  increment() { this.count++; return this; },
  decrement() { this.count--; return this; },
  getCount() { return this.count; }
};

counter.increment().increment().decrement();
console.log(counter.getCount()); // 1

const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };

function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
    if (typeof obj[key] === "object") count += countKeys(obj[key]);
  }
  return count;
}

console.log(countKeys(nestedObj)); // 5

function mergeObjects(obj1, obj2) {
  const result = { ...obj1 };
  for (let key in obj2) {
    if (typeof obj2[key] === "object" && key in obj1) {
      result[key] = mergeObjects(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}

const a = { x: 1, y: { z: 2 } };
const b = { y: { w: 3 }, k: 4 };
console.log(mergeObjects(a, b)); // { x:1, y:{z:2, w:3}, k:4 }

const users = {
  user1: { name: "riya", active: true },
  user2: { name: "Bob", active: false },
  user3: { name: "khan", active: true }
};

function getActiveUsers(obj) {
  const active = {};
  for (let key in obj) {
    if (obj[key].active) active[key] = obj[key];
  }
  return active;
}

console.log(getActiveUsers(users));
