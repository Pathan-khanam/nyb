
// //synchronous(blocking)

// console.log("start");

// for(let i=0;i<3;i++){
//     console.log("Processing...");
// }
// console.log("End");

// //asynchronous(non-blocking)

// console.log("start");
// setTimeout(()=> {
//     console.log("Inside setTimeout");

// },2000);
// console.log("End");

// //async await

// async function fetchData(){
//     console.log("Fetching...");
//     let response= await new Promise(resolve => setTimeout(() => 
//         resolve("Done!")
//     , 2000));
//     console.log(response);
// }
// fetchData();

// //callback

// function userData(hello){
//     var data="pathan khan"
//     window.setTimeout(()=>{
//         hello(data);

//     },2000)
// }

// function displayData(name){
//     console.log("data from the api call",name)

// }
// userData(displayData);

// //callback hell 

// setTimeout(() => {
//     console.log("step 1:Hello")
//     setTimeout(() => {
//         console.log("step 2:pathan")
//     setTimeout(() => {
//         console.log("step 3:hi")
//         setTimeout(() => {
//             console.log("step 4:khan")
//         }, 1000);
//     }, 1000);
//     },1000);
// }, 1000);

//call back hell
function one(nextFunction){
    var m=18
    console.log("one function")
    //console.log(nextFunction)
    setTimeout(() => {
        nextFunction()
    },1000);
    
}
function two(nextFunction){
    console.log("second function");
    window.setTimeout(() => {
      nextFunction() 
    },2000);

}
function three(hi){
console.log("third function")
window.setTimeout(()=>{
    hi()
},2000)
}

function four(){
    console.log("four function")
}

one(()=>{
    two(()=>{
        three(()=>{
            four()
        })
    })
})


window.setTimeout(()=>{
    console.log("one")
},2000)


window.setTimeout(()=>{
    console.log("two")
},2000)

window.setTimeout(()=>{
    console.log("three")
},2000)

window.setTimeout(()=>{
    console.log("four")
},2000)


//promises
let mypromise= new Promise((resolve,reject)=> {
    let success=true;
    if(success){
        resolve("Operation succeeded!")
    }else{
        reject("Operation failed.")
    }
});


// //using .then(),catch() and finally()

// // Promise
// // .then((message) => {
// //     console.log("Success:",message);
// // })
// // .catch((error)=> {
// //     console.log("Error:",error);
// // })
// // .finally(()=>{
// //     console.log("This runs no matter what.");
// // });

// // console.log("Value of something:", something);

// // Promise.all([
// //   wait(1000),
// //   wait(2000),
// //   wait(3000)
// // ]).then(values => {
// //   console.log("All done:", values);
// // });

// function doAsyncTask() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5; // Randomly succeed or fail

//     console.log("Starting async task...");

//     setTimeout(() => {
//       if (success) {
//         resolve("✅ Task completed successfully!");
//       } else {
//         reject("❌ Task failed.");
//       }
//     }, 2000); // Simulate a 2-second delay
//   });
// }

// doAsyncTask()
//   .then(result => {
//     // Runs if the promise was resolved
//     console.log("THEN:", result);
//   })
//   .catch(error => {
//     // Runs if the promise was rejected
//     console.error("CATCH:", error);
//   })
//   .finally(() => {
//     // Runs no matter what (success or error)
//     console.log("FINALLY: Cleaning up...");
//   });


//   function asyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Task completed!");
//       } else {
//         reject("Task failed.");
//       }
//     }, 1000);
//   });
// }

// asyncTask()
//   .then(msg => console.log(msg))
//   .catch(err => console.error(err));


//   async function runTask() {
//   try {
//     const result = await asyncTask();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// runTask();








