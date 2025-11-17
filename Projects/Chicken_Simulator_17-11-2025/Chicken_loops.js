// let year;
// const reactions=[{
//     min:2000,max:2100, text: "Everything is robots,Robots everywhere. I'm Scared."},
//    {min:1980,max:1999,text:"Why everyone dancing like this? Oh... it's Michael Jackson"},
//    {min:-1000,max:0,text:"Dinosaurs.BIG dinosaurs. I regret coming here."},
//    {min:2101,max:4000,text:"Future so bright... even my feathers need sunglasses."},
//    {min:1,max:1500,text:"Kings,queens...but no chicken food. I'm leaving."}
// ]
// console.log("confused Time-Traveling Chicken Simulator Actived!\n");

// do{
//     //generates a random year between -1000(dinosaurs) and 4000(future)
//     year=Math.floor(Math.random()*5000)-1000;
//     console.log("chicken teleporting")
//     console.log("Year:",year)
//     //find the reaction for generated year
//     let reaction="I have no idea where I am.";

//          for(let i=0; i<reactions.length;i++){
//              if(year >=reactions[i].min && year <=reactions[i].max){
//                  reaction=reactions[i].text;
//                 break;
//              }
//             }
//             console.log("Reaction:",`"${reaction}"\n`);
//         }while(year !== 2025)
//             console.log("Reaction:\"Finally Home! Time machine... OFF!\"")


// const container=document.getElementById("container")
// const finalDiv =document.getElementById('final')
// const startBtn= document.getElementById('startBtn')
// const startYearInput=document.getElementById("startYear")


// startBtn.addEventListener('click',() =>{
//     container.innerHTML="";
//     finalDiv.innerHTML="";

//     let year= parseInt(startYearInput.value) || 0

//     function simulate(){
//          let reaction ="I have no idea where I am.";
//         for(let i=0; i<reactions.length;i++){
//             if(year >=reactions[i].min && year <=reactions[i].max){
//                 reaction=reactions[i].text;
//                 break;
//             }
//         }
//        //create a div for this loop
//         const div=document.createElement("div");
//         div.className="chicken-box";
//         div.innerHTML=`<div class= "year">⏳ Year: ${year}</div>
//                        <div class="reaction">Reaction:"${reaction}"</div>`

//         container.appendChild(div); 

//         //stop when reaching 2025
//         if(year !== 2025){
// finalDiv.textContent="🐔 Finally Home! Time machine... OFF!";
// return;
//         }
        
//         year=Math.floor(Math.random()*5000)-1000;

//         setTimeout(simulate,700);
//     }
//     simulate();


    
// });

// Funny Mini Project: Lazy Robot Assistant using do...while

let choice;
let messages = [
    "Ugh... do I have to?",
    "Why do humans never let me rest?",
    "This better be quick!",
    "Seriously? Again?",
    "I was just about to take a nap!"
];

function robotComplaint() {
    return messages[Math.floor(Math.random() * messages.length)];
}

do {
    choice = parseInt(prompt(
        "🤖 LAZY ROBOT MENU:\n" +
        "1. Make a sandwich\n" +
        "2. Clean the room\n" +
        "3. Tell a joke\n" +
        "4. Dance for 3 seconds\n" +
        "5. Exit\n" +
        "\nEnter your choice:"
    ));

    let complaint = robotComplaint();

    switch (choice) {
        case 1:
            alert("🤖 " + complaint + " Fine... making a sandwich... 🥪");
            break;

        case 2:
            alert("🤖 " + complaint + " Cleaning the room... 🧹");
            break;

        case 3:
            alert("🤖 " + complaint + " Ok... Here's a joke:\nWhy did the robot cross the road?\nBecause it was programmed to!");
            break;

        case 4:
            alert("🤖 " + complaint + " Dancing for 3 seconds...");
            alert("💃🕺 *Robot dancing noises* 🤖");
            break;

        case 5:
            alert("🤖 FINALLY! You let me rest! 😴 Goodbye...");
            break;

        default:
            alert("🤖 I don't understand that... humans are confusing...");
    }

} while (choice !== 5);
