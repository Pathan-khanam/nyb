
export function add(a,b){
    return a + b;
}

export var pi=3.14;
export const hi= (a, b) => a + b;
export const subtract = (a, b) => a - b;


export function heavyTask() {
  console.log("This is a heavy task that runs only when needed.");
}

console.log("Analytics initialized");

let count = 0;

export default {
  inc() {
    count++;
  },
  value() {
    return count;
  }
};


const cache = new Map();

export function set(key, value) {
  cache.set(key, value);
}

export function get(key) {
  return cache.get(key);
}

export function has(key) {
  return cache.has(key);
}

console.log("App initialized");

window.appStarted = true;

const flags = {
  darkMode: true,
  betaUser: false
};

export function isEnabled(feature) {
  return flags[feature];
}

export function createLogger(prefix) {
  return function (msg) {
    console.log(`[${prefix}] ${msg}`);
  };
}


