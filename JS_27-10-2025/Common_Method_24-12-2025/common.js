console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);

history.back();
history.forward();
history.go(-1);
alert("Welcome!");

const ok = confirm("Are you sure?");
console.log(ok);

const name = prompt("Enter your name");
console.log(name);
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);

console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

var timer = setInterval(() => {
  console.log("Every second");
}, 1000);

// Stop interval
clearInterval(timer);

console.log(window.innerWidth);
console.log(window.innerHeight);

const newWin = window.open("https://example.com", "_blank");

// Close after 3 seconds
setTimeout(() => {
  newWin.close();
}, 3000);

window.addEventListener("online", () => {
  console.log("Internet connected");
});

window.addEventListener("offline", () => {
  console.log("Internet disconnected");
});

console.log(window.scrollY);
var timer;

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    alert("Session expired due to inactivity");
  }, 5000);
}

window.addEventListener("mousemove", resetTimer);
window.addEventListener("keydown", resetTimer);

resetTimer();
