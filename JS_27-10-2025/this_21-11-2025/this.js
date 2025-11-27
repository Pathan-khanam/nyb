// this refers to the object that is currently calling the function 
//but the value is depending on how the function is called 
//not where it was written
var car={
    brand:"BMW",
    show(){
        console.log(this.brand)
    }
}
car.show();

function test(){
    console.log(this)
}
test()


var obj={
    value:10,
    demo:()=> {
        console.log(this.value)// arrow function donot have this-> they take from outside(global) means parent function not from obj

    }
}
obj.demo()


function student(name){
    this.name=name
}
var s1=new student("sara")
    console.log(s1.name);

    //call,bind,apply
    function show(){
        console.log(this.name)
    }
    var a={
        name:"zara"
    }
     show.call(a);

     function hi(city,country){
        console.log(`Hi,I'm ${this.name} from ${city},${country}`)
     }
     var person={
        name:"Ayaan"
     }
     hi.call(person,"bnglr,india")


    function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const prsn = { name: "Dana" };

greet.call(prsn, "Hello");   // Hello, Dana
greet.apply(prsn, ["Hi"]);   // Hi, Dana

const boundGreet = greet.bind(prsn);
boundGreet("Hey");             // Hey, Dana

const prson = {
  name: "Eva",
  greet: () => {
    console.log(this.name);
  }
};

prson.greet(); // undefined


console.log(this); 
// Browser: window
// Node.js: global

//"use strict";
console.log(this); // undefined


function show() {
  console.log(this);
}
show(); 
// window (browser) or global object



