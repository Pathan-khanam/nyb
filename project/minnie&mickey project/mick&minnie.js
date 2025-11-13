function setupCharacter(id){
    const char= document.getElementById(id);
    const eyes =char.querySelectorAll(".eye");
    const message= char.querySelector(".message");
    const bow = char.querySelector(".bow");
    const dress = char.querySelector(".dress");


    char.addEventListener("mouseover", () =>{
        char.style.filter="drop-shodow(0 0 20px yellow)";
    });
    char.addEventListener("mouseout", () => {
        char.style.filter="none";
    });

    char.addEventListener("click", () => {
        message.textContent="🎂🥳🎁🎈🎉  HAPPY BIRTHDAY! 🎂🥳🎁🎈🎉";
        message.classList.add("show");
        setTimeout(() => message.classList.remove("show"),2000);
    });
    

    char.addEventListener("dblclick", () => {
        char.style.transition="transform 1s";
        char.style.transform +="rotate(360deg)";
        setTimeout(() => char.style.transform =char.style.transform.replace("rotate(360deg)",""),1000);
    });


    document.addEventListener("keydown", (e) => {
        if(e.key.toLowerCase()=== "p"){
            char.style.transition="transform 0.5s, opacity 0.5s";
            char.style.transform +="translateY(50px) rotate(90deg)";
            char.style.opacity=0.5;
            setTimeout(() => {
                char.style.transform = char.style.transform.replace("translateY(50px rotate(90)","");
                char.style.opacity=1;
            },1500);
        }
    });
//blink eyes
setInterval(() => {
    eyes.forEach(eye=> eye.classList.add("blink"));
    setTimeout(() => eyes.forEach(eye => eye.classList.remove("blink")),200);
},4000);

if(bow && dress){
    setInterval(() =>{
        bow.classList.toggle('active');
        dress.classList.toggle("new");
    },5000);
}

}

setupCharacter("mickey");
setupCharacter("minnie");


