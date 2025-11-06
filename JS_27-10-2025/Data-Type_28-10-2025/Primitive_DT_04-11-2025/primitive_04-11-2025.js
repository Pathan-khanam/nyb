//data type
//primitive datatype
//1.number
let age=20;
let price=99.21;
let temp=-10;
let result=20/"hello";
let big=1/0;

console.log(result)
console.log(big)
console.log(price)
console.log(age)
console.log(temp)

//string
let name="pathan"
let hi=`hello, ${name}`
 console.log(hi)

 let a="10"
console.log(a)

//boolean
let b=true
let c=false
let d=""
let e=0
let txt=true
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(txt)


//undefined

let x;
console.log(a)

//null
let car=null;
console.log(car)

//symbol(es6)
let id1=Symbol("id")
let id2=Symbol("id")
console.log(id1)
console.log(id2)
console.log(id1 === id2)
//bigint(es11)

let bignum=8386836983686386398598473098339073093846498595n;
console.log(bignum)

//null typeof
let value = null;

if (value === null) {
  console.log("The value is null");
}

function typeOf(value) {
  if (value === null) return "null";
  return typeof value;
}


console.log(typeOf(null));       
console.log(typeOf(123));        
console.log(typeOf("hello"));     
console.log(typeOf(undefined));  
console.log(typeOf({}));          
