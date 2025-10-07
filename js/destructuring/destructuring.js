let [a,b,c]= [1,2,3]
console.log(a,b,c)

//slipping elements
let numbers=[1,2,3,4,5]
let [first,,third,,fifth] = numbers;
console.log(first,third,fifth);


//default values
let colors = ['red'];
let [primary,secondary='blue']= colors;

console.log(primary);
console.log(secondary);


//swapping variables
let x=10, y=20;
[x,y]=[y,x];
console.log(x,y);


//rest operator
let numbrs =[1,2,3,4,5];
let [frst,second,...rest]= numbers;

console.log(first);
console.log(second);
console.log(rest);

//nested array destructure
let nested=[1,[2,3]];
var [k,[l,m]]=nested;
console.log(k,l,m)
console.log(k)
console.log(l)
console.log(m)

// function return values
function getCoordinates(){
    return[12.5,25.7];
}

var [z,s]= getCoordinates()
    console.log(`X: ${z}, Y:${s}`);

