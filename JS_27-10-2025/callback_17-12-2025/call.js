const promise = new Promise((resolve, reject) => {
  
});
//A Promise resolves only once and never changes state again


  function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
      ]);
    }, 1000);
  });
}

async function loadUsers() {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (err) {
    console.error(err);
  }
}

loadUsers();


function resetPassword(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      email ? resolve("Reset link sent") : reject("Email not found");
    }, 1000);
  });
}

resetPassword("user@mail.com")
  .then(console.log)
  .catch(console.error);

  function verifyOTP(otp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      otp === 1234 ? resolve("OTP verified") : reject("Invalid OTP");
    }, 800);
  });
}

verifyOTP(1234)
  .then(console.log)
  .catch(console.error);


  function validateCoupon(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      code === "SAVE10"
        ? resolve(10)
        : reject("Invalid coupon");
    }, 500);
  });
}

validateCoupon("SAVE10")
  .then(discount => console.log("Discount:", discount))
  .catch(console.error);


  function checkStock(productId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ productId, inStock: true });
    }, 600);
  });
}

checkStock(101).then(console.log);


function processRefund(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Refund initiated for order ${orderId}`);
    }, 1200);
  });
}

processRefund(55).then(console.log);


function compressImage(sizeMB) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      sizeMB < 10 ? resolve("Image compressed") : reject("Image too large");
    }, 900);
  });
}

compressImage(5)
  .then(console.log)
  .catch(console.error);


  function uploadVideo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Video uploaded");
    }, 2000);
  });
}

uploadVideo().then(console.log);


function backupDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Database backup completed");
    }, 3000);
  });
}

backupDatabase().then(console.log);


function cleanLogs() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Old logs deleted");
    }, 1500);
  });
}

cleanLogs().then(console.log);


function loadComponent() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Component loaded");
    }, 700);
  });
}

loadComponent().then(console.log);


function loadUser() {
  return Promise.resolve("User loaded");
}

function loadOrders() {
  return Promise.resolve("Orders loaded");
}

function loadMessages() {
  return Promise.resolve("Messages loaded");
}

Promise.all([loadUser(), loadOrders(), loadMessages()])
  .then(results => console.log("Dashboard:", results));


  function fetchData(tries = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tries < 2 ? reject("Failed") : resolve("Data loaded");
    }, 500);
  });
}

fetchData(1)
  .catch(() => fetchData(2))
  .then(console.log);


  function fetchData(tries = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tries < 2 ? reject("Failed") : resolve("Data loaded");
    }, 500);
  });
}

fetchData(1)
  .catch(() => fetchData(2))
  .then(console.log);

  // -------------------------
// 1. Callbacks
// -------------------------
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function afterGreet() {
  console.log("Callback executed after greeting!");
}

greet("Alice", afterGreet);

// -------------------------
// 2. Promises
// -------------------------

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // change to false to test reject
  setTimeout(() => {
    if (success) resolve("Promise Resolved Successfully!");
    else reject("Promise Rejected!");
  }, 1000);
});

myPromise
  .then(result => console.log(result))   // resolve
  .catch(error => console.error(error)); // reject

// Promise.race()
const p1 = new Promise(res => setTimeout(() => res("P1 done!"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 done!"), 1000));
const p3 = new Promise(res => setTimeout(() => res("P3 done!"), 2000));

Promise.race([p1, p2, p3])
  .then(winner => console.log("Race winner:", winner));

// Promise.allSettled()
const p4 = new Promise(res => setTimeout(() => res("P4 Success!"), 1000));
const p5 = new Promise((_, rej) => setTimeout(() => rej("P5 Failed!"), 1500));

Promise.allSettled([p4, p5]).then(results => {
  console.log("All Settled Results:");
  results.forEach((result, idx) => {
    console.log(`Promise ${idx + 4}:`, result.status, result.reason || result.value);
  });
});

// Promise.any() - first fulfilled promise
const p6 = new Promise((_, rej) => setTimeout(() => rej("P6 Failed!"), 1000));
const p7 = new Promise(res => setTimeout(() => res("P7 Success!"), 2000));

Promise.any([p6, p7])
  .then(firstSuccess => console.log("First fulfilled promise:", firstSuccess))
  .catch(err => console.error("All promises rejected:", err));

// -------------------------
// 3. Async / Await
// -------------------------
async function asyncDemo() {
  try {
    const result1 = await myPromise; // using previous promise
    console.log("Async/Await Result:", result1);

    const raceResult = await Promise.race([p1, p2, p3]);
    console.log("Async Race Result:", raceResult);
  } catch (error) {
    console.error("Async Error:", error);
  }
}

asyncDemo();

function fetchUserFeed(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, content: "Hello world!" },
        { postId: 2, content: "Promises are cool" }
      ]);
    }, 1000);
  });
}

fetchUserFeed(101).then(feed => console.log("Feed:", feed));


function likePost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Post ${postId} liked`);
    }, 500);
  });
}

