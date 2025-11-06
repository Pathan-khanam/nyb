//objects
//syntax
// let obj={
//     key1:value1,
//     key2:value2
// }
// console.log(obj)

var prsn={
    name:"khan",
    age:20,
    city:"hyd"
}
console.log(prsn)

//purpose of objects
//group related datatogether
//instead of separate variable like 
var hi="hey"
var age="10"
var city ="hyd"
//objects for group related properties
var person={
    name:"ali",
    age:10,
    city:"hyd"
}
console.log(person.name)
console.log(person)
//store dymnamic and complex data
var emp={
    user:{name:"khan",age:"10"},
    posts:[
        {title:"hello world",likes:10},
        {title:"learning js",likes:20}
    ]
}
console.log(emp)
console.log(emp.user)
console.log(emp.posts)
console.log(emp.posts[0])
console.log(emp.posts[0].title)

emp.posts.forEach(post=>{
    console.log(post.title,"-",post.likes)
})

