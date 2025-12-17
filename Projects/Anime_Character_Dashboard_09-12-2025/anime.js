
const animeCharacters = {
c1 : {
  name: "Aiko",
  anime: "Fantasy Adventures",
  power: "Fire Blast",
  powerDesc: "Shoots a powerful flame ball at enemies.",
  theme: "linear-gradient(to bottom, #ff6b6b, #fbc2eb)",
  img: "https://tse3.mm.bing.net/th/id/OIP.H7hqci96VaA898WHgUyBSwAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    bg: "https://i.pinimg.com/originals/b3/07/58/b30758c5a22dac497678eb3d5f5af2ce.jpg",
  
},

  c2: {
    name: "Haru",
    anime: "Sky Warriors",
    power: "Wind Slash",
    powerDesc: "Cuts through air with a high-speed blade.",
    theme: "linear-gradient(to bottom, #4facfe, #00f2fe)",
     img: "https://th.bing.com/th/id/OIP.XgoLxvtRg5NXHiccBt4L0AHaGx?w=202&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
  },
  c3: {
    name: "Kira",
    anime: "Shadow Realm",
    power: "Shadow Strike",
    powerDesc: "Attacks from the shadows with deadly precision.",
    theme: "linear-gradient(to bottom, #667eea, #764ba2)",
     img: "https://tse1.mm.bing.net/th/id/OIP.ahbM1Mg0pvRatdFgEzaNlAHaJE?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  c4: {
    name: "Riku",
    anime: "Ocean Legends",
    power: "Water Wave",
    powerDesc: "Summons a massive wave to knock back enemies.",
    theme: "linear-gradient(to bottom, #43e97b, #38f9d7)",
    img: "https://tse2.mm.bing.net/th/id/OIP.1TET6Ed4tc0bSnLb7VlbWQHaKW?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  c5: {
    name: "Sora",
    anime: "Celestial Knights",
    power: "Light Beam",
    powerDesc: "Shoots a concentrated beam of light energy.",
    theme: "linear-gradient(to bottom, #f9d423, #ff4e50)",
    img: "https://w0.peakpx.com/wallpaper/340/417/HD-wallpaper-yosuga-no-sora-ideas-in-2021-yosuga-no-sora-sora-anime-kasugano-sora.jpg"
  }
};

const keys = Object.keys(animeCharacters);
let index = 0;

function showNext() {
  const key = keys[index];
  const character = animeCharacters[key];

  document.getElementById("charImg").src = character.img;
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charAnime").textContent = "Anime: " + character.anime;
  document.getElementById("charPower").textContent = "Super Power: " + character.power;
  document.getElementById("charPowerDesc").textContent = character.powerDesc;

  document.body.style.background = character.theme;

  // Animate image slightly
  const img = document.getElementById("charImg");
  img.style.transform = "scale(1.05)";
  setTimeout(() => { img.style.transform = "scale(1)"; }, 500);

  index++;
  if(index >= keys.length) index = 0;
}

// Automatically change character every 5 seconds
showNext(); // show first immediately
setInterval(showNext, 5000);
