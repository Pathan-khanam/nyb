// export default function greet(name) {
//   return `Hello, ${name}!`;
// }

export default class user{
    constructor(name){
        this.name=name
    }
    hi(){
        console.log(`hello,${this.name}!`)
    }
}
export let role ="dev";
export function getProfile(){
return role;

}
let value = 0;

export function increment() {
  value++;
}

export function getValue() {
  return value;
}

function validate(user) {
  return user.name && user.age > 18;
}

export function saveUser(user) {
  if (validate(user)) {
    console.log("User saved");
  }
}

let loggedIn = false;

export function login() {
  loggedIn = true;
}

export function status() {
  return loggedIn;
}


let count = 0;
export function inc() { count++; }
export function get() { return count; }

