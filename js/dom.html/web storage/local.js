//save data
localStorage.setItem("username", "pathan");
localStorage.setItem("company",'nyb')
localStorage.setItem("role",'developer')

//get data
let user= localStorage.getItem("username");
let cmpny=localStorage.getItem("company");
console.log(user);
console.log(cmpny)


//remove a specific item
localStorage.removeItem("username");

//clear everything
//localStorage.clear();


//get no.of stored items by ('.') dot operator using length

console.log(localStorage.length);

//get key name by index using array
console.log(localStorage.key(0));