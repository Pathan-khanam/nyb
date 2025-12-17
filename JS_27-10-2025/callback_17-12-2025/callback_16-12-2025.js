function handleClick() {
  console.log("Button clicked!");
}

document.getElementById("btn").addEventListener("click", handleClick);


function getUserData(callback) {
  setTimeout(() => {
    callback({ name: "sara", age: 10 });
  }, 1000);
}

getUserData(function(user) {
  console.log("User loaded:", user);
});

function validateForm(data, onSuccess, onError) {
  if (data.email.includes("@")) {
    onSuccess("Form is valid");
  } else {
    onError("Invalid email");
  }
}

validateForm(
  { email: "test@mail.com" },
  msg => console.log(msg),
  err => console.error(err)
);

function uploadFile(file, onProgress, onComplete) {
  let progress = 0;

  const interval = setInterval(() => {
    progress += 20;
    onProgress(progress);

    if (progress === 100) {
      clearInterval(interval);
      onComplete("Upload finished");
    }
  }, 500);
}

uploadFile(
  "image.png",
  p => console.log(`Uploading: ${p}%`),
  msg => console.log(msg)
);


function setAlarm(callback) {
  setTimeout(() => {
    callback("⏰ Alarm ringing!");
  }, 3000);
}

setAlarm(message => console.log(message));


function processPayment(amount, onSuccess, onFailure) {
  if (amount > 0) {
    onSuccess("Payment successful");
  } else {
    onFailure("Payment failed");
  }
}

processPayment(
  100,
  msg => console.log(msg),
  err => console.error(err)
);

document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);

function doTask(taskName, callback) {
  console.log(`Doing task: ${taskName}`);
  callback();
}

doTask("Backup", () => {
  console.log("Task completed successfully");
});

function placeOrder(order, callback) {
  console.log("Order placed:", order);

  setTimeout(() => {
    callback("Order delivered");
  }, 2000);
}

placeOrder("Pizza", status => {
  console.log(status);
});

function login(user, callback) {
  console.log("Logging in:", user);

  setTimeout(() => {
    callback();
  }, 1000);
}

function getProfile(callback) {
  console.log("Fetching profile...");

  setTimeout(() => {
    callback();
  }, 1000);
}

function getSettings(callback) {
  console.log("Fetching settings...");

  setTimeout(() => {
    callback();
  }, 1000);
}

// Callback Hell 😵
login("John", () => {
  getProfile(() => {
    getSettings(() => {
      console.log("Done ✅");
    });
  });
});

async function startApp() {
  await login("John");
  await getProfile();
  await getSettings();
  console.log("Done ✅");
}

startApp();
function login(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Logging in:", user);
      resolve();
    }, 1000);
  });
}

function getProfile() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetching profile...");
      resolve();
    }, 1000);
  });
}

function getSettings() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetching settings...");
      resolve();
    }, 1000);
  });
}

login("riya")
  .then(getProfile)
  .then(getSettings)
  .then(() => console.log("Done ✅"));


  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 1000);
});

promise.then(result => console.log(result));

function login(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user) resolve("Login successful");
      else reject("Login failed");
    }, 1000);
  });
}

login("John")
  .then(msg => console.log(msg))
  .catch(err => console.error(err));

  function getProfile() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Profile data");
    }, 1000);
  });
}

login("John")
  .then(getProfile)
  .then(profile => console.log(profile))
  .catch(err => console.error(err));
function placeOrder() {
  return Promise.resolve("Order placed");
}

function processPayment() {
  return Promise.resolve("Payment successful");
}

function deliverOrder() {
  return Promise.resolve("Order delivered");
}

placeOrder()
  .then(msg => {
    console.log(msg);
    return processPayment();
  })
  .then(msg => {
    console.log(msg);
    return deliverOrder();
  })
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
function payment(amount) {
  return new Promise((resolve, reject) => {
    amount > 0 ? resolve("Paid") : reject("Payment failed");
  });
}

payment(-100)
  .then(console.log)
  .catch(console.error);
