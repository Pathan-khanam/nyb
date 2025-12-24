
// 1. CALLBACK

function notifyCompletion(taskName, callback) {
  console.log(`Task "${taskName}" completed`);
  callback();
}

function sendStatusUpdate() {
  console.log("Status updated successfully\n");
}

// 2. ASYNC / AWAIT (Fetch tasks)

function fetchDailyTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, task: "Practice JavaScript", duration: "1 hour" },
        { id: 2, task: "Attend JS Class", duration: "2 hours" },
        { id: 3, task: "Revise Async Concepts", duration: "1 hour" }
      ]);
    }, 1000);
  });
}


// 3. GENERATOR

function* taskGenerator(tasks) {
  for (let task of tasks) {
    yield task;
  }
}


// MAIN FUNCTION

async function startDay() {
  console.log("Fetching today's tasks...\n");

  const tasks = await fetchDailyTasks();

  // Iterator using generator
  const taskIterator = taskGenerator(tasks);

  for (let taskItem of taskIterator) {

    // 5. DESTRUCTURING
    
    const { task, duration } = taskItem;

    console.log(`Starting task: ${task}`);
    console.log(`Expected duration: ${duration}`);

    // Simulate task completion
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Callback after task completion
    notifyCompletion(task, sendStatusUpdate);
  }

  console.log("All tasks completed for the day 🎉");
}

// Start project
startDay();




//CALLBACK

// Task: Get forest weather (callback style)

function getWeather(callback) {
  setTimeout(() => {
    callback("Sunny");
  }, 500);
}


//PROMISE + ASYNC/AWAIT

// Task: Get animal details (async style)

function getAnimal() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Deer",
        speed: "Fast",
        location: "Forest"
      });
    }, 700);
  });
}

// 3️⃣ GENERATOR

// Task: Daily forest activities

function* dailyActivities() {
  yield "Birds flying";
  yield "Deer grazing";
  yield "Wolf hunting";
}


//MAIN PROGRAM


async function forestLife() {
  console.log("🌅 Forest Day Started");

  // Callback usage
  getWeather(function(weather) {
    console.log("🌤 Weather:", weather);
  });

  // Async/Await usage
  const animal = await getAnimal();

  // Destructuring
  const { name, speed, location } = animal;
  console.log(`🦌 Animal: ${name}, Speed: ${speed}, Location: ${location}`);

  // Iterator (manual)
  const tasks = ["Humans walking", "Animals running", "Rain falling"];
  const taskIterator = tasks[Symbol.iterator]();

  console.log("🔁 Iterator:");
  console.log(taskIterator.next().value);
  console.log(taskIterator.next().value);
  console.log(taskIterator.next().value);

  // Generator (automatic)
  console.log("⚙ Generator:");
  for (let activity of dailyActivities()) {
    console.log(activity);
  }

  console.log("🌙 Forest Day Ended");
}

//RUN PROGRAM

forestLife();
