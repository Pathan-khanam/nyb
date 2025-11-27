//output will be guessed
//same input ->always same output
//doesnot modify anything outside the function

function firstLetter(str){
    console.log(`First letter from ${str}:${str[0]}`)
    return str[0] 
}
console.log(firstLetter("Hello"))
 
 function name(num){
    var names=["sara","sehar","kinza","ali","khan","pathan"]

    return names[num] || "Invalid number";

 }

 console.log(name(3));


 //same logic as impure in pure
 function hello(index){
    var names=["zyan","khan","sara","meera","liya"]
    return names[index]
 }
 let hi=Math.floor(Math.random()*5)

console.log(hello(0))
console.log(hello(hi))


