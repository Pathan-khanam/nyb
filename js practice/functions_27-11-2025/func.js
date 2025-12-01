function sum(a,b){
    console.log(2+3);

}
sum()
// func that returns a counter using closure

function countclosure(){
    var count=0;
    return function (){
 return  ++count;
    }
}
console.log(countclosure())
var c=countclosure()
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())


//implement a custom map() func

function map(arr,callback){
    var result=[]
    for(let i=0; i<arr.length;i++){
        result.push(callback(arr[i]))
    }
    return result;
}
console.log(map([1,3,2], x => x*3))

//func to curry any multi argument function

function curry(hi){
    return function curried(...args){
        if(args.length >= hi.length){
            return hi(...args);
        }
        return (...more) => curried(...args, ...more)

    }
}

function add(a,b,c){
    return a+b+c;
}

console.log(curry(add)(1)(2)(3));


//func composition utility
var compose=(...hello) => x =>
    hello.reduceRight((v,hi)=>hi(v),x)

var add = x => x + 1
var sq=x => x*x;
console.log(compose(sq,add)(3));


var compo=(...hi) => x=>
    hi.reduceRight((u,m)=>m(u),x)
var add1=x => x+1
var hey=x=> x*x
console.log(compo(hey,add1)(4))


//implement a memoization function

function memoize(f){
    var cache={};
    return function(x){
        if(cache[x]) return cache[x];
        cache[x]=f(x)
        return cache[x];
    }
}
var slow=memoize(x=> x*x);
console.log(slow(20))


function throttle(hi, delay){
    var last =0
    return function (...args){
        let now =Date.now();
        if(now - last >= delay){
            last=now
            hi(...args);
        }
    }
}

var t= throttle(()=> console.log("throttle"),1000);
t()
t()
t()
setTimeout(t,1200);

// total of sum all values
function sumarr(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("Total sum:", sum)
}
sumarr([10,20,30,40,50])

// vowels and consonants
function vowelsconsonants(str){
    var vowels="aeiouAEIOU"
    var vowelcount=0
    var consonantscount=0
     for(let char of str){
        if(/[a-zA-Z]/.test(char)){
            if(vowels.includes(char)){
                vowelcount++;
            }else{
                consonantscount++;
            }
        }
     }
    return{
        vowels:vowelcount,
        consonants:consonantscount
    }
}
let result=vowelsconsonants("java Script, Hello, Int")
console.log(result);

function fib(n){
    var a=0, b=1;
    console.log(a);
    if(n>1)
        console.log(b)
    for(let i=3;i<=n;i++){
        let c= a+b
        console.log(c);
        a=b
        b=c
    }
}
fib(20)
//Write a program to check whether a given string is a palindrome.

function palindrome(str){
    var revered="";
    for(let i=str.length-1;i>=0;i--){
        revered +=str[i];
    }
    return str === revered;
}

console.log(palindrome("madam"))
console.log(palindrome("name"))
console.log(palindrome("khan"))

function sec(arr){
   var sorted = arr.slice().sort((a,b)=> b-a);
   return sorted[1];  
}
console.log(sec([10,20,2,80,50]));


function countwords(str){
    var words=str.trim().split(" ").filter(word => word !== "");
    return words.length;
}

console.log(countwords("JavaScript"))
console.log(countwords("Hello Js"))

function discount(rate) {
  return function(price) {
    return price - (price * rate);
  }
}


const tenPercent = discount(0.10);
console.log(tenPercent(200)); 

const twentyPercent = discount(0.20);
console.log(twentyPercent(500)); 

function logger(type) {
  return function(message) {
    console.log(`[${type.toUpperCase()}] : ${message}`);
  }
}


const errorLog = logger("error");
const infoLog = logger("info");

errorLog("Page not found");
infoLog("User logged in");

function api(baseURL) {
  return function(endpoint) {
    return function(id) {
      return `${baseURL}/${endpoint}/${id}`;
    }
  }
}


const userModule = (function(){
  let name = "John"; // private variable

  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    }
  }
})();

console.log(userModule.getName()); // John
userModule.setName("David");
console.log(userModule.getName()); // David




