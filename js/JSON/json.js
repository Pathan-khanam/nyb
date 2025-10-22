//JSON Object
let hi={
    //this is a name
    "name":"khan",
    "age":20,
    "city":"bnglr",
    "skills":["Tosca","JS","HTML"]
    // "role":false
    
}
console.log(hi.city)

//convert js object into json string
let jsonobj=JSON.stringify(hi);
console.log(jsonobj)

//convert json string into js object

let obj=JSON.parse(jsonobj);
console.log(obj)

//to call particular name
console.log("object:",obj.name)

//--------------------------------

//without json 
//object
let details={
    name:"ali",
    age:20,
    city:"hyd"
}
console.log(details.name)
console.log(details)

//convert object into json string
let jsondetail=JSON.stringify(details)
console.log(jsondetail)
//convert json string into object
let objstr=JSON.parse(jsondetail)
console.log(objstr);

//to call particular name
console.log("object:",objstr.name)

//----------------------------------------------

//json array

let emp={
   
    "employee":[
        {"name":"ali","age":23},
       {"name":"sara",age:21},
        {"name":"khan",age:20}
    ]
}

console.log(emp)


let user={
    name:"pk",
    skills:["tosca","js"]
}
//convert object into json string
let jsondata=JSON.stringify(user)
console.log("JSON string:",jsondata)

//convert json string into object
let objdata=JSON.parse(jsondata)
console.log("object:",objdata.name)