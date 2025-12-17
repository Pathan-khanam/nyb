document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

//event deligation
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

chat.addEventListener("click", (e) => {
  if (e.target.classList.contains("message")) {
    console.log("Message clicked:", e.target.textContent);
  }
});


// Capturing keydown at document level
document.addEventListener("keydown", (e) => {
    console.log("Document captured key:", e.key);

    if (e.key.toLowerCase() === "s") {
        console.log("Save action triggered!");
    }

    if (e.key.toLowerCase() === "l") {
        console.log("Logout action triggered!");
    }
}, true); // 'true' enables capturing

// Normal input event (bubbling)
document.getElementById("username").addEventListener("keydown", (e) => {
    console.log("Typing in username:", e.key);
});

document.getElementById("password").addEventListener("keydown", (e) => {
    console.log("Typing in password:", e.key);
});
var container = document.getElementById("container");
const boxes = document.querySelectorAll(".box");

// Event Capturing: top → down
container.addEventListener("click", (e) => {
    console.log("Container capture phase");
}, true); // capturing

// Bubbling: bottom → up
container.addEventListener("click", (e) => {
    console.log("Container bubble phase");
}); // default is bubbling

// Individual box click
boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        console.log(box.textContent + " clicked");
        box.style.border = "3px solid black";
    });
});
// Instead of adding listener to each box
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("box")) {
        console.log("Delegation: " + e.target.textContent + " clicked");
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});


var container = document.getElementById("notification-container");
const addBtn = document.getElementById("add-notification");
let notificationCount = 4;

// --- Capturing Example ---
container.addEventListener("click", (e) => {
    console.log("Capturing: Notification container detected click");
}, true); // top-down

// --- Bubbling Example ---
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("notification")) {
        console.log("Bubbling: Clicked", e.target.textContent);
        e.target.style.color = "white";
        e.target.style.background = "#007BFF";
    }
}); // bottom-up (default)

// --- Event Delegation Example ---
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("notification")) {
        console.log("Delegation: Handling", e.target.dataset.id);
    }
});

// --- Add new notifications dynamically ---
addBtn.addEventListener("click", () => {
    const newNotification = document.createElement("div");
    newNotification.className = "notification";
    newNotification.dataset.id = notificationCount;
    newNotification.textContent = "Notification " + notificationCount;
    newNotification.style.padding = "10px";
    newNotification.style.margin = "5px 0";
    newNotification.style.border = "1px solid #ccc";
    newNotification.style.cursor = "pointer";
    container.appendChild(newNotification);
    console.log("Added new notification:", notificationCount);
    notificationCount++;
});


const status = document.getElementById("status");

// --- Capturing Example: document captures events first ---
document.addEventListener("click", (e) => {
    status.textContent = "Capturing: document detected click at (" + e.clientX + ", " + e.clientY + ")";
    console.log("Capturing: document click");
}, true);

document.addEventListener("keydown", (e) => {
    console.log("Capturing: document detected key", e.key);
}, true);

// --- Bubbling Example: body reacts after target ---
document.body.addEventListener("click", (e) => {
    console.log("Bubbling: body detected click at", e.clientX, e.clientY);
});

// --- Delegation Example: handle multiple keys in one listener ---
document.body.addEventListener("keydown", (e) => {
    if (["a", "s", "d", "w"].includes(e.key.toLowerCase())) {
        console.log("Delegation: shortcut pressed -", e.key.toUpperCase());
        status.textContent = "Delegation: Shortcut " + e.key.toUpperCase() + " pressed!";
    }
});

var log = document.getElementById("log");

// ------------------ Bubbling ------------------
var profiles = document.querySelectorAll(".profile");
profiles.forEach(profile => {
  profile.addEventListener("click", (e) => {
    console.log("Bubbling: Clicked profile:", profile.textContent);
    log.textContent = "Bubbling: " + profile.textContent + " clicked";
  });
});

// ------------------ Delegation ------------------
var tasks = document.getElementById("tasks");
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-btn")) {
    console.log("Delegation: Task button clicked:", e.target.textContent);
    log.textContent = "Delegation: " + e.target.textContent + " clicked";
    e.target.style.background = "#"+Math.floor(Math.random()*16777215).toString(16);
  }
});

document.getElementById("add-task").addEventListener("click", () => {
  const newTask = document.createElement("button");
  newTask.className = "task-btn";
  newTask.textContent = "Task " + (tasks.children.length + 1);
  tasks.appendChild(newTask);
  console.log("New task added");
});

// ------------------ Capturing ------------------
var background = document.getElementById("background");
background.addEventListener("click", (e) => {
  console.log("Capturing: Background clicked");
  log.textContent = "Capturing: Background clicked";
}, true); // true enables capturing



var log = document.getElementById("log");

// ------------------ Bubbling ------------------
var profiles = document.querySelectorAll(".profile");
profiles.forEach(profile => {
  profile.addEventListener("click", (e) => {
    console.log("Bubbling: Clicked profile:", profile.textContent);
    log.textContent = "Bubbling: " + profile.textContent + " clicked";
    profile.style.background = "#00ff62ff"; // Gold color to visualize click
  });
});

// ------------------ Delegation ------------------
var tasks = document.getElementById("tasks");
let taskCount = 1;

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-btn")) {
    console.log("Delegation: Task button clicked:", e.target.textContent);
    log.textContent = "Delegation: " + e.target.textContent + " clicked";
    // Make sure color is visible
    e.target.style.background = "#"+Math.floor(Math.random()*16711680).toString(16); 
    e.target.style.color = "white";
    e.target.style.border = "1px solid #000";
    e.target.style.padding = "5px 10px";
    e.target.style.margin = "3px";
  }
});

// Add new task dynamically
document.getElementById("add-task").addEventListener("click", () => {
  const newTask = document.createElement("button");
  newTask.className = "task-btn";
  newTask.textContent = "Task " + taskCount;
  tasks.appendChild(newTask);
  console.log("Added new task:", newTask.textContent);
  taskCount++;
});

// ------------------ Capturing ------------------
var background = document.getElementById("background");
background.addEventListener("click", (e) => {
  console.log("Capturing: Background clicked");
  log.textContent = "Capturing: Background clicked";
  // Change background color on click for visibility
  background.style.background = "#"+Math.floor(Math.random()*16777215).toString(16);
}, true); // true enables capturing
