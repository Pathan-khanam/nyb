var mood = "happy";

if (mood === "happy") {
    console.log("You are happy! 😄");
}

var mood = "sad";

if (mood === "happy") {
    console.log("You are happy! 😄");
} else {
    console.log("You are not happy. 😢");
}

var mood = "excited";

if (mood === "happy") {
    console.log("You are happy! 😄");
} else if (mood === "excited") {
    console.log("You are excited! 🤩");
} else {
    console.log("You have another mood.");
}


var mood = "sleepy";

switch (mood) {
    case "happy":
        console.log("You are happy! 😄");
        break;
    case "sad":
        console.log("You are sad. 😢");
        break;
    case "sleepy":
        console.log("Time for a nap 😴");
        break;
    default:
        console.log("Mood unknown 🤔");
}

var mood = "happy";
let message = (mood === "happy") ? "You are angry! 😡" : "Not happy 😒";
console.log(message);


let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
