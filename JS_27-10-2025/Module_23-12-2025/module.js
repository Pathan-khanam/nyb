import { add, pi} from "./module1.js";
import { hi, subtract } from './module1.js';

import { increment } from "./default.js";
increment();

import "./module1.js";

import counter from "./module1.js";

counter.inc();
counter.inc();
console.log(counter.value());



import { getValue } from "./default.js";
console.log(getValue()); // 1


console.log(hi(5, 3));    
console.log(subtract(5, 3));
console.log(add(5,10));
console.log(pi)

import * as cache from "./module1.js";

cache.set("user", { name: "Rahul" });

if (cache.has("user")) {
  console.log(cache.get("user"));
}


import "./module1.js";

console.log(window.appStarted);
import { isEnabled } from "./module1.js";

if (isEnabled("darkMode")) {
  console.log("Dark mode ON");
}
import { login, status } from "./default.js";

login();
console.log(status()); 


import { createLogger } from "./module1.js";

const authLog = createLogger("Auth");
authLog("Login success");
