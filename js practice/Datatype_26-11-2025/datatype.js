console.log([] + [])
console.log([] + {})
console.log({}+[])

//Both "false" and "true" are non-empty strings, so they become true.
console.log(!!"false"==!!"true")


console.log([1,2] + [3,4])


//hoisting
function test(){
    console.log(a)
    //console.log(b)
    var a= 10;//var is hoisted → initialized as undefined.
//let is hoisted but in TDZ → ReferenceError.
   // let b= 20;

}
test()



// loops
for (var i=0; i <5;i++)
   setTimeout(() => 
    
  console.log(i) ,0); 
  for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

foo();
var foo = function() {
  console.log("A");
};
function foo() {
  console.log("B");
}
foo();

console.log([] == ![]);
console.log({} == !{});


let arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function() {
    return i;
  };
}
console.log(arr[0](), arr[1](), arr[2]());


switch(2 + "2") {
  case 4:
    console.log("A");
    break;
  case "22":
    console.log("B");
    break;
  default:
    console.log("C");
}


if ([] && {} && "" && " " && NaN && null) {
    console.log("A");
} else {
    console.log("B");
}


let x = 0;

if (x = 5 == 5) {
    console.log("YES");
} else {
    console.log("NO");
}


if ("" == 0 && 0 == false && false == "") {
    console.log("ONE");
} else if ("" === 0 || false === 0) {
    console.log("TWO");
} else {
    console.log("THREE");
}


if ("0" && 0 && [] == true) {
    console.log("A");
} else {
    console.log("B");
}


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("level")); // true
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // ?


function greet(name){
    console.log("Hello " + name);
}
console.log(greet("Alice")); // ?


//merging two arrays 
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray.concat(arr1.slice(i), arr2.slice(j));
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


function myarr(arr){
    if(arr.length === 0){
        return 0;
    }else{
        return arr[0] + myarr(arr.slice(1))
        }
}
 var newarr = [20,30,40,50]
  console.log(myarr(newarr))


  var coding=["javascript", "html", "css"]

  for(var i=0; i<coding.length;i++){
    console.log(coding[i])
  }


   function reveresed(str){

   }
   let num;
   num=50
   console.log(num)