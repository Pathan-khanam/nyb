let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let vehicles = [
    document.getElementById("car"),
    document.getElementById("bike"),
    document.getElementById("auto")
];

let signalState = 0; // 0=red, 1=yellow, 2=green

let positions = { car:-120, bike:-120, auto:-120 };
let speeds = { car:2, bike:3, auto:2.5 };

function updateSignal(){
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");

    if(signalState===0) red.classList.add("active");
    else if(signalState===1) yellow.classList.add("active");
    else if(signalState===2) green.classList.add("active");

    signalState = (signalState+1)%3;
}

function animateVehicles(){
    vehicles.forEach(v=>{
        let id = v.id;
        if(signalState===2){ // green
            positions[id]+=speeds[id];
        }
        if(positions[id] > window.innerWidth) positions[id]=-120;
        v.style.left = positions[id]+"px";
    });
}

updateSignal();
setInterval(updateSignal,4000);
setInterval(animateVehicles,20);
