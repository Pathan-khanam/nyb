function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// ----------------------
// 1. Window Focus/Blur
// ----------------------
const focusOutput = document.getElementById("focusOutput");

function handleFocus() {
  focusOutput.textContent = `Window focused at ${new Date().toLocaleTimeString()}`;
}

function handleBlur() {
  focusOutput.textContent = `Window blurred at ${new Date().toLocaleTimeString()}`;
}

window.addEventListener("focus", throttle(handleFocus, 1000));
window.addEventListener("blur", throttle(handleBlur, 1000));

// ----------------------
// 2. Network Bandwidth Monitoring (Simulated)
// ----------------------
const networkOutput = document.getElementById("networkOutput");

function updateNetworkSpeed(speed) {
  networkOutput.textContent = `Current speed: ${speed} Mbps`;
}

function simulateNetwork() {
  const speed = Math.floor(Math.random() * 100);
  throttledNetwork(speed);
}

const throttledNetwork = throttle(updateNetworkSpeed, 500);
setInterval(simulateNetwork, 100);

// ----------------------
// 3. Game Scoreboard Updates
// ----------------------
const scoreBtn = document.getElementById("scoreBtn");
const scoreOutput = document.getElementById("scoreOutput");
let score = 0;

function updateScore() {
  scoreOutput.textContent = `Score: ${score}`;
}

const throttledScore = throttle(updateScore, 200);

scoreBtn?.addEventListener("click", () => {
  score++;
  throttledScore();
});

// ----------------------
// 4. Voice Volume Meter (Simulated)
// ----------------------
const volumeMeter = document.getElementById("volumeMeter");

function updateVolume(vol) {
  volumeMeter.style.backgroundColor = `rgb(${vol}, ${255-vol}, 100)`;
  volumeMeter.textContent = `Volume: ${vol}`;
}

function simulateVolume() {
  const vol = Math.floor(Math.random() * 255);
  throttledVolume(vol);
}

const throttledVolume = throttle(updateVolume, 50);
setInterval(simulateVolume, 20);

// ----------------------
// 5. Drag-to-Resize Panels
// ----------------------
const resizeBox = document.getElementById("resizeBox");

function handleResizeBox() {
  resizeBox.textContent = `Size: ${resizeBox.offsetWidth}x${resizeBox.offsetHeight}`;
}

resizeBox?.addEventListener("mousemove", throttle(handleResizeBox, 100));

// ----------------------
// 6. Virtual Keyboard Input
// ----------------------
const virtualKey = document.getElementById("virtualKey");
const keyOutput = document.getElementById("keyOutput");
let keysBuffer = "";

function sendKeys() {
  if (keysBuffer) {
    keyOutput.textContent += keysBuffer + " ";
    keysBuffer = "";
  }
}

const throttledKeys = throttle(sendKeys, 200);

virtualKey?.addEventListener("input", (e) => {
  keysBuffer += e.target.value.slice(-1);
  throttledKeys();
});

// ----------------------
// 7. Scroll-Triggered Analytics
// ----------------------
const scrollContent = document.getElementById("scrollContent");
const scrollOutput = document.getElementById("scrollOutput");

function trackScroll() {
  scrollOutput.textContent = `Last tracked scroll: ${scrollContent.scrollTop}`;
}

scrollContent?.addEventListener("scroll", throttle(trackScroll, 500));

// ----------------------
// 8. Multiplayer Position Sync (Drag)
// ----------------------
const playerBox = document.getElementById("playerBox");
const positionOutput = document.getElementById("positionOutput");
let isDragging = false;

playerBox?.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("mousemove", throttle((e) => {
  if (!isDragging) return;
  playerBox.style.left = e.clientX + "px";
  playerBox.style.top = e.clientY + "px";
  positionOutput.textContent = `Last synced position: X:${e.clientX}, Y:${e.clientY}`;
}, 100));

// ----------------------
// 9. Auto-Update Weather Map (Simulated)
// ----------------------
const weatherOutput = document.getElementById("weatherOutput");
const weatherBtn = document.getElementById("weatherBtn");

function updateWeather() {
  weatherOutput.textContent = `Last update: ${new Date().toLocaleTimeString()}`;
}

const throttledWeather = throttle(updateWeather, 1000);

weatherBtn?.addEventListener("click", throttledWeather);

// ----------------------
// 10. Fitness Tracker Heart Rate (Simulated)
// ----------------------
const heartRateOutput = document.getElementById("heartRateOutput");
const heartBtn = document.getElementById("heartBtn");

function updateHeartRate() {
  const bpm = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
  heartRateOutput.textContent = `Heart Rate: ${bpm} BPM`;
}

const throttledHeart = throttle(updateHeartRate, 2000);

heartBtn?.addEventListener("click", throttledHeart);