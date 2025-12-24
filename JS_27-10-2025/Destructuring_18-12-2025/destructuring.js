var numbers = [10, 20, 30];

var a = numbers[0];
var b = numbers[1];

var numbers = [10, 20, 30];

var [a, b] = numbers;
console.log(a, b); 

var colors = ["red", "green", "blue"];

var [first, , third] = colors;
console.log(first, third); 


var scores = [80];

var [math, science = 50] = scores;
console.log(math, science);

var x = 5;
var y = 10;

[x, y] = [y, x];
console.log(x, y);

const user = {
  name: "John",
  age: 25,
  city: "Delhi"
};

var { name, age } = user;
console.log(name, age);

function showUser({ name, age }) {
  console.log(name, age);
}

showUser({ name: "Neha", age: 22 });


var users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

var [{ name: firstUser }, { name: secondUser }] = users;
console.log(firstUser, secondUser);


var usr = {
  name: "John",
  age: 25
};

var { name, age } = usr;

console.log(name, age);


function createUser(user) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.role);
}

createUser({
  name: "Amit",
  email: "amit@mail.com",
  role: "admin"
});


function createUser({ name, email, role }) {
  console.log(name);
  console.log(email);
  console.log(role);
}




function showCart({ items, totalPrice, currency }) {
  console.log(items);
  console.log(totalPrice);
  console.log(currency);
}


var product = { id: 1, name: "Laptop", price: 800 };

console.log(product.price);



function getServerStatus() {
  return {
    status: "online",
    uptime: "5 days",
    users: 120
  };
}

var { status, users } = getServerStatus();
console.log(status, users);

function getMinMax() {
  return [10, 90];
}

var [min, max] = getMinMax();
console.log(min, max);


var order = {
  id: 101,
  total: 500,
  currency: "USD"
};

var { total: amount, currency: curr } = order;
console.log(amount, curr);


var profile = {
  name: "Rohit",
  settings: {}
};

var {
  settings: { theme = "light", language = "en" }
} = profile;

console.log(theme, language);
var students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 90 }
];

for (var { name, marks } of students) {
  console.log(name, marks);
}

function calculateArea([length, width]) {
  return length * width;
}

console.log(calculateArea([5, 4]));
var students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 90 }
];

for (var { name, marks } of students) {
  console.log(name, marks);
}

var movie = {
  title: "Inception",
  year: 2010,
  rating: 9,
  director: "Nolan"
};

var { title, rating } = movie;
console.log(title, rating);

var response = {
  status: 200,
  data: {
    user: {
      name: "Riya",
      email: "riya@mail.com"
    }
  }
};

var {
  data: {
    user: { name, email }
  }
} = response;

console.log(name, email);


var settings = {
  preferences: {}
};

var {
  preferences: { theme = "light", language = "en" }
} = settings;

console.log(theme, language);


var usr = {};

var {
  profile: { name } = {}
} = usr;

console.log(name); // undefined (no crash)

var users = [
  {
    id: 1,
    profile: { username: "alex" }
  },
  {
    id: 2,
    profile: { username: "sam" }
  }
];

var [
  { profile: { username: user1 } },
  { profile: { username: user2 } }
] = users;

console.log(user1, user2);
