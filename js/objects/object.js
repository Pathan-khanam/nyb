// let person={
//     name:'pathan',
//     age:22,
//     email:"pathan@gmail.com"
// }
// console.log(person)
// console.log(person.name)
// console.log(person['age'])




// //object literals

// let car ={
//     company:'xyz',
//     model:'abx',
//     manyear:2024,
//     color:'pink',
// price :356256,
//     cars: {


//     },
//     model1: [],
//     stock:true,
//     buy: function() {
// console.log("you can buy the car")
//     }


// };
// console.log(car.stock)


//factory function way

//a function that returns an object


function createpizza(type, size){
    return{
        type,
        size,
        bake() {
            console.log('baking a ${this.size} ${this.type} pizza 🍕')
            console.log('baking a ${this.medium} ${this.chicken} pizza 🍕')
        }
    }
}
let p1= createpizza('cheese', "large");
let p2= createpizza('chicken pieces', 'medium')

p1.bake()
   // p2.bake()




//constructor object
// function prsn(name,age){

//     console.log(this)
    
//     this.name= name
//     this.age= age
//     console.log(name,age)

// }

// var ravi =new prsn('ravi',20)

// var khan = new prsn("khan",20)
// var khan ={
//     name: 'khan',
//     age:20
// }
// console.log('ravi')





// function test(){
//     console.log(this)
// }
// test()
//strict mode ->undefined
//browser -> window object