likePost(2).then(console.log);


function searchFlights(origin, destination) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { flight: "AI101", price: 300 },
        { flight: "BA202", price: 350 }
      ]);
    }, 1200);
  });
}

searchFlights("NYC", "LON").then(console.log);



function bookHotel(hotelId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hotelId === 1 ? resolve("Hotel booked successfully") : reject("No rooms available");
    }, 800);
  });
}

bookHotel(1).then(console.log).catch(console.error);


function getNearbyRestaurants(location) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pizza Place", "Sushi Bar", "Burger Joint"]);
    }, 1000);
  });
}

getNearbyRestaurants("Downtown").then(console.log);



function placeFoodOrder(restaurant, items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Order placed at ${restaurant} for ${items.join(", ")}`);
    }, 900);
  });
}

placeFoodOrder("Pizza Place", ["Margherita", "Coke"]).then(console.log);


function fetchMovies(genre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Movie1", "Movie2", "Movie3"]);
    }, 800);
  });
}

fetchMovies("Action").then(console.log);


function streamMovie(movie) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Streaming ${movie} started`);
    }, 500);
  });
}

streamMovie("Movie1").then(console.log);



function turnOnDevice(deviceName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${deviceName} turned on`);
    }, 600);
  });
}

turnOnDevice("Air Conditioner").then(console.log);


function getSensorData(sensor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ sensor, temperature: 24, humidity: 60 });
    }, 700);
  });
}

getSensorData("Living Room").then(console.log);


function loadUserData() { return Promise.resolve("User data loaded"); }
function loadNotifications() { return Promise.resolve("Notifications loaded"); }
function loadMessages() { return Promise.resolve("Messages loaded"); }

Promise.all([loadUserData(), loadNotifications(), loadMessages()])
  .then(results => console.log("Dashboard:", results));




  function checkBalance(accountId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ accountId, balance: 1200 });
    }, 500);
  });
}

checkBalance(501).then(console.log);

  function transferMoney(accountId, amount) {
  return checkBalance(accountId).then(balanceData => {
    if (balanceData.balance >= amount) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Transferred $${amount} from account ${accountId}`);
        }, 700);
      });
    } else {
      return Promise.reject("Insufficient funds");
    }
  });
}

transferMoney(501, 500).then(console.log).catch(console.error);




function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(userId === 1) {
        resolve({ id: 1, name: "John" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

getUser(1)
  .then(user => console.log("User info:", user))
  .catch(err => console.error(err));


  function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      age >= 18 ? resolve("Allowed") : reject("Not allowed");
    }, 700);
  });
}

checkAge(20).then(console.log).catch(console.error);
checkAge(15).then(console.log).catch(console.error);


function buyItem(item) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Bought ${item}`), 800);
  });
}

function shipItem(order) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${order} | Shipped`), 1000);
  });
}

buyItem("Book")
  .then(shipItem)
  .then(console.log);



  function fetchA() { return Promise.resolve("Data A loaded"); }
function fetchB() { return Promise.resolve("Data B loaded"); }

Promise.all([fetchA(), fetchB()])
  .then(results => console.log("Results:", results));


  function simpleApiCall(tryCount = 1) {
  return new Promise((resolve, reject) => {
    if(tryCount === 2) {
      resolve("API call successful");
    } else {
      reject("API call failed");
    }
  });
}

simpleApiCall(1)
  .catch(() => simpleApiCall(2))
  .then(console.log);



  function greetPerson(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye! See you soon.");
}

greetPerson("Alice", sayGoodbye);

function calculateTotal(price, tax, callback) {
  const total = price + tax;
  callback(total);
}

calculateTotal(100, 20, function(finalAmount) {
  console.log("The final amount is:", finalAmount);
});



console.log("Start day");

setTimeout(() => {
  console.log("Step 1: Wake up");
  
  setTimeout(() => {
    console.log("Step 2: Have breakfast");
    
    setTimeout(() => {
      console.log("Step 3: Go to work");
    }, 1000);
    
  }, 1000);
  
}, 1000);



const fruits = ["Apple", "Banana", "Cherry"];

// forEach with callback
fruits.forEach(function(fruit) {
  console.log("I like", fruit);
});

// map with callback
const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths);


function fetchUserData(callback) {
  setTimeout(() => {
    console.log("User data fetched!");
    callback({ name: "Alice", age: 25 });
  }, 2000);
}

function showUserProfile(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

fetchUserData(showUserProfile);
