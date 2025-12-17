console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

console.log("Start");

for (let i = 0; i < 5e8; i++) {}  // heavy loop (blocks UI)

console.log("End");

const content = document.getElementById("content");

content.textContent = "1. Updating content";
content.style.color = "red";
content.style.fontSize = "20px";//these lines runs in sequence with no delay

function a() {
    console.log("Inside A");
    b();
    console.log("Back to A");
}

function b() {
    console.log("Inside B");
}

a();

console.log("Task 1");

const start = Date.now();
while (Date.now() - start < 4000) {}  // 4 seconds block

console.log("Task 2");

const btn= document.getElementById("btn")
btn.addEventListener("click", () => {
    console.log("Button Clicked");

    let start = Date.now();
    while (Date.now() - start < 3000) {} // blocking

    console.log("After 3 seconds blocking");
});

console.log("A");//sync

setTimeout(() => {
    console.log("B");//async runs later (setTimeout) waits in queue
}, 1000);

console.log("C");//Synchronous lines (A, C) run first
//json sync
console.log("Start");

const big = JSON.stringify({ x: "hello".repeat(5000000) });
JSON.parse(big);  // heavy, synchronous

console.log("End");
//UI freezes while parsing large JSON.

//sync event handler

document.addEventListener("DOMContentLoaded", () => {
    // Select the input element
    const input = document.getElementById("myInput");

    input.addEventListener("input", () => {
        console.log("Typing...");
        // Heavy synchronous task (blocks UI)
        for (let i = 0; i < 2e8; i++) {}
        console.log("Done typing");
    });
});
//freezes UI
// runs in strict order
// MUST finish before next event fires


console.log("Start Calculation");

function calculate() {
    let x = 0;
    for (let i = 0; i < 1e9; i++) {
        x += i;
    }
    return x;
}

calculate();  // blocks

console.log("End Calculation");
