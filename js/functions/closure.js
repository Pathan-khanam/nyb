//closure

// function greet(a, b) {
        ///console.log(a,b)
    // return function bye(){
        // return a+b
    //} 
 
// }
// var m = greet()
// console.log(m)
// console.log(greet())



function D(a,b){
    return function K(){
        return a + b
    }
   
}
let M = D(10,5)

console.log(M())
console.log(D())



function bankAccount() {
    let balance =1000 //private or hidden variable 
    return {
        deposit(amount){
            balance += amount
            return balance
        },
        withdraw(amount) {
            balance -= amount
            return balance
        },
        checkBalance() {
            return balance
        }
    }
}
const account =bankAccount()
//console.log(account.deposit(500))
//console.log(account.withdraw(200))
console.log(account.checkBalance())

//closure

function A(a,b,c,d,e,g,f,k){
    return function D(){

    return a+b+c+d+e+g+f+k
}
}
console.log(A(10,3,30,4,2,3,10,29)())
