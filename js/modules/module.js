
import hello from "./module1.js";
import{a, login} from "./module2.js";
import{sendMsg as send} from './module2.js';
import * as math from'./module1.js';

console.log(hello)
console.log(a)
console.log(login)
console.log("this is a js file")

console.log(send());

console.log(math.a);
console.log(math.b);
console.log(math.multiply());
function signUp(){
    console.log('signUp');

}
// function login(){
//     console.log("login")
// }
