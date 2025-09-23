let newBtn = document.createElement('btn')
newBtn.innerText="click me!"


newBtn.style.color ="white";
newBtn.style.backgroundcolor = "red";

document.querySelector('body').prepend(newBtn)

let para = document.querySelector("p")
para.getAttribute('class')
para.setAttribute('class','newclass')
