//parameters
function hello(name="Guest"){
    console.log("Hello " + name)
}
hello();
hello("Sara");


//multiple parameters
function sum(a=5,b=10){
    return a+b;
}

console.log(sum())
console.log(sum(20))
console.log(sum(3,7))


function hi(name="Hey"){
    console.log("hello " + name)
}

hi(undefined);
hi(null)


function sum(...numbers){
    var total=0;
    for(var num of numbers){
        total +=num;
    }
    return total;

}
console.log(sum(1,2))
console.log(sum(1,2,3,4,5));


function hey(greet="Hello", ...names){
for(var name of names){
console.log(greet + ", " + name)
}
}
hey("Hi","khan","sara")
hey(undefined,"pathan");


