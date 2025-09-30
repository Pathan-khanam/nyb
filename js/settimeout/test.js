
setTimeout(() => {
  console.log("hello")
},2000)



function greet(name){
   console.log('hello', name);
}
setTimeout(greet,3000,'pathan');


let txt= setTimeout(() => {
    console.log("pathan")
},1000);
clearTimeout(txt);



console.log("1");
setTimeout(() => {
  console.log("2")
}, 0);
console.log('3');


let count=0;
function tick(){
  console.log("tick", ++count);
  if(count <5){
    setTimeout(tick,2000);
  }
}
setTimeout(tick,2000)


//debouncing function using settimeout.
function debounce(fn, delay){
  let timer;
  return(...args) => {
    clearTimeout(timer);
    timer= setTimeout(() => fn(...args), delay);

  };
}


const log = debounce((msg) => console.log("user typed:",msg),500);
log("hi")
log('hello')
log('hey')//only hey prints after 500ms



function wait(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function demo() {
  console.log('start');
  await wait(2000);
  console.log("end after 2s");
}
demo();