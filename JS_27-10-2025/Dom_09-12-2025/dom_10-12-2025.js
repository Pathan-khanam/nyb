// 1️⃣ Change colors
document.getElementById("h1").style.color = "blue";
document.getElementById("p1").style.color = "green";
document.getElementById("p2").style.color = "purple";
document.getElementById("h2").style.color = "red";
document.getElementById("h3").style.color = "orange";
document.getElementById("h4").style.color = "brown";


// 2️⃣ Add background colors
document.getElementById("h1").style.backgroundColor = "lightyellow";
document.getElementById("p1").style.backgroundColor = "lightpink";
document.getElementById("p2").style.backgroundColor = "lightblue";
document.getElementById("h2").style.backgroundColor = "lightgreen";
document.getElementById("h3").style.backgroundColor = "lavender";
document.getElementById("h4").style.backgroundColor = "beige";


// 3️⃣ Add padding + borders
let allTags = document.querySelectorAll("h1, h2, h3, h4, p");

allTags.forEach(function(item){
    item.style.padding = "8px";
    item.style.border = "1px solid black";
    item.style.marginBottom = "5px";
});


// 4️⃣ Change text using DOM
document.getElementById("h1").textContent = "Updated Main Heading";
document.getElementById("p1").textContent = "This paragraph text is changed.";
document.getElementById("p2").textContent = "Another updated paragraph.";
document.getElementById("h2").textContent = "Updated Sub Heading";
document.getElementById("h3").textContent = "New Simple Heading Text";
document.getElementById("h4").textContent = "Updated Expression Heading";


// 5️⃣ Add new content with DOM
var newPara = document.createElement("p");
newPara.textContent = "This content is added using DOM!";
newPara.style.backgroundColor = "gold";
newPara.style.padding = "8px";
newPara.style.border = "1px solid brown";

document.body.appendChild(newPara);

document.getElementById("h2").style.textShadow = "2px 2px 4px gray";
document.getElementById("h3").style.textShadow = "1px 1px 3px red";

document.getElementById("h1").style.fontSize = "35px";
document.getElementById("h1").style.textDecoration = "underline";

document.getElementById("p1").style.fontStyle = "italic";
document.getElementById("p2").style.fontWeight = "bold";

document.getElementById("h4").style.background = "lightcoral";
document.getElementById("h4").style.borderRadius = "10px";
document.getElementById("h4").style.padding = "10px";

let paras = document.querySelectorAll("p");

paras.forEach(p => {
  p.style.backgroundColor = "lightyellow";
  p.style.padding = "8px";
  p.style.border = "1px dashed brown";
});

document.getElementById("h1").innerHTML = "⭐ DOM Updated Heading ⭐";
document.getElementById("h2").innerHTML = "🔥 New Subheading Using DOM";


let h3 = document.getElementById("h3");

h3.addEventListener("mouseenter", function(){
  this.style.background = "lightblue";
  this.style.color = "black";
});

h3.addEventListener("mouseleave", function(){
  this.style.background = "lavender";
  this.style.color = "black";
});


setTimeout(() => {
  document.getElementById("p2").remove();
}, 3000);  // removes after 3 seconds


var mainHeading = document.getElementById("mainHeading");

var beforeBox = document.createElement("div");
beforeBox.textContent = "Inserted BEFORE the Main Heading";
beforeBox.style.backgroundColor = "lightyellow";
beforeBox.style.padding = "8px";
beforeBox.style.border = "2px solid orange";

mainHeading.before(beforeBox);

var afterBox = document.createElement("div");
afterBox.textContent = "Inserted AFTER the Main Heading";
afterBox.style.backgroundColor = "lightpink";
afterBox.style.padding = "8px";
afterBox.style.border = "2px solid red";

mainHeading.after(afterBox);

var infoPara = document.getElementById("infoPara");

var prependText = document.createElement("span");
prependText.textContent = "▶ Start Text | ";
prependText.style.color = "green";
prependText.style.fontWeight = "bold";

infoPara.prepend(prependText);

var appendText = document.createElement("span");
appendText.textContent = " | End Text ◀";
appendText.style.color = "blue";
appendText.style.fontWeight = "bold";

infoPara.append(appendText);

var descPara = document.getElementById("descPara");

var noteBox = document.createElement("p");
noteBox.textContent = "🔥 Added Before Description Paragraph";
noteBox.style.backgroundColor = "lightgreen";
noteBox.style.padding = "6px";
noteBox.style.border = "1px solid black";

descPara.before(noteBox);
