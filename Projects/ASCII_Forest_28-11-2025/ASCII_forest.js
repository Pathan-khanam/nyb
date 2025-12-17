
const forest = document.getElementById("forest");
let W = window.innerWidth;
let H = window.innerHeight;

/* Trees */
for (let i = 0; i < 15; i++) {
  const t = document.createElement("div");
  t.className = "tree";
  t.style.left = Math.random() * W + "px";
  forest.appendChild(t);
}

/* Humans */
const humans = [];
for (let i = 0; i < 3; i++) {
  const h = document.createElement("div");
  h.className = "human";
  h.innerHTML = `
    <div class="head"></div>
    <div class="body"></div>
    <div class="leg leg1"></div>
    <div class="leg leg2"></div>`;
  h.style.left = Math.random() * W + "px";
  forest.appendChild(h);
  humans.push({ el: h, speed: 1 + Math.random() });
}

/* Animals */
function createAnimal(type) {
  const a = document.createElement("div");
  a.className = "animal " + type;
  a.innerHTML = `
    <div class="body"></div>
    <div class="head"></div>
    <div class="leg leg1"></div>
    <div class="leg leg2"></div>
    <div class="leg leg3"></div>
    <div class="leg leg4"></div>`;
  a.style.left = Math.random() * W + "px";
  forest.appendChild(a);
  return { el: a, speed: 1 + Math.random() * 2, dir: Math.random() > 0.5 ? 1 : -1 };
}

const animals = [
  createAnimal("deer"),
  createAnimal("rabbit"),
  createAnimal("wolf")
];

/* Birds */
const birds = [];
for (let i = 0; i < 4; i++) {
  const b = document.createElement("div");
  b.className = "bird";
  b.innerHTML = `
    <div class="body"></div>
    <div class="head"></div>
    <div class="wing left"></div>
    <div class="wing right"></div>`;
  b.style.left = Math.random() * W + "px";
  b.style.top = Math.random() * H / 2 + "px";
  forest.appendChild(b);
  birds.push({ el: b, speed: 2 + Math.random() * 2 });
}

/* Rain */
const rain = [];
for (let i = 0; i < 100; i++) {
  const r = document.createElement("div");
  r.className = "raindrop";
  r.style.left = Math.random() * W + "px";
  r.style.top = Math.random() * H + "px";
  forest.appendChild(r);
  rain.push({ el: r, speed: 4 + Math.random() * 3 });
}

/* Animation */
function animate() {
  const t = Date.now();

  humans.forEach(h => {
    let x = parseFloat(h.el.style.left);
    x += h.speed;
    if (x > W) x = -30;
    h.el.style.left = x + "px";

    const legs = h.el.querySelectorAll(".leg");
    legs[0].style.transform = `rotate(${10*Math.sin(t/200)}deg)`;
    legs[1].style.transform = `rotate(${-10*Math.sin(t/200)}deg)`;
  });

  animals.forEach(a => {
    let x = parseFloat(a.el.style.left);
    x += a.speed * a.dir;
    if (x > W - 50 || x < 0) a.dir *= -1;
    a.el.style.left = x + "px";
    a.el.style.transform = a.dir === 1 ? "scaleX(1)" : "scaleX(-1)";

    a.el.querySelectorAll(".leg").forEach((leg, i) => {
      leg.style.transform = `rotate(${10*Math.sin(t/200 + i)}deg)`;
    });
  });

  birds.forEach(b => {
    let x = parseFloat(b.el.style.left);
    x += b.speed;
    if (x > W) x = -20;
    b.el.style.left = x + "px";

    const flap = 20 * Math.sin(t / 100);
    b.el.querySelector(".wing.left").style.transform = `rotate(${flap}deg)`;
    b.el.querySelector(".wing.right").style.transform = `rotate(${-flap}deg)`;
  });

  rain.forEach(r => {
    let y = parseFloat(r.el.style.top);
    y += r.speed;
    if (y > H) y = -10;
    r.el.style.top = y + "px";
  });

  requestAnimationFrame(animate);
}

animate();