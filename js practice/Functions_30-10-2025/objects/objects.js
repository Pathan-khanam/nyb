const student = {
  name: "John",
  grades: [90, 85, 92],
  address: {
    city: "New York",
    zip: 10001
  }
};

console.log(student.address.city); 
console.log(student.grades[1]);   

const user = {
  name: "khan",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

user.greet(); 
