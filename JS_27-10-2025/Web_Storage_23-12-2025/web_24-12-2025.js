// sessionStorage.setItem("step", "payment");

// console.log(sessionStorage.getItem("step")); 

// // let refreshCount = Number(sessionStorage.getItem("refresh")) || 0;
// // refreshCount++;

// // sessionStorage.setItem("refresh", refreshCount);

// // if (refreshCount > 3) {
// //   alert("Too many refreshes!");
// // }

// function cacheResults(query, results) {
//   sessionStorage.setItem(query, JSON.stringify(results));
// }

// function getResults(query) {
//   return JSON.parse(sessionStorage.getItem(query));
// }
// sessionStorage.setItem("fontSize", "18px");

// document.body.style.fontSize =
//   sessionStorage.getItem("fontSize") || "14px";


//   if (!sessionStorage.getItem("popup")) {
//   alert("Special offer!");
//   sessionStorage.setItem("popup", "shown");
// }

// // const msg = document.querySelector("textarea");

// // msg.value = sessionStorage.getItem("draft") || "";

// // msg.addEventListener("input", () => {
// //   sessionStorage.setItem("draft", msg.value);
// // });


// sessionStorage.setItem("loggedIn", "true");

// if (sessionStorage.getItem("loggedIn") !== "true") {
//   location.href = "/login";
// }

// sessionStorage.setItem("redirectFrom", location.pathname);

// // after login
// location.href = sessionStorage.getItem("redirectFrom") || "/";

// var input = document.querySelector("#todo");
// const btn = document.querySelector("#add");
// const list = document.querySelector("#list");

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// function render() {
//   list.innerHTML = "";
//   todos.forEach((t, i) => {
//     const li = document.createElement("li");
//     li.textContent = t;
//     li.addEventListener("click", () => {
//       todos.splice(i, 1);
//       localStorage.setItem("todos", JSON.stringify(todos));
//       render();
//     });
//     list.appendChild(li);
//   });
// }

// btn.addEventListener("click", () => {
//   todos.push(input.value);
//   input.value = "";
//   localStorage.setItem("todos", JSON.stringify(todos));
//   render();
// });

// render();

// let visits = Number(localStorage.getItem("visits")) || 0;
// visits++;
// localStorage.setItem("visits", visits);

// console.log(`You visited ${visits} times`);

// window.addEventListener("storage", (e) => {
//   console.log(`Changed key: ${e.key}, New Value: ${e.newValue}`);
// });

// const cart = JSON.parse(localStorage.getItem("cart")) || [];
// cart.push({ item: "Book", price: 200 });
// localStorage.setItem("cart", JSON.stringify(cart));

// if (!localStorage.getItem("welcomeShown")) {
//   alert("Welcome to our site!");
//   localStorage.setItem("welcomeShown", "true");
// }

// document.querySelector("#someId").value = "something";

// var input = document.querySelector("#username");
// const display = document.querySelector("#display");

// // Load saved value
// input.value = localStorage.getItem("username") || "";
// display.textContent = input.value;

// // Save on input
// input.addEventListener("input", () => {
//   localStorage.setItem("username", input.value);
//   display.textContent = input.value; // show on page instead of alert
// });

// ===== LOCAL STORAGE =====
const localInput = document.querySelector("#localUsername");
const displayLocal = document.querySelector("#displayLocal");
const clearLocalBtn = document.querySelector("#clearLocal");
const localPanel = document.querySelector("#localPanel");
const userEmoji = document.querySelector("#userEmoji");
const localNotify = document.querySelector("#localNotify");

// Load saved username
localInput.value = localStorage.getItem("username") || "";
displayLocal.textContent = localInput.value;

// Show notification
function showNotification(elem) {
  elem.style.display = "block";
  setTimeout(() => {
    elem.style.display = "none";
  }, 1000);
}

function updateLocal() {
  const value = localInput.value;
  displayLocal.textContent = value || "—";
  userEmoji.textContent = value ? "😎" : "🙂";
  localStorage.setItem("username", value);
  localPanel.textContent = JSON.stringify(localStorage, null, 2);
  showNotification(localNotify);
}

localInput.addEventListener("input", updateLocal);
clearLocalBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  localInput.value = "";
  updateLocal();
});

// Initial panel display
localPanel.textContent = JSON.stringify(localStorage, null, 2);

// ===== SESSION STORAGE =====
const sessionVisitsDisplay = document.querySelector("#sessionVisits");
const incrementSessionBtn = document.querySelector("#incrementSession");
const clearSessionBtn = document.querySelector("#clearSession");
const sessionPanel = document.querySelector("#sessionPanel");
const visitEmoji = document.querySelector("#visitEmoji");
const sessionNotify = document.querySelector("#sessionNotify");

let visits = Number(sessionStorage.getItem("visits")) || 0;
sessionVisitsDisplay.textContent = visits;

function updateSession() {
  sessionVisitsDisplay.textContent = visits;
  visitEmoji.textContent = visits < 5 ? "👀" : "🔥";
  sessionStorage.setItem("visits", visits);
  sessionPanel.textContent = JSON.stringify(sessionStorage, null, 2);
  showNotification(sessionNotify);
}

// Buttons
incrementSessionBtn.addEventListener("click", () => {
  visits++;
  updateSession();
});

clearSessionBtn.addEventListener("click", () => {
  sessionStorage.removeItem("visits");
  visits = 0;
  updateSession();
});

// Initial session panel
updateSession();
