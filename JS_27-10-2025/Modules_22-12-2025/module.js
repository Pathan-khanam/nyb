
import hello from "./module1.js";
import{a, login} from "./module2.js";
import{sendMsg as send} from './module2.js';
import * as math from'./module2.js';
import log from "./module1.js";
import { increment } from "./module1.js";
increment();

// main
import { addTask, removeTask, listTasks } from './module1.js';

addTask("Finish homework");
addTask("Complete coding project");
addTask("Buy groceries");

console.log(listTasks());  

removeTask("Complete coding project");
console.log(listTasks()); 




console.log(hello)
console.log(a)
console.log(login)
console.log("this is a js file")

console.log(send());

console.log(math.x);
console.log(math.b);
console.log(math.multiply);
function signUp(){
    console.log('signUp');

}

log("Application Started Successfully!")
// function login(){
//     console.log("login")
// }
