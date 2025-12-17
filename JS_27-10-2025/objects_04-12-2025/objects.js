let person = {
  name: "sara",
  age: 19,
  city: "Delhi"
};

console.log(person.name); 
console.log(person.age);  // 25


function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("riya", 15);
console.log(john.name); 
console.log(john.age);  


let today = new Date();
console.log(today); // current date and time

let student = {
  name: "Asha",
  scores: [90, 85, 95],
  address: {
    city: "Mumbai",
    pincode: 400001
  },
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

console.log(student.scores[1]);    
console.log(student.address.city);   
student.greet();                      


var str = "Hello";
console.log(typeof str);

var strObj = new String("Hello");
console.log(typeof strObj); 


var obj = {};
obj["favoriteColor"] = "blue";
console.log(obj.favoriteColor)

varobj = {a: 1};
console.log(obj.toString()); // "[object Object]"

console.log(JSON.stringify(obj)); // '{"a":1}'

// Create a shopping cart object
let cart = {
    customerName: "Alice",
    items: [],   // Array to hold products

    // Method to add product
    addItem: function(name, price, quantity) {
        this.items.push({
            name: name,       // string
            price: price,     // number
            quantity: quantity, // number
            total: function() { return this.price * this.quantity; } // method returns number
        });
    },

    // Method to calculate total price
    calculateTotal: function() {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].total();
        }
        return sum;
    },

    // Method to show cart details
    showCart: function() {
        console.log("Cart for " + this.customerName);
        console.log("------------------------");
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            console.log(item.name + " - $" + item.price + " x " + item.quantity + " = $" + item.total());
        }
        console.log("------------------------");
        console.log("Total: $" + this.calculateTotal());
    }
};

// Add items to the cart
cart.addItem("Laptop", 1200, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);
cart.addItem("USB Cable", 5, 5);

// Show cart details
cart.showCart();
