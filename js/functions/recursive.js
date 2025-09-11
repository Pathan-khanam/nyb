// function prod(a){
//     if(a === 0){
//     return 1


//     }
// return a*prod(a-1)
// }

// console.log(prod(4))





//countdown

function countdown(num){
    if (num <=0) return
    console.log(num)
    countdown(num - 1)

}
countdown(7)


//countup
function countup(num,limit){
    if(num > limit) return
    countup(num +1, limit)
    console.log(num)
}

countup(0,10)


