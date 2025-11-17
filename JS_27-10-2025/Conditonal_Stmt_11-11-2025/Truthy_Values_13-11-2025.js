//falsy values
if(0){
    console.log("This will Not run");
}
if(""){
    console.log("This will Not run");
}
if(null){
    console.log("This will Not run");
}

//0,"" and null are falsy values. if condition is evaluated: js converts the value to a boolean.
// it becomes false, the code block doesn't execute.thats y u see no output.

console.log(0)
console.log("")
console.log(null)

console.log(Boolean(0));
console.log(Boolean(""));//why "" is not showing the reason is because console.log() prints the actual value not the literal syntax representation 
//no characters inside console displays nothing.

//using json stringify() it shows ""
console.log(JSON.stringify(""));

console.log(Boolean(null));

console.log(!!0)
console.log(!!"")
console.log(!!null)

//combine both(value + truthiness)
let values=[0, "", null, "hello", 123,[],{}];
values.forEach(val => {
    console.log(val, '=>',Boolean(val));
});

//truthy values
if("JS")
    console.log("Truthy!");
if([])
    console.log("Even empty array is truthy!")
if({})
    console.log("Even empty object is truthy!")

console.log(Boolean("Hello"))
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(123))
console.log(!!"JS")
console.log(!!0)


//truthy values using strings any non empty string is truthy value
console.log(Boolean(" "))//even jst a space also truthy value
console.log(Boolean("false"));//"false" is a string text ,not boolean.
console.log(Boolean("0"))
console.log(Boolean("JS"))


//all numbers are truthy except 0 and NaN
console.log(Boolean(1));
console.log(Boolean(-10));
console.log(Boolean(3.14));
console.log(Boolean(Infinity));
//to check if a value is truthy 
//using Boolean()
//shortcut double NOT !! operator
console.log(!!0)
console.log(!!"hi")


//objects and arrays
//all objects and arrays are truthy even empty ones 

console.log(!![])//because they are reference types(objects)and all objects are truthy by js design.
console.log(!!{})
console.log(!![0])
console.log(!!{a:0})

//functions & dates
//all function and instances are truthy
console.log(!!function(){})
console.log(!!new Date());

//special types
console.log(!!Symbol())
console.log(!!BigInt(10));
console.log(!!['*',"@"])
let hi="$"
console.log(!!hi)


//using truthy values in conditions
let name="khan"
if(name){
    console.log("Truthy! Name exists");
}
else{
    console.log("Falsy! Name missing");
}


let isloggedin=true

function showDashboard(){
    console.log("dashboard is visible")

}

isloggedin && showDashboard();

if(isloggedin){
    showDashboard()
}