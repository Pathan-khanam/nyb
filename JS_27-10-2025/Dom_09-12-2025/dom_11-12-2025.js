var box = document.getElementById("container");
console.log(box.children);

var box = document.getElementById("container");
console.log(box.firstElementChild);

var box = document.getElementById("container");
console.log(box.lastElementChild);

var secondP = document.querySelector("#container p:nth-child(2)");
console.log(secondP.parentNode);

var container = document.getElementById("container");

console.log(container.children);          // all child elements
console.log(container.firstElementChild); // first <p>
console.log(container.lastElementChild);  // last <p>

var mid = container.children[1];
console.log(mid.parentNode);             // the container <div>

var box = document.getElementById("box");
console.log(box.children);

console.log("OK");
var list = document.getElementById("fruits");
console.log(list.firstElementChild);


var nums = document.getElementById("numbers");
console.log(nums.lastElementChild);

var btn = document.getElementById("btn");
console.log(btn.parentNode);

var box = document.getElementById("container");

console.log(box.children);            // <h3>, <p>, <p>
console.log(box.firstElementChild);   // <h3>
console.log(box.lastElementChild);    // <p> (last one)
console.log(box.children[1].parentNode); // <div id="container">
