//An object is a collection of key-value pairs.
//Keys → also called properties
//Values → can be anything (string, number, function, array, another object)

// Animal Constructor Function
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;

  // Method inside the constructor function
  this.speak = function() {
    console.log(`${this.name} says ${this.sound}`);
  };
}

// Using `const` for fixed references
const dog = new Animal("Dog", "Woof");   // const because dog reference won't change
const cat = new Animal("Cat", "Meow");   // const because cat reference won't change
const cow = new Animal("Cow", "Moo");    // const because cow reference won't change

// Calling methods
dog.speak(); // Dog says Woof
cat.speak(); // Cat says Meow
cow.speak(); // Cow says Moo

// Using `let` to change properties dynamically
let newSound = "Bark";
dog.sound = newSound;  // We update the sound of the dog

dog.speak();

//Employee object
const employee = {
  name: "John",
  position: "Developer",
  salary: 50000,   // salary in INR
  performance: "good",   // string type (can be 'good', 'average', or 'poor')

  // Method to calculate bonus in INR
  calculateBonus: function() {
    let bonus = 0;  // bonus in INR

    // Calculate bonus based on performance
    if (this.performance === "good") {
      bonus = this.salary * 0.20;  // 20% bonus for good performance
    } else if (this.performance === "average") {
      bonus = this.salary * 0.10;  // 10% bonus for average performance
    } else if (this.performance === "poor") {
      bonus = 0;  // no bonus for poor performance
    } else {
      console.log("Invalid performance status");
    }

    return bonus;  // return bonus in INR
  },

  // Method to display employee info in INR
  displayInfo: function() {
    console.log(`${this.name} works as a ${this.position} and earns ₹${this.salary}`);
    const bonus = this.calculateBonus();
    console.log(`${this.name}'s bonus is ₹${bonus}`);
  }
};

// Call the function to display employee info and bonus in INR
employee.displayInfo();


//a Rectangle object
const rectangle = {
  length: 10,   // number type
  width: 5,     // number type

  // Method to calculate area
  calculateArea: function() {
    return this.length * this.width;  // arithmetic multiplication operator
  },

  // Method to calculate perimeter
  calculatePerimeter: function() {
    return 2 * (this.length + this.width);  // arithmetic addition and multiplication operators
  }
};

// Display area and perimeter
console.log("Area of rectangle:", rectangle.calculateArea());  // 50
console.log("Perimeter of rectangle:", rectangle.calculatePerimeter());  // 30



// Define a Student object
const student = {
  name: "khan",
  marks: 85,  // number type

  // Method to check if student has passed or failed
  checkPass: function() {
    const passingMarks = 50;  // number type
    if (this.marks >= passingMarks) {
      console.log(`${this.name} has passed!`);
    } else {
      console.log(`${this.name} has failed.`);
    }
  }
};

// Call the function to check pass/fail
student.checkPass();  // Alice has passed!


// an Inventory object
const inventory = {
  items: ["laptop", "phone", "tablet"],  // array of strings (data type: array)

  // Method to check if an item is in stock
  isInStock: function(item) {
    if (this.items.includes(item)) {   // includes is used to check if the item exists in the array
      console.log(`${item} is in stock.`);
    } else {
      console.log(`${item} is out of stock.`);
    }
  }
};

// Check if an item is in stock
inventory.isInStock("phone");   // phone is in stock.
inventory.isInStock("watch");   // watch is out of stock.



//a Product object
const product = {
  name: "Smartphone",
  category: "electronics",  // string type
  price: 500,               // number type

  // Method to apply discount
  applyDiscount: function() {
    let discount = 0;  // number type
    switch (this.category) {
      case "electronics":
        discount = 0.10;  // 10% discount
        break;
      case "clothing":
        discount = 0.20;  // 20% discount
        break;
      case "groceries":
        discount = 0.05;  // 5% discount
        break;
      default:
        console.log("No discount available.");
        return;
    }

    const finalPrice = this.price - (this.price * discount);
    console.log(`Discount applied. Final price: $${finalPrice}`);
  }
};

// Apply discount based on category
product.applyDiscount();  
