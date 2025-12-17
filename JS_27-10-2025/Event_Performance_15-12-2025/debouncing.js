function debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(() =>{
           func.apply(this,args)},delay )
        
    }
}
function hello(msg){
    console.log(msg);

}
var hi=debounce(hello,2000)

hi("hey")
hi("whatsup")
hi("welcome")//only the last call will be executes
var searchInput = document.getElementById("search");

function fetchSuggestions(query) {
  console.log("Fetching suggestions for:", query);
  // API call here
}

const debouncedFetch = debounce(fetchSuggestions, 300);

searchInput.addEventListener("input", (e) => {
  debouncedFetch(e.target.value);
});

function handleResize() {
  console.log("Window resized:", window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", debounce(handleResize, 200));

function loadMoreContent() {
  console.log("Loading more content...");
}

window.addEventListener("scroll", debounce(() => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreContent();
  }
}, 250));
const submitButton = document.getElementById("submitBtn");

function handleSubmit() {
  console.log("Form submitted!");
}

submitButton.addEventListener("click", debounce(handleSubmit, 1000));
const textArea = document.getElementById("notes");

function autoSave(content) {
  console.log("Auto-saving:", content);
  // API call to save
}

textArea.addEventListener("input", debounce((e) => autoSave(e.target.value), 1500));
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ----------------------
// 1. Search Input Autocomplete
// ----------------------
var searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

var fetchSuggestions = debounce((query) => {
  searchResults.textContent = `Fetching suggestions for "${query}"...`;
}, 300);

searchInput?.addEventListener("input", (e) => {
  fetchSuggestions(e.target.value);
});

// ----------------------
// 2. Window Resize Event
// ----------------------
const resizeInfo = document.getElementById("resizeInfo");

function handleResize() {
  resizeInfo.textContent = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
}

window.addEventListener("resize", debounce(handleResize, 200));

// ----------------------
// 3. Scroll Event (Infinite Scroll)
// ----------------------
const scrollContent = document.getElementById("scrollContent");

function loadMoreContent() {
  const p = document.createElement("p");
  p.textContent = "Loaded more content...";
  scrollContent.appendChild(p);
}

scrollContent?.addEventListener("scroll", debounce(() => {
  if (scrollContent.scrollTop + scrollContent.clientHeight >= scrollContent.scrollHeight) {
    loadMoreContent();
  }
}, 250));

// ----------------------
// 4. Button Click (Prevent Multiple Submits)
// ----------------------
const submitBtn = document.getElementById("submitBtn");

function handleSubmit() {
  alert("Form submitted!");
}

submitBtn?.addEventListener("click", debounce(handleSubmit, 1000));

// ----------------------
// 5. Filter Table Data
// ----------------------
const filterInput = document.getElementById("filter");
const table = document.getElementById("table");

function filterTable(query) {
  Array.from(table.rows).forEach(row => {
    row.style.display = row.cells[0].textContent.toLowerCase().includes(query.toLowerCase()) ? "" : "none";
  });
}

filterInput?.addEventListener("input", debounce((e) => filterTable(e.target.value), 300));

// ----------------------
// 6. Auto-Save Form Inputs
// ----------------------
const notes = document.getElementById("notes");
const autoSaveStatus = document.getElementById("autoSaveStatus");

function autoSave(content) {
  autoSaveStatus.textContent = `Auto-saved at ${new Date().toLocaleTimeString()}: "${content}"`;
}

notes?.addEventListener("input", debounce((e) => autoSave(e.target.value), 1500));

// ----------------------
// 7. Mouse Move Event
// ----------------------
const mouseMoveOutput = document.getElementById("mouseMoveOutput");

function updateTooltip(e) {
  mouseMoveOutput.textContent = `Mouse at X:${e.clientX}, Y:${e.clientY}`;
}

mouseMoveOutput?.addEventListener("mousemove", debounce(updateTooltip, 100));

// ----------------------
// 8. Real-Time Username Validation
// ----------------------
const usernameInput = document.getElementById("username");
const usernameStatus = document.getElementById("usernameStatus");

function validateUsername(name) {
  usernameStatus.textContent = name.length < 3 ? "Username too short" : "Username valid";
}

usernameInput?.addEventListener("input", debounce((e) => validateUsername(e.target.value), 400));

// ----------------------
// 9. Textarea Word Count
// ----------------------
const wordCountText = document.getElementById("wordCountText");
const wordCountOutput = document.getElementById("wordCountOutput");

function countWords(text) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  wordCountOutput.textContent = `Word count: ${words}`;
}

wordCountText?.addEventListener("input", debounce((e) => countWords(e.target.value), 300));

// ----------------------
// 10. Simulated Voice-to-Text Transcription
// ----------------------
const voiceBtn = document.getElementById("voiceBtn");
const voiceOutput = document.getElementById("voiceOutput");

const transcribeAudioChunk = debounce((chunk) => {
  voiceOutput.textContent += chunk + " ";
}, 500);

voiceBtn?.addEventListener("click", () => {
  // Simulate chunks of speech
  ["Hello", "this", "is", "a", "test"].forEach((word, i) => {
    setTimeout(() => transcribeAudioChunk(word), i * 100);
  });
});