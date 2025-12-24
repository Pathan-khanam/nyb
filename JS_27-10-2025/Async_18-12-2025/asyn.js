async function greetUser() {
  return "Hello, Alice!";
}

async function main() {
  const message = await greetUser();
  console.log(message);
}

main();

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Bob", age: 30 });
    }, 2000);
  });
}

async function showUser() {
  console.log("Fetching user data...");
  const user = await fetchUserData();
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

showUser();

function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(city === "London") resolve("Sunny");
      else reject("City not found");
    }, 1500);
  });
}

async function showWeather() {
  try {
    const weather = await fetchWeather("London");
    console.log("Weather:", weather);
  } catch (error) {
    console.log("Error:", error);
  }
}

showWeather();

function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve("Alice"), 1000));
}

function fetchOrders() {
  return new Promise(resolve => setTimeout(() => resolve(["Book", "Pen"]), 1500));
}

async function showUserOrders() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  console.log(`${user} has ordered: ${orders.join(", ")}`);
}

showUserOrders();

function fetchProfile() {
  return new Promise(resolve => setTimeout(() => resolve("Profile loaded"), 1000));
}

function fetchMessages() {
  return new Promise(resolve => setTimeout(() => resolve("Messages loaded"), 1200));
}

async function loadDashboard() {
  const results = await Promise.all([fetchProfile(), fetchMessages()]);
  console.log(results.join(" & "));
}

loadDashboard();
function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve("Alice"), 1000));
}

function fetchOrders() {
  return new Promise(resolve => setTimeout(() => resolve(["Book", "Pen"]), 1500));
}

async function showUserOrders() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  console.log(`${user} has ordered: ${orders.join(", ")}`);
}

showUserOrders();
