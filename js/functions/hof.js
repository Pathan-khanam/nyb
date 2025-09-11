//function argument
function greet(name){
    return 'hello '+ name

}
function hi(callback){
    console.log(callback('pathan'))

}
hi(greet)

//function returning another function
function multi(x){
    return function(y){
        return x *y
    }
}
const double =multi(2)
console.log(double(5))