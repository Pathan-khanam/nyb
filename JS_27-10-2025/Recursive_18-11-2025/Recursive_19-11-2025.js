function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8

function sumArray(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

const zoo = {
  mammals: { lion: "Leo", tiger: "Tiggy" },
  birds: { parrot: "Polly", penguin: "Penny" },
};

function printAnimals(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      printAnimals(obj[key]); // Recursive call
    } else {
      console.log(key + " → " + obj[key]);
    }
  }
}

printAnimals(zoo);


function counter(start) {
  let count = start;

  return function recursiveIncrement() {
    if (count > 5) return;
    console.log("Count is", count);
    count++;
    recursiveIncrement();
  };
}

const myCounter = counter(1);
myCounter();

function countdown(n) {
  if (n <= 0) {
    console.log("Blast off!");
    return;
  }
  console.log(n);
  countdown(n - 1); // Recursive call
}

countdown(5);


