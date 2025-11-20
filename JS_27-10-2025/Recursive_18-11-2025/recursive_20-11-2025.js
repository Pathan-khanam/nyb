
//a function calling again n again until a stop condition is reached.

//base case stopping point
//recursive call function calling itself

var folder={
    name: "root",
    files:["a.txt","b.txt"],
    subFolders:[
        {
            name:"child1",
            files:[],
            subFolders:[]
        },
        {
            name:"child2",
            files:["c.txt"],
            subFolders:[]
        }
    ]
}

function listFiles(folderObj){
    console.log("Folder:",folderObj.name);

    folderObj.files.forEach(file => console.log("File:", file))

    folderObj.subFolders.forEach(sub =>{
        listFiles(sub);//recursion        
    });
}

listFiles(folder);

// 1to n ascending order 

function ascending(n){
    if(n === 0) return;

    ascending(n-1)//call first
    console.log(n);//print after
}
ascending(5)


//permutations of a string

function permute(str, left=0, right= str.length-1){
    if (left === right){
        console.log(str)
    return
    }
    for (let i= left; i<= right; i++){
        str=swap(str,left, i);
        permute(str, left+1,right)
        str=swap(str,left,i)//backtrack

    } 
}

function swap(s,i, j){
    let chars=s.split("")
        [chars[i],chars[j]]=[chars[j],chars[i]];
        return chars.join("");
    
}
function permute(str, left = 0, right = str.length - 1) {
  if (left === right) {
    console.log(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    str = swap(str, left, i);     // choose
    permute(str, left + 1, right); // explore
    str = swap(str, left, i);     // un-choose (backtrack)
  }
}

function swap(s, i, j) {
  let chars = s.split("");
  [chars[i], chars[j]] = [chars[j], chars[i]];
  return chars.join("");
}

permute("ABCD")

//tower of hanoi
function hanoi(n, from, to, aux){
    if(n === 1){
        console.log(`Move disk 1 from ${from} to ${to}`);
        return;
    }
    hanoi(n-1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`)
    hanoi(n-1, aux, to, from)
}
hanoi(3, "A", "C", "B");


//climb stairs (fibonacci pattern)

function climb(n){
    if(n <= 1) return 1;
    return climb(n-1) + climb(n-2);
}
console.log(climb(5))


function pattern(left,mid){
    return `\\${left}|${mid}|${left}\\`;
}
console.log(pattern("----","===="));



function chooseOperation(op) {
    if (op === "add") {
        return (a, b) => a + b;
    } else if (op === "multiply") {
        return (a, b) => a * b;
    }
}

const addFunc = chooseOperation("add");
const multiplyFunc = chooseOperation("multiply");

console.log(addFunc(2, 3));      // Output: 5
console.log(multiplyFunc(2, 3)); // Output: 6


function counter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Current count: ${count}`);
    }

    increment.reset = function() {
        count = 0;
        console.log("Counter reset!");
    }

    return increment;
}

const myCounter = counter();

myCounter(); // Current count: 1
myCounter(); // Current count: 2
myCounter.reset(); // Counter reset!
myCounter(); // Current count: 1


const events = {
    onClick: () => console.log('Clicked!'),
    onHover: () => console.log('Hovered!')
};

function triggerEvent(eventName) {
    if (typeof events[eventName] === 'function') {
        events[eventName]();
    }
}

triggerEvent('onClick'); // Clicked!
triggerEvent('onHover'); // Hovered!
