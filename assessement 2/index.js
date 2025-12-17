//1
function ispalindrome(str){
    var cleaned="";
    for(var i=0; i<str.length;i++){
        var ch =str[i].toLowerCase()
        if(ch>= 'a '&& ch<="z"){
            cleaned = cleaned +ch;
        }
    }
     var reserved ="";
     for (var j=cleaned.length-1;j>=0;j--){
        reserved=reserved+cleaned[j];
     }
     return cleaned === reserved;

}console.log(ispalindrome("racecar"));
console.log(ispalindrome("hello"))

//2
function countVowel(str){
    var count=0;
    for(var i=0; i<str.length;i++){
var hi= str[i].toLowerCase();
if(hi >='a' && hi <="z"){
if(hi ==='a' ||
    hi==='e' ||
    hi==='i' ||
    hi ==="o" ||
    hi ==="u" )
    {
    count=count+1;

}
}
    }
    return count;
}
console.log(countVowel("javascript"))
console.log(countVowel("HELLO"))

//3
var a=false
console.log(a)
console.log(typeof a)
var b=String(a)
console.log(b)
console.log(typeof b)

var b="123"
console.log(b)
console.log(typeof b)
var c=parseInt(b)
console.log(c)
console.log(typeof c)

function smartconvert(value){
    var originalType=typeof value;
    var convertedValue;
    var convertedType
    
    if (originalType ==="String" && value !=" " && ! isNaN (value)){
         convertedType= Number(value);
         convertedValue= typeof convertedValue;
    }
    else if(originalType === 'number'){ 
        convertedValue=String(value);
        convertedType=typeof convertedValue;

    }
    else{
        convertedValue=value;
        convertedType=originalType
    }
    
    console.log("original value:", value);
    console.log("original type:",originalType)
    console.log("converted value:", convertedValue)
    console.log("converted type", convertedType)
}

smartconvert("123");
smartconvert(true);

//4
function evaluateExpression(a, b, c) {
  return (a + b) > c && (b - c) < a;
}

console.log(evaluateExpression(3, 5, 7))
console.log(evaluateExpression(2, 5, 3))

//5
function maxOfThree(a,b,c){
    return (a>b) ? (a>c?a:c) :(b>c?b:c)
}
console.log(maxOfThree(5,10,8))

//6
function finalGrade(score, attendance){
    if(score > 90 && attendance >75){
        return "A+"
    }
    else if (score >75 && attendance >60){
        return "B"
    } 
    else{
        return "C"
    }
}

console.log(finalGrade(91,78))
console.log(finalGrade(79,62))
console.log(finalGrade(50,40))


//7
function season(month){
    switch(month){
        case 12:
            case "january":
            case 2:
                return "Winter"
                case 3:
                    case 4:
                        case 5:
                            return "Spring"
                            case 6:
                                case 7:
                                    case 8:
                                        return "Summer"
                                        case 9:
                                            case 10:
                                                case 11:
                                                    return "Autumn"
    }
}
console.log(season("january"));
console.log(season(4))
console.log(season(6))
console.log(season(10))
//8
function findPrimes(n){
    var primes =[];
    for(var num=2; num<n; num++){
        var prime=true;
        for(var i=2;i<num; i++){
            if(num % i ===0){
                prime=false
                break
            }
        }
        if(prime){
            primes.push(num)
        }
    }
return primes
}
console.log(findPrimes(10))
//9
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += (i * j) + ' ';
        }
        console.log(row.trim());
    }
}

multiplicationTable(3);

//10
var number;

do {
    number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
} while (number !== 7);


//11
var students = { Alice: 85, Bob: 92, Carol: 78 };

for (let student in students) {
  console.log(`${student}: ${students[student]}`);
}

for (let score of Object.values(students)) {
  console.log(score);
}


//12
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); 

//13
function sum(a) {
    return function(b) {
        return a + b;
    };
}

console.log(sum(5)(10));

//14
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
//19
function capitalize(str) {
    return str
        .split(' ')
        .map(word => word.toUpperCase())
        .join('-');
}

console.log(capitalize("Hello World"));
//16
function manipulate(arr) {
  var uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => b - a);
  var result = uniqueArray.filter(num => num > 10);
  return result;
}

var array = [1,10,2,20,3,30,40,50,60,9,6,7,8,9,11,2,3,6];
var hi = manipulate(array);
console.log(hi);






//17
var people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 }
];

var totalAge = people.map(person => person.age).reduce((acc, age) => acc + age, 0);

var averageAge = totalAge / people.length;

console.log(averageAge);
//18
function flattenArray(arr) {
  var result = [];
  
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));

//15
var person = {
  name: 'zain',
  sayNameArrow: () => {
    console.log(this.name);
  },
  sayNameFunction: function() {
    console.log(this.name);
  }
};

person.sayNameArrow();
person.sayNameFunction();

//20
function deepClone(obj) {
  var clone = JSON.parse(JSON.stringify(obj));

  for (let key in clone) {
    console.log(`${key}: ${clone[key]}`);
  }

  clone.copied = true;
  return clone;
}

var original = { name: 'John', details: { age: 30, city: 'New York' } };
var cloned = deepClone(original);

console.log(cloned);
