// for(var count=1; count <=5; count++){
//     console.log("pathan");

// }


// let sum =0;
// let n=100;
// for(let i=1; i<=n; i++){
//     sum = sum+i;
// }
// console.log("sum =", sum);
// console.log("loop has ended");

// for(let i=0; i<=5; i++){
//     console.log("i=",i)
// }

// let i=1;
// while(i<=10) {
//     console.log("i=",i);
//     i++;
// }

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i <=5);


//for-of loop
// let str ="khan"
// let size=0;
// for(let i of str){ //iterator ->characters

//     console.log("i=",i);
//     size++;
// }console.log("string size =",size);


//for-in loop
let student ={
    name:"pathan khan",
    age:20,
    cgpa:8.3,
    isPass:true,
};
for(let key in student){
    console.log("key=",key,"value=", student[key]);
}