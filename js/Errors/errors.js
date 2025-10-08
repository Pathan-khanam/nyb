//syntax error
// let name = "pathan"
// console.log(name;
let name="pathan";
console.log(name);

// //reference error
// console.log(total)//not defined

let total = 100;
console.log(total)

//type error
// let num=5;
//num()// trying to call a number like a function

// let obj=null;
// console.log(obj.name);//accessing property of null

if(typeof num === "function") num();

//Range error
// let arr= new Array(-3);//-ive length

let Arr = new Array(3);

//Uri error
//decodeURI("%")//invalid escape

decodeURI("%20")//valid percent encoding


//error handling : try...catch...finally
try{
    let a= b+1;

} catch (error) {
    console.log("Caught:",error.name);
    console.log("Message:",error.message);

} finally {
    console.log("Always runs");
}

//throwing specific errors types

try{
    throw new TypeError("This is a Type Error");

} catch (e) {
    console.log(e.name);
    console.log(e.message);

}
//custom (user-defined)errors
let age = -10;
try{
    if(age<0){
        throw new Error("Age cannot be negative!");

    }
}catch(err){
    console.log(err.name);
    console.log(err.message);
}


//check error details
try{
    undefinedFunction();

}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

