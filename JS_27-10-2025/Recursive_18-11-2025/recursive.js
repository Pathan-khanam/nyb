function recursive(hi){
    if(hi === 0){
        return;
    }
    console.log(hi)
    recursive(hi -1)//recursive call
}
recursive(5)
//n to 1
function countDown(n){
    if(n === 0 )return;
    console.log(n)
    countDown(n-1)

}
countDown(10)

//how many times digit 7 appears
function count(n){
    if(n === 0)
        return 0
    var digit=n% 10
    return(digit +++7 ? 1:0)+ count(Math.floor(n/10));

}
console.log("770987765876574737357")
console.log(count(770987765876574737357))

//binary
function toBinary(n){
    if(n===0)
        return "";
    return toBinary(Math.floor(n/2)) +(n %2);

}
console.log(toBinary(10))

