//save data
localStorage.setItem("username", "pathan");

//get data
let user= localStorage.getItem("username");
console.log(user);


//remove a specific item
localStorage.removeItem("username");

//clear everything
localStorage.clear();


