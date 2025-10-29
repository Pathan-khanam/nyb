// Primitive
let x = 10;
let y = x;
y = 20;
console.log(x); // 10  (x is not affected)

// Non-Primitive
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (both point to the same object)

let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2025,
  autopilot: true
};

console.log(car.brand); // Tesla
