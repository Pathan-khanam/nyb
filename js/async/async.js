//synchronous(blocking)


console.log("start");

for(let i=0;i<3;i++){
    console.log("Processing...");
}
console.log("End");

//asynchronous(non-blocking)

console.log("start");
setTimeout(()=> {
    console.log("Inside setTimeout");

},2000);
console.log("End");


//async await

async function fetchData(){
    console.log("Fetching...");
    let response= await new Promise(resolve => setTimeout(() => 
        resolve("Done!")
    , 2000));
    console.log(response);
}
fetchData();