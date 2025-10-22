//change style color
document.querySelector(".text").style.color="blue";
//another method for change text and color
document.getElementById("heading").style.color="pink"
document.getElementById("heading").textContent="welcome to js dom"

//change text 
let head=document.getElementById("heading")
head.textContent="hi pathan"
head.style.color="orange"

//change HTML inside--->returns or sets HTML content(including tags)inside an element
document.querySelector("h2").innerHTML="<b>khan</b>";

//change HTML text--->returns or sets only visible text inside an element(no HTMLTags)
document.querySelector("#value").innerText="Hi"

console.log(head.innerHTML)

console.log(head.innerText)


//setting values
// let box=document.getElementById("msg");
// box.innerHTML="<h3>welcome <b>Pathan!</b></h3>"
// box.innerText="<h3>Welcom <b>Pathan!</b></h3>"

//difference b/w innerText-->visible only,innerHTML-->HTML code(with tags),textContent-->All text(visible+hidden)

let box=document.getElementById("box")
console.log("innerHTML:",box.innerHTML);
console.log("innerText:",box.innerText);
console.log("textContent:",box.textContent);


