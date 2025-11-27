function counter(start=0){
    var count =start;
    return function(){
        count ++;
        return count;
    }

}
var counter1=counter()
console.log(counter1());
console.log(counter1());

var counter2=counter(10);
console.log(counter2())


function emoji(n){
    var emojis=["🐣","🌱","🌺","🍹","🎉"]
    return function(...args){
        return n(...args).split(" ").map(word => word + emojis[Math.floor(Math.random()* emojis.length)]).join(" ");
    }
}
var greet = name => `hello ${name}, have a nice day`
var emojigreet=emoji(greet)

console.log(emojigreet("khan"))

//21-11-2025
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `${text} <button onclick="this.parentNode.remove()">Delete</button>`;
  
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
