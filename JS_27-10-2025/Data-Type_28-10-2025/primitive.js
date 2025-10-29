
// data types decided at runtime
//primitive data-type
let x="text"//string

let y=1 //num

let z=true //boolean

let m; //undefined
  
let n=null //null-object

console.log(y)
console.log(typeof n)
console.log(x)
console.log(typeof m)

//null was stored like an object reference(00000000)

//code proof of null 
console.log(typeof null)
console.log(typeof {})
//console.log(null === {});

let txt=Symbol("user")

console.log(txt)
console.log(typeof txt)

let bignum=34565876897798789678587478587687n; //bigint

console.log(typeof bignum)

console.log(bignum)
