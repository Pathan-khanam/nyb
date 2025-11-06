let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
numbers[2] = 35;
numbers.push(60);
for (let n of numbers) {
  console.log(n);
}

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);

let nums = [1, 2, 3];
nums.push(4);
nums.pop();
nums.unshift(0);
nums.shift();
console.log(nums);

let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) console.log(colors[i]);

let names = ["Alice", "Bob", "Charlie"];
names.forEach(n => console.log(n));
