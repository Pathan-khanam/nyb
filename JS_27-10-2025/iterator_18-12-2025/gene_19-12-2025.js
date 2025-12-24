function* trafficLight() {
  while (true) {
    yield "RED";
    yield "YELLOW";
    yield "GREEN";
  }
}

const light = trafficLight();

console.log(light.next().value); // RED
console.log(light.next().value); // YELLOW
console.log(light.next().value); // GREEN
console.log(light.next().value); // RED

const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    {
      value: 3,
      children: [{ value: 4, children: [] }]
    }
  ]
};

function* dfs(node) {
  yield node.value;
  for (const child of node.children) {
    yield* dfs(child);
  }
}

[...dfs(tree)]; // [1, 2, 3, 4]

function* idGenerator(prefix = "") {
  let id = 1;
  while (true) {
    yield `${prefix}${id++}`;
  }
}

const ids = idGenerator("user_");

console.log(ids.next().value); // user_1
console.log(ids.next().value); // user_2

function* zip(a, b) {
  const ita = a[Symbol.iterator]();
  const itb = b[Symbol.iterator]();

  while (true) {
    const va = ita.next();
    const vb = itb.next();
    if (va.done || vb.done) break;
    yield [va.value, vb.value];
  }
}

[...zip([1,2,3], ["a","b","c"])];
// [[1,"a"], [2,"b"], [3,"c"]]

function* taskRunner(tasks, chunkSize) {
  for (let i = 0; i < tasks.length; i += chunkSize) {
    yield tasks.slice(i, i + chunkSize);
  }
}

const runner = taskRunner([1,2,3,4,5,6], 2);

for (const batch of runner) {
  console.log("Processing:", batch);
}


function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

[...range(1, 10, 2)]; // [1,3,5,7,9]

function* findFirstEven(arr) {
  for (const num of arr) {
    if (num % 2 === 0) {
      return num; // stops generator
    }
    yield num;
  }
}

const gen = findFirstEven([1,3,5,6,7]);

gen.next(); // { value: 1, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: 5, done: false }
gen.next(); // { value: 6, done: true }

function* eventStream(events) {
  for (const event of events) {
    yield { ...event, timestamp: Date.now() };
  }
}

const events = [{ type: "click" }, { type: "scroll" }];

for (const e of eventStream(events)) {
  console.log(e);
}

function* fibonacci(limit) {
  let a = 0, b = 1;
  for (let i = 0; i < limit; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (const n of fibonacci(10)) {
  console.log(n); // 0 1 1 2 3 5 8 13 21 34
}

function* randomNumbers() {
  while (true) {
    yield Math.random();
  }
}

const randGen = randomNumbers();

console.log(randGen.next().value); // 0.12345
console.log(randGen.next().value); // 0.67891

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 4)); // 8
const square = n => n * n;
console.log(square(5)); // 25

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(5, 3, (x, y) => x - y)); // 2

var arr = [1, 2, 3, 4];
const arr2 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr2); // [1, 2, 3, 4, 5]

arr.forEach(n => console.log(n * 2)); // 2 4 6 8
const doubled = arr.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

const arr3 = [...arr, 5, 6];
console.log(arr3); // [1,2,3,4,5,6]

function logNums(...nums) {
  console.log(nums);
}
logNums(...arr); // [1,2,3,4]


const person = { name: "Alice", age: 25 };
console.log(person.name); // Alice


const obj = {
  x: 10,
  y: 20,
  sum() {
    return this.x + this.y;
  }
};
console.log(obj.sum()); // 30

const key = "score";
const player = {
  [key]: 100
};
console.log(player.score); // 100
console.log(Object.keys(person));   // ['name','age']
console.log(Object.values(person)); // ['Alice',25]
console.log(Object.entries(person));// [['name','Alice'], ['age',25]]
var data = { user: { name: "Bob", stats: { score: 50 } } };
const { user: { name: username, stats: { score } } } = data;
console.log(username, score); // Bob 50
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(10)); // 55
const nested = [1, [2, [3, 4], 5]];
const flat = nested.flat(2);
console.log(flat); // [1,2,3,4,5]
var arr = [5, 2, 8, 1];
arr.sort((a, b) => a - b); // ascending
console.log(arr); // [1,2,5,8]
var arr = [10, 20, 30];
const index = arr.findIndex(n => n > 15);
console.log(index); // 1


const numbers = [1,2,3,4,5,6];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a,b) => a + b, 0);

console.log(result); // 120 (20+40+60)

var data = { user: { profile: { name: "Alice" } } };
console.log(data.user?.profile?.name); // Alice
console.log(data.user?.address?.city); // undefined
