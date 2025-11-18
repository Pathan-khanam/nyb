//function expression
//named function
//anonymous function
//arrow function(es-6)
// function expression
var  hi=function(name){
    console.log("welcome"+ name)

}
hi("khan")

var add = function(a,b){
    return a+b;
}
console.log(add(5,3))

//check odd and even
var even=function(num){
    return num% 2 ===0;
}
console.log(even(4))
console.log(even(7))


//factorial 
var fact=function(n){
    var result=1
    for(var i=1;i<=n;i++){
        result *=i;
    }
    return result;
}
console.log(fact(5))


//prime numbers in an array

var findprimes= function(arr){
    return arr.filter(num => {
        if(num<2) return false;
        for(var i=2;i<=Math.sqrt(num);i++){
            if(num %i===0)
                return false;
        }
        return true
    })
}

console.log(findprimes([1,2,3,4,,5,6,7,8,9,10]))

function makeJuice(fruit){
    return fruit +" juice";
}
console.log(makeJuice("Apple"))


function bakeCake(flavor,layers){
    return `Cake with ${layers} layers of ${flavor}`;
}
console.log(bakeCake("chocolate",3))


function addTwo(num){
    return 2+num;
}
console.log(addTwo(3))
console.log(addTwo(4))
console.log(addTwo(5))
console.log(addTwo(7))

//functions can talk to each other like a team in a restaurant
//chef1 prepares ingredients
//chef2 cooks
//chef3 plates

function prepareIngredients(){
    return "Chopped Vegetables";
}
function cook(ingredients){
    return "Cooked " + ingredients
}
function serve(dish){
    return "Serving " + dish
}

var ingredients=prepareIngredients()
var dish=cook(ingredients)
console.log(serve(dish));