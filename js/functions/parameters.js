

//default parameters es6
// function greet(name = "guest"){
//     console.log("hello"  +  name)
 
// }

// greet()
// greet("sara")


//multiple parameters
// function add(a , c ){
//     console.log(a+c)
// }
// add(3,8)

//parameters
// function greet(name){
//     console.log('pathan')
// }
// greet()


//practice 
//default

// function add(a=5 , b=10) {
//     return a+b
// }

// console.log(add())
// console.log(add(60))
// console.log(add(7,3))

//multiple default

function add(a=7,b=null) {
    console.log(a,b)
    return a-b
}
add(5,9,10,40)


//argument object es-5 

// function showArgs(a,b){
//     console.log(arguments)
// }
// showArgs("1,50,80,340,56")


//rest parameters es-6

var details=(empname, empid,...rest) => {
    console.log(empname)
    console.log(empid)
    console.log(rest)
    console.log(arguments)

}


details('khan',1425,'bnglr','phno','Text',5678)


