
const log = msg => {
  document.getElementById("log").textContent += msg + "\n";
};

// -------------------------------------------
// 🦁 1. GLOBAL SCOPE LION
// -------------------------------------------
var lion = "Lion: I rule the WHOLE zoo!";

function globalLion() {
  log(lion);
  lion = "Lion: Somebody fed me steak!";
  log("Lion updated: " + lion);
}

// -------------------------------------------
// 🐔 2. BLOCK SCOPE CHICKEN
// -------------------------------------------
function blockChicken() {
  if (true) {
    let chicken = "Chicken: I stay inside my coop.";
    log(chicken);
  }
  try {
    log(chicken);
  } catch {
    log("❌ Chicken escaped? NO. Block scope keeps it inside!");
  }
}

// -------------------------------------------
// 🐒 3. FUNCTION SCOPE MONKEY
// -------------------------------------------
function functionMonkey() {
  function tree() {
    var monkey = "Monkey: I live only in this tree.";
    log(monkey);
  }
  tree();
  try {
    log(monkey);
  } catch {
    log("❌ Monkey fell out of tree → not visible outside function!");
  }
}

// -------------------------------------------
// 🦜 4. CLOSURE PARROT
// -------------------------------------------
function closureParrot() {
  function parrotTrainer() {
    let secretWord = "BANANA!";
    return function() {
      return "Parrot: I remember the secret → " + secretWord;
    }
  }

  const parrot = parrotTrainer();
  log(parrot());
  log(parrot());
  log("Parrot never forgets. Thanks closures.");
}

// -------------------------------------------
// 🐍 5. SHADOWING SNAKE
// -------------------------------------------
let snake = "Snake: Hiss... I live outside.";

function shadowingSnake() {
  let snake = "Snake: Hiss... I replaced the global snake.";
  log("Inside function cage: " + snake);
  log("Outside cage: " + window.snake);
}

// -------------------------------------------
// 🐧 6. HOISTING PENGUIN
// -------------------------------------------
function hoistingPenguin() {
  log("Penguin before definition: " + penguin); // undefined
  var penguin = "Penguin: I slide into existence late.";
  log("Penguin after: " + penguin);

  try {
    log("PolarBear: " + polarBear); // TDZ
  } catch {
    log("❌ PolarBear not hoisted (let) — still hibernating!");
  }

  let polarBear = "Bear: I wake up AFTER my declaration.";
}

// -------------------------------------------
// 🐘 7. LOOP ELEPHANTS (var vs let)
// -------------------------------------------
function loopElephants() {
  log("\n🐘 VAR ELEPHANTS (chaos party):");
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      log("var elephant #" + i + " → They all escape together!");
    }, 100);
  }

  log("\n🐘 LET ELEPHANTS (well-behaved):");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      log("let elephant #" + j + " → Stays in its lane.");
    }, 100);
  }
}