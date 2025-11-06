let c1={
    brand:"BMW",
    cost:7.6,
    mileage:8.9
}
 console.log(c1)
 console.log(c1.brand)
const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};

console.log(person.name); // "Alice"
console.log(person["age"]); // 25

const user = {
  name: "Bob",
  address: {
    city: "New York",
    zip: 10001
  },
  hobbies: ["reading", "cycling", "gaming"]
};

console.log(user.address.city); // "New York"
console.log(user.hobbies[1]); // "cycling"
const book = { title: "1984", author: "Orwell", year: 1949 };

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };

const merged = { ...a, ...b };
console.log(merged); // { x: 1, y: 3, z: 4 }


function exmp(){
    let c2={
        name:"BMW",
        cost:65.9,
        mileage:7
    }
    return c2;

}
console.log(exmp)
console.log(exmp())


//creation
const prsn = {
  name: "Alice",
  age: 25,
  isStudent: false,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(prsn.name);    // Alice
console.log(prsn["age"]);  // 25
prsn.greet();              // Hello, my name is Alice

const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;


function createUser(username, email) {
  return {
    username,
    email,
    login() {
      console.log(`${this.username} logged in`);
    }
  };
}

const user1 = createUser("jsCoder", "coder@example.com");
user1.login(); // jsCoder logged in


function Book(title, author) {
  this.title = title;
  this.author = author;
  this.describe = function() {
    console.log(`${this.title} by ${this.author}`);
  };
}

const book1 = new Book("1984", "George Orwell");
book1.describe(); // 1984 by George Orwell


//manipulation
person.country = "Canada";

person.age = 26;

delete person.isStudent;

console.log("name" in person); // true

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


const { name, age } = person;
console.log(name, age); // Alice 26

const address = { city: "Toronto", country: "Canada" };
const fullInfo = { ...person, ...address };
console.log(fullInfo);


console.log(Object.keys(person));   // ["name", "age", "greet", "country"]
console.log(Object.values(person)); // ["Alice", 26, ƒ, "Canada"]
console.log(Object.entries(person)); 
// [["name","Alice"],["age",26],["greet",ƒ],["country","Canada"]]




const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 }
];

// Find a product
const phone = products.find(p => p.name === "Phone");
console.log(phone.price); // 800

// Update a product price
products[0].price = 1100;

// Add a new product
products.push({ id: 4, name: "Headphones", price: 200 });



const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = {};

for (const word of words) {
  wordCount[word] = (wordCount[word] || 0) + 1;
}

console.log(wordCount);
// { apple: 3, banana: 2, orange: 1 }

const config = {
  theme: "dark",
  language: "en",
  notifications: true
};

function applySettings(settings) {
  if (settings.theme === "dark") {
    console.log("Dark mode enabled");
  }
  console.log(`Language set to ${settings.language}`);
}

applySettings(config);



const userProfile = {
  name: "khan",
  contact: {
    email: "khan@example.com",
    phone: "555-1234"
  },
  hobbies: ["reading", "cycling"]
};

console.log(userProfile.contact.email); // khan@example.com


const cart = {
  items: [],

  addItem(productName, price, quantity = 1) {
    this.items.push({ productName, price, quantity });
  },

  removeItem(productName) {
    this.items = this.items.filter(item => item.productName !== productName);
  },

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  showCart() {
    console.log("🛒 Your Cart:");
    this.items.forEach(item => {
      console.log(`${item.productName} x${item.quantity} = $${item.price * item.quantity}`);
    });
    console.log(`Total: $${this.getTotal()}`);
  }
};

cart.addItem("Laptop", 1200, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 80);

cart.showCart();

// Remove an item
cart.removeItem("Mouse");
cart.showCart();
