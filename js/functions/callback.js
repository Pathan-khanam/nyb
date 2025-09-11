function one(a){
    console.log("this is a 1st function")
    console.log("this is sum of",a)
}

function two(d,c,b){
    console.log("this is a 2nd function")
b(d+c)
}

two(5,2,one)