// deep copy
var x=40
var y=x


console.log(x , y)

x=50

console.log(x,y)
x=50
y=50
console.log(x,y)


//reference dt
//normal copy


var details ={
    name:'khan',
    age: 20,
    city:'bnglr',

    job:{
        role :'developer',
        dept:'IT',
        salary:35000
    },
    arr:[1,2,3],
    emp:[1,2,3,6,8]
}
var copy = details
console.log(details)
details.city='hyd'
copy.name='pathan'
console.log(copy)
console.log(details)

//reference dt
//deep copy(json method)



var a = JSON.parse(JSON.stringify(details))
a.address='hcross'
copy.arr[0]=10
copy.arr[1]=20
console.log(copy)
console.log(a,details)



//lodash








//shallow copy
//var copy = Object.assign({},details)

var copy={...details}

details.age =25
details.arr[2]=29
console.log(details)
console.log(copy)





