
// // //synchronous(blocking)



// // console.log("start");

// // for(let i=0;i<3;i++){
// //     console.log("Processing...");
// // }
// // console.log("End");

// // //asynchronous(non-blocking)

// // console.log("start");
// // setTimeout(()=> {
// //     console.log("Inside setTimeout");

// // },2000);
// // console.log("End");

// // //async await

// // async function fetchData(){
// //     console.log("Fetching...");
// //     let response= await new Promise(resolve => setTimeout(() => 
// //         resolve("Done!")
// //     , 2000));
// //     console.log(response);
// // }
// // fetchData();

// // //callback

// // function userData(hello){
// //     var data="pathan khan"
// //     window.setTimeout(()=>{
// //         hello(data);

// //     },2000)
// // }

// // function displayData(name){
// //     console.log("data from the api call",name)

// // }
// // userData(displayData);

// // //callback hell 

// // setTimeout(() => {
// //     console.log("step 1:Hello")
// //     setTimeout(() => {
// //         console.log("step 2:pathan")
// //     setTimeout(() => {
// //         console.log("step 3:hi")
// //         setTimeout(() => {
// //             console.log("step 4:khan")
// //         }, 1000);
// //     }, 1000);
// //     },1000);
// // }, 1000);

// //call back hell
// function one(nextFunction){
//     var m=18
//     console.log("one function")
//     //console.log(nextFunction)
//     setTimeout(() => {
//         nextFunction()
//     },1000);
    
// }
// function two(nextFunction){
//     console.log("second function");
//     window.setTimeout(() => {
//       nextFunction() 
//     },2000);

// }
// function three(hi){
// console.log("third function")
// window.setTimeout(()=>{
//     hi()
// },2000)
// }

// function four(){
//     console.log("four function")
// }

// one(()=>{
//     two(()=>{
//         three(()=>{
//             four()
//         })
//     })
// })


// window.setTimeout(()=>{
//     console.log("one")
// },2000)


// window.setTimeout(()=>{
//     console.log("two")
// },2000)

// window.setTimeout(()=>{
//     console.log("three")
// },2000)

// window.setTimeout(()=>{
//     console.log("four")
// },2000)



//promises
// let mypro= new Promise((resolve,reject)=> {
//     let success=true;
//     if(success){
//         resolve("Operation succeeded!")
//     }else{
//         reject("Operation failed.")
//     }
// });
// // mypro.then(function(){
// //     console.log("promise resolved")
// // })
// // .catch(function(error){
// //     console.log("promise rejected")
// // })
// // console.log(mypro)

// //using .then(),.catch() and .finally()
// mypro
// .then((message) => {
//     console.log("Success:",message);
// })
// .catch((error)=> {
//     console.log("Error:",error);
// })
// .finally(()=>{
//     console.log("This runs no matter what.");
// });
// mypro.then()
// mypro.catch()
// mypro.finally()

// //console.log("Value of something:", something);


// var pro=new promise((resolve,reject)=>{

// })

// pro
// .then(num=>{
//     console.log("First result:",num);
//     return num+2;
// })
// .then(num=>{
//     console.log("second result:",num);
// })
// .then(num=>
//     console.log("final result:",num)
// )
// Promise.all([
//   wait(1000),
//   wait(2000),
//   wait(3000)
// ]).then(values => {
//   console.log("All done:", values);
// });


// // Define the promise
// const mypro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Everything went well!");
//     // Or try: reject("Something went wrong!");
//   }, 1000);
// });

// // Chain .then(), .catch(), .finally
// mypro
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Reject:", reject);
//   })
//   .finally(() => {
//     console.log("This runs no matter what.");
//   });

// // If needed, you can call then/catch separately (rare)
// mypro.then((msg) => console.log("Separate then:", msg));


// const p = new Promise((resolve, reject) => {
//   // Simulate async result
//   setTimeout(() => {
//     resolve(5); // You can change this to reject("error") to test
//   }, 500);
// });


// p
//   .then(num => {
//     console.log("First result:", num); // 5
//     return num + 2; // 7
//   })
//   .then(num => {
//     console.log("Second result:", num); // 7
//     return num * 2; // 14
//   })
//   .then(num => {
//     console.log("Final result:", num); // 14
//   });


//   // Wait function that returns a Promise after `ms` milliseconds
// function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`Waited ${ms}ms`), ms);
//   });
// }

// Promise.all([
//   wait(1000),
//   wait(2000),
//   wait(3000)
// ]).then(values => {
//   console.log("All done:", values);
// });


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


//async await



//put
var data={
    userid:1,
    body:""
}
async function updateUser(userId) {
  const updatedData = {
    name: "New Name",
    email: "new@example.com"
  };

  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

    const data = await response.json();
    console.log("PUT response:", data);
  } catch (error) {
    console.error("Error with PUT:", error);
  }
}

updateUser(2);
async function patchUser(userId) {
  const partialData = {
    email: "new.email@example.com"
  };

  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(partialData)
    });

    const data = await response.json();
    console.log("PATCH response:", data);
  } catch (error) {
    console.error("Error with PATCH:", error);
  }
}

patchUser(2);



// async function deleteUser(userId) {
//   try {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`, {
//       method: "DELETE"
//     });

//     if (response.status === 204) {
//       console.log("User deleted successfully");
//     } else {
//       console.log("Delete response status:", response.status);
//     }
//   } catch (error) {
//     console.error("Error with DELETE:", error);
//   }
// }

// deleteUser(2);

// async function deletePost(postId) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//       method: "DELETE"
//     });

//     if (response.ok) {
//       console.log(`Post ${postId} deleted successfully.`);
//     } else {
//       console.log(`Failed to delete post. Status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error("Error deleting post:", error);
//   }
// }

// deletePost(1);

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));