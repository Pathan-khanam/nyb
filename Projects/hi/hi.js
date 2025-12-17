// // Anime characters stored as objects
// const animeCharacters = {
//   c1: {
//     name: "Aiko",
//     anime: "Fantasy Adventures",
//     power: "Fire Blast",
//     powerDesc: "Shoots a powerful flame ball at enemies.",
//     img: "https://picsum.photos/200/300?random=1",
//     background: "https://picsum.photos/800/600?random=11"
//   },
//   c2: {
//     name: "Haru",
//     anime: "Sky Warriors",
//     power: "Wind Slash",
//     powerDesc: "Cuts through air with a high-speed blade.",
//     img: "https://picsum.photos/200/300?random=2",
//     background: "https://picsum.photos/800/600?random=12"
//   },
//   c3: {
//     name: "Kira",
//     anime: "Shadow Realm",
//     power: "Shadow Strike",
//     powerDesc: "Attacks from the shadows with deadly precision.",
//     img: "https://picsum.photos/200/300?random=3",
//     background: "https://picsum.photos/800/600?random=13"
//   }
// };

// const keys = Object.keys(animeCharacters);
// let index = 0;

// function showCharacter(i){
//   const character = animeCharacters[keys[i]];

//   // Change full-screen background
//   document.body.style.backgroundImage = `url(${character.background})`;

//   // Update overlay card
//   const img = document.getElementById("charImg");
//   img.src = character.img;
//   img.style.transform = "scale(1.1)";
//   setTimeout(()=>{ img.style.transform="scale(1)"; },500);

//   document.getElementById("charName").textContent = character.name;
//   document.getElementById("charAnime").textContent = "Anime: " + character.anime;
//   document.getElementById("charPower").textContent = "Super Power: " + character.power;
//   document.getElementById("charPowerDesc").textContent = character.powerDesc;
// }

// // Simple visual effect when activating power
// function activatePower(){
//   const overlay = document.getElementById("overlay");
//   overlay.style.transform = "scale(1.1)";
//   setTimeout(()=>{ overlay.style.transform="scale(1)"; },300);
// }

// // Auto-play through characters
// function playMovie(){
//   showCharacter(index);
//   index++;
//   if(index >= keys.length) index = 0;
// }

// // Start auto-play
// playMovie();
// setInterval(playMovie, 5000);


// Nature-themed characters
// const natureCharacters = {
//   c1: {
//     name: "Liora",
//     region: "Enchanted Forest",
//     power: "Control Plants",
//     powerDesc: "Can make plants grow rapidly and entangle enemies.",
//     img: "images/forest_guardian.png",
//     background: "images/forest_bg.jpg"
//   },
//   c2: {
//     name: "Aero",
//     region: "River Valley",
//     power: "Summon Rain",
//     powerDesc: "Calls down rain to nourish allies or flood enemies.",
//     img: "images/river_guardian.png",
//     background: "images/river_bg.jpg"
//   },
//   c3: {
//     name: "Terra",
//     region: "Mountain Peaks",
//     power: "Earthquake",
//     powerDesc: "Shakes the ground violently, toppling obstacles.",
//     img: "images/mountain_guardian.png",
//     background: "images/mountain_bg.jpg"
//   }
// };

// const keys = Object.keys(natureCharacters);
// let index = 0;

// // Display character and background
// function showCharacter(i){
//   const character = natureCharacters[keys[i]];

//   // Background image
//   document.body.style.backgroundImage = `url(${character.background})`;

//   // Overlay info
//   const img = document.getElementById("charImg");
//   img.src = character.img;
//   img.style.transform = "scale(1.1)";
//   setTimeout(()=>{ img.style.transform="scale(1)"; },500);

//   document.getElementById("charName").textContent = character.name;
//   document.getElementById("charRegion").textContent = "Region: " + character.region;
//   document.getElementById("charPower").textContent = "Super Power: " + character.power;
//   document.getElementById("charPowerDesc").textContent = character.powerDesc;
// }

// // Power visual effect
// function activatePower(){
//   const overlay = document.getElementById("overlay");
//   overlay.style.transform = "scale(1.1)";
//   setTimeout(()=>{ overlay.style.transform="scale(1)"; },300);
// }

// // Auto-play
// function playMovie(){
//   showCharacter(index);
//   index++;
//   if(index >= keys.length) index = 0;
// }

// // Start auto-play
// playMovie();
// setInterval(playMovie, 5000);

const greetings = [
  "🚀 Ready for Adventures?",
  "🌟 Time to Explore the Universe!",
  "✨ New Day, New Quest!",
  "🎒 Grab Your Gear, Hero!",
  "🌈 Adventure Awaits!"
];

const colors = ["#ff9800","#ffe600","#ff5722","#4caf50","#00bcd4","#9c27b0"];

function showGreeting() {
  const index = Math.floor(Math.random() * greetings.length);
  const greetingElem = document.getElementById("greeting");
  greetingElem.textContent = greetings[index];

  // Random text color
  greetingElem.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Add random floating emoji
  addFloatingEmoji();
}

function addFloatingEmoji() {
  const emojis = ["🚀","🌟","✨","🪐","🌈","🎒"];
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 90 + "vw";
  emoji.style.animationDuration = (5 + Math.random()*5) + "s";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

// Initial greeting
showGreeting();

// Change greeting every 5 seconds
setInterval(showGreeting, 5000);

// Click to change greeting
document.getElementById("greeting").addEventListener("click", showGreeting);
