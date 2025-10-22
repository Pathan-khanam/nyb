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


//error handling: try...catch
let person =new Error("Something went wrong");
console.log(person.name);
console.log(person.message);
console.log(person.stack);

try{
    let x=y+10;
}catch(error){
    console.log("an error occurred:",error.message);
}


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


//option chaining
//without option chaining
// var user = {}
// console.log(user.profile.name);//type error

//with option chaining
var emp ={}
console.log(emp?.profile?.name);//undefined no error
const user = {
  name: "khan",
  profile: {
    email: "khanx@example.com"
  }
};

// Without optional chaining (would throw an error if profile doesn't exist)
console.log(emp.profile?.email); 
console.log(emp.address?.city);