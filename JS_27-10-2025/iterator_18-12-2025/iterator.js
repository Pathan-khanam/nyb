const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

iterator.next(); 
iterator.next(); 
iterator.next(); 
iterator.next(); 


function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
gen.next(); 
gen.next(); 
gen.next();
gen.next(); 


const myIterable = {
  *[Symbol.iterator]() {
    yield "Hello";
    yield "World";
  }
};

for (let word of myIterable) {
  console.log(word);
}

function* pageGenerator() {
  let page = 1;
  while (true) {
    yield page++;
  }
}

const pages = pageGenerator();
pages.next().value; // 1
pages.next().value; // 2


function saveDraft(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Draft saved: "${text}"`);
    }, 1000);
  });
}

async function autoSave() {
  console.log("User typing...");
  
  const result = await saveDraft("Hello async await");
  console.log(result);
}

autoSave();


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function trafficLight() {
  console.log("🔴 Red");
  await wait(2000);

  console.log("🟡 Yellow");
  await wait(1000);

  console.log("🟢 Green");
  await wait(2000);

  console.log("🔴 Red again");
}

trafficLight();


function showTyping() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("User is typing...");
    }, 500);
  });
}

function sendMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Message sent ✅");
    }, 1000);
  });
}

async function chatFlow() {
  const typing = await showTyping();
  console.log(typing);

  const sent = await sendMessage();
  console.log(sent);
}

chatFlow();


function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded 📦");
    }, 1500);
  });
}

async function loadPage() {
  console.log("Loading...");
  
  const data = await fetchData();
  console.log(data);
  
  console.log("Loading finished");
}

loadPage();


function* calculator() {
  let total = 0;

  while (true) {
    const num = yield total;
    total += num;
  }
}

const calc = calculator();
console.log(calc.next().value);   // 0
console.log(calc.next(5).value);  // 5
console.log(calc.next(10).value); // 15

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
