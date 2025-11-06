//reference datatypes are
//object
//arrays
//function
//Es-6 features
//map,weakmap,set,weakset,date,regular expression
//objects
let obj={
    name:"khan",
    role:"developer",
    city:" hyd",
    numbr:9999999999,
    male:true,
    salary:800000,
    attendence:{
        jan:10,
        feb:20,
       a:[56,10,20,30,40]
    }
}
console.log(obj,typeof obj)
var a={}

//arrays
var arr=[1,2,3,3,4,5,"hi","hello",true,false,null,[12,34,17,[20]],80]
var hi=[1627,67,9,0,36]
console.log(hi,typeof hi)
console.log(arr,typeof arr)

//functions
function greet(){
    console.log("hello")

}
greet()
console.log(greet())
console.log(typeof greet)
//calculate of salary based on number of working days
console.log(4000*20)
console.log(4000*19)
console.log(4000*21)

function salary(name,days){//parameters
    var perday=4000
    console.log("Monthly salary of ",name,"is",perday*days)
    return perday*days
}
salary("khan",20)//arguments
console.log(salary("pathan",21))

console.log("All the salaries are calculated")

