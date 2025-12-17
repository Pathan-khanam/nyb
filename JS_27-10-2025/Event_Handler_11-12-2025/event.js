
 
const $ = (id) => document.getElementById(id);


//Debounce function (FIXED)
 
function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
}


//BUTTON
const btn = $("btn");
if (btn) {
    btn.addEventListener("click", () => alert("Button clicked!"));
}

//Named function example
function hi() {
    console.log("You pressed the button!");
}
const btn2 = $("btn2");
if (btn2) btn2.addEventListener("click", hi);


//MOUSE EVENTS
const box = $("box");
if (box) {
    box.addEventListener("mouseenter", () => (box.style.background = "green"));
    box.addEventListener("mouseleave", () => (box.style.background = "lightorange"));
}


//KEYBOARD
const txt = $("txt");
if (txt) {
    txt.addEventListener("keydown", (e) => console.log("Key pressed:", e.key));
}


//FORM SUBMIT
const form = $("myform");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted!");
    });
}


//INLINE HANDLER
function sayHI() {
    alert("Hello!");
}


//TOGGLE CLASS
const toggle = $("toggle");
const panel = $("panel");

if (toggle && panel) {
    toggle.addEventListener("click", () => panel.classList.toggle("hidden"));
}


//FOCUS / BLUR
const nameInput = $("name");
if (nameInput) {
    nameInput.addEventListener("focus", () => console.log("Input focused"));
    nameInput.addEventListener("blur", () => console.log("Input lost focus"));
}


//PAGE EVENTS
window.addEventListener("load", () => console.log("Page fully loaded"));
document.addEventListener("DOMContentLoaded", () => console.log("HTML parsed"));


//RESIZE & SCROLL
window.addEventListener("resize", () =>
    console.log("Window resized", window.innerWidth, window.innerHeight)
);

window.addEventListener(
    "scroll",
    debounce(() => console.log("Scrolling stopped"), 300)
);


//BEFORE UNLOAD
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});


//CLIPBOARD EVENTS
document.addEventListener("copy", () => console.log("Copied"));
document.addEventListener("cut", () => console.log("Cut"));
document.addEventListener("paste", (e) =>
    console.log("Pasted:", e.clipboardData.getData("text"))
);


//DRAG & DROP
const drag = $("drag");
const drop = $("drop");

if (drag) {
    drag.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "SomeData");
        console.log("Dragging started");
    });
}

if (drop) {
    drop.addEventListener("dragover", (e) => e.preventDefault());
    drop.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("Dropped:", e.dataTransfer.getData("text/plain"));
    });
}


//SYNCHRONOUS BLOCK
console.log("A");
console.log("B");
console.log("C");

const start = Date.now();
while (Date.now() - start < 1000) {} // shortened block

console.log("Done blocking");


//ASYNCHRONOUS
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");


//FETCH (FIXED URL)
console.log("Fetch Start");

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log("Data Loaded:", data))
    .catch((err) => console.log("Error:", err));

console.log("Fetch End");


//ASYNC / AWAIT FETCH
async function loadData() {
    console.log("Async Start");

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        console.log("Async Data:", data);
    } catch (err) {
        console.log("Error in async fetch:", err);
    }
}

loadData();
console.log("After loadData call");


//INPUT + FETCH
if (nameInput) {
    nameInput.addEventListener("input", async (e) => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${e.target.value || 1}`
            );
            const data = await res.json();
            console.log("Live search result:", data);
        } catch (err) {
            console.log("Search error", err);
        }
    });
}


//POPUP
const popup = $("popup");
if (popup) {
    setTimeout(() => (popup.style.display = "block"), 2000);
}


//HIDE MESSAGE
const successMsg = $("successMsg");
if (successMsg) {
    successMsg.textContent = "Saved!";
    successMsg.style.visibility = "visible";

    setTimeout(() => (successMsg.style.visibility = "hidden"), 2000);
}


//LOADER SIMULATION
const loader = $("loader");
const contentBlock = $("contentBlock");

if (loader && contentBlock) {
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        contentBlock.style.display = "block";
    }, 1500);
}


//DROPDOWN DELAY
const menu = $("menu");
let menuTimer;

if (menu) {
    menu.addEventListener("mouseenter", () => {
        menuTimer = setTimeout(() => menu.classList.add("open"), 300);
    });

    menu.addEventListener("mouseleave", () => {
        clearTimeout(menuTimer);
        menu.classList.remove("open");
    });
}


//DISABLE BUTTON TEMPORARILY
if (btn) {
    btn.disabled = true;
    setTimeout(() => (btn.disabled = false), 2000);
}


//TYPING EFFECT
const output = $("output");
if (output) {
    const text = "Welcome to our website!";
    let i = 0;

    function type() {
        if (i < text.length) {
            output.textContent += text[i++];
            setTimeout(type, 100);
        }
    }
    type();
}


//DIGITAL CLOCK
const clock = $("clock");
if (clock) {
    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString();
    }, 1000);
}


//IMAGE SLIDER
const slider = $("slider");
const images = ["JS_27-10-2025\Event_Handler_11-12-2025\burger.jpg", "JS_27-10-2025\Event_Handler_11-12-2025\fruit bowl.jpg", "platter.jpg"];

if (slider) {
    let index = 0;
    setInterval(() => {
        slider.src = images[index];
        index = (index + 1) % images.length;
    }, 2000);
}


/*COUNTDOWN*/
const timer = $("timer");
if (timer) {
    let time = 10;
    const interval = setInterval(() => {
        timer.textContent = time--;
        if (time < 0) {
            clearInterval(interval);
            timer.textContent = "Time's up!";
        }
    }, 1000);
}


/*INACTIVITY DETECTION*/
let lastMove = Date.now();

document.addEventListener("mousemove", () => (lastMove = Date.now()));

setInterval(() => {
    if (Date.now() - lastMove > 5000) console.log("User inactive");
}, 2000);


/*AUTOSAVE*/
function saveDraft() {
    console.log("Draft saved");
}
setInterval(saveDraft, 5000);


/*STOP INTERVAL*/
const intervalId = setInterval(() => console.log("Running..."), 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped");
}, 5000);


/*SYNC VS ASYNC UI UPDATE  */
const content = $("content");
const syncBtn = $("btn");

if (syncBtn && content) {
    syncBtn.addEventListener("click", () => {
        content.textContent = "Step 1: Immediate update";

        setTimeout(() => {
            content.textContent = "Step 2: setTimeout update";
        }, 2000);

        console.log("This appears before timeout");
    });
}


/*SIMULATED DATA LOADING */
const status = $("status");
const loadBtn = $("loadBtn");

if (loadBtn && status) {
    loadBtn.addEventListener("click", () => {
        status.textContent = "Loading…";

        setTimeout(() => (status.textContent = "Data loaded!"), 3000);

        console.log("Button clicked - UI responsive");
    });
}
