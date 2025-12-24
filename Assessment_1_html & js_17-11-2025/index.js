function findGreater(a,b){
    if(a >b){
        return a;

    }else{
        return b;
    }
}
let num=10;
let num2=25;
let larger= findGreater(num,num2);
console.log(`The larger number:${larger}`)


function check(num){
    if(num% 3=== 0 && num%5 === 0){
        return `${num} is diviible by both 3 and 5`;
    }else{
        return `${num} id not divisible by both 3 and 5`;
    }
}
console.log(check(10))
console.log(check(15))
console.log(check(9))


function multi(num){
    console.log(`multipies of ${num}`)
    for(let i=1;i<=10;i++)
        console.log(`${num }x ${i} =${num*i}`)
}
 var number=7
 multi(number)


 function factroial(n){
    if(n === 0)
        return 1;
    return n*factroial(n-1);
    
}
console.log(factroial(5));
console.log(factroial(0));
console.log(factroial(7));


var numbers=[12,23,45,7,89,5]
let max=Math.max(...numbers)
let min=Math.min(...numbers)

console.log(`maxi number:${max}`)
console.log(`min number:${min}`)

function reverse(str){
    let reveresed ="";
    for(let i=str.length-1;i>=0;i--){
        reveresed+=str[i]

    }
    return reveresed
}
 let original="hello world"
 let reversed =reverse (original)
 console.log(reversed)
 

 function oddnum(arr){
    return arr.filter(hi=> hi%2 !==0)

 }
 var hi=[1,2,3,4,5,6,7,8]
 let odd=oddnum(hi)
 console.log(odd)


 var s="javascript"
var count=0
var vowels="aeiou";
for(var i=0; i<s.length;i++){
    if(vowels.includes(s[i]))
        count++
}
console.log(s)
console.log(count)

let n=5

for(var i=1;i<=n;i++){
    var row=""
    for(var j=1; j<=i;j++){
   row+=j+"";
} console.log(row)
}



