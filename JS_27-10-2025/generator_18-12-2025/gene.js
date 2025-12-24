function* ticketGenerator() {
  let ticket = 100;
  while (true) {
    yield ticket++;
  }
}

const tickets = ticketGenerator();

console.log(tickets.next().value); // 100
console.log(tickets.next().value); // 101
console.log(tickets.next().value); // 102


function* paginate(items, pageSize) {
  let index = 0;
  while (index < items.length) {
    yield items.slice(index, index + pageSize);
    index += pageSize;
  }
}

const products = ["A", "B", "C", "D", "E", "F"];
const pages = paginate(products, 2);

console.log(pages.next().value); // ["A","B"]
console.log(pages.next().value); // ["C","D"]

function* dailyTasks() {
  yield "Check emails";
  yield "Attend meeting";
  yield "Submit report";
}

const tasks = dailyTasks();

console.log(tasks.next().value);
console.log(tasks.next().value);
console.log(tasks.next().value);


function* playlist(songs) {
  for (const song of songs) {
    yield `Playing: ${song}`;
  }
}

const player = playlist(["Song1", "Song2", "Song3"]);

console.log(player.next().value);
console.log(player.next().value);
console.log(player.next().value);
function* otpAttempts(maxAttempts) {
  for (let i = 1; i <= maxAttempts; i++) {
    yield `Attempt ${i}`;
  }
}

const attempts = otpAttempts(3);

console.log(attempts.next().value);
console.log(attempts.next().value);
console.log(attempts.next().value);


function* trafficSignal() {
  yield "RED";
  yield "YELLOW";
  yield "GREEN";
}

const signal = trafficSignal();

console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);

function* messageQueue(messages) {
  for (const msg of messages) {
    yield msg;
  }
}

const chat = messageQueue([
  "Hi",
  "How are you?",
  "Bye"
]);

console.log(chat.next().value);
console.log(chat.next().value);
console.log(chat.next().value);

function* quiz() {
  yield "What is JS?";
  yield "What is closure?";
  yield "What is promise?";
}

const questions = quiz();

console.log(questions.next().value);
console.log(questions.next().value);
function* retry(max) {
  let count = 1;
  while (count <= max) {
    yield `Retry attempt ${count}`;
    count++;
  }
}

const retryProcess = retry(3);

console.log(retryProcess.next().value);
console.log(retryProcess.next().value);

function* formSteps() {
  yield "Enter name";
  yield "Enter email";
  yield "Confirm details";
}

const form = formSteps();

console.log(form.next().value);
console.log(form.next().value);
console.log(form.next().value);


function* taskQueue() {
  yield "Task 1";
  yield "Task 2";
  yield "Task 3";
}

var task = taskQueue();

let nextTask = task.next();
while (!nextTask.done) {
  console.log(nextTask.value); // Current task
  nextTask = task.next();
}

console.log("All tasks finished");

function* formSteps() {
  yield "Step 1: Enter Name";
  yield "Step 2: Enter Email";
  yield "Step 3: Confirm Details";
}

var frm = formSteps();

console.log(frm.next()); // { value: 'Step 1: Enter Name', done: false }
console.log(frm.next()); // { value: 'Step 2: Enter Email', done: false }
console.log(frm.next()); // { value: 'Step 3: Confirm Details', done: false }
console.log(frm.next()); // { value: undefined, done: true }


function* messages() {
  yield "Hello";
  yield "How are you?";
  yield "Bye";
}

var chats = messages();

let result = chats.next();
while (!result.done) {
  const { value, done } = result;
  console.log("Message:", value, "Done?", done);
  result = chats.next();
}

function* paginate(items, pageSize) {
  let index = 0;
  while (index < items.length) {
    yield items.slice(index, index + pageSize);
    index += pageSize;
  }
}

const page = paginate(["A", "B", "C", "D"], 2);

console.log(page.next()); // { value: ['A','B'], done: false }
console.log(page.next()); // { value: ['C','D'], done: false }
console.log(page.next()); // { value: [], done: true }
