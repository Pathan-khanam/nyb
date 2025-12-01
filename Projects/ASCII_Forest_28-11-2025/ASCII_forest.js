const forest = document.getElementById('forest');
const forestWidth = window.innerWidth;
const forestHeight = window.innerHeight;

// Create trees
for(let i=0; i<15; i++){
  const tree = document.createElement('div');
  tree.className = 'tree';
  tree.style.left = Math.random() * forestWidth + 'px';
  forest.appendChild(tree);
}

// Create humans
const humans = [];
for(let i=0; i<3; i++){
  const human = document.createElement('div');
  human.className = 'human';
  human.style.left = Math.random() * forestWidth + 'px';
  forest.appendChild(human);
  humans.push({el: human, speed: 1 + Math.random()*1});
}

// Create animals
const animals = [];
for(let i=0; i<4; i++){
  const animal = document.createElement('div');
  animal.className = 'animal';
  animal.style.left = Math.random() * forestWidth + 'px';
  forest.appendChild(animal);
  animals.push({el: animal, speed: 1 + Math.random()*2, dir: Math.random()>0.5?1:-1});
}

// Create birds
const birds = [];
for(let i=0; i<3; i++){
  const bird = document.createElement('div');
  bird.className = 'bird';
  bird.style.left = Math.random() * forestWidth + 'px';
  bird.style.top = Math.random() * (forestHeight/2) + 'px';
  forest.appendChild(bird);
  birds.push({el: bird, speed: 2 + Math.random()*2, yBase: parseFloat(bird.style.top)});
}

// Create rain
const rainDrops = [];
for(let i=0; i<100; i++){
  const drop = document.createElement('div');
  drop.className = 'raindrop';
  drop.style.left = Math.random()*forestWidth + 'px';
  drop.style.top = Math.random()*forestHeight + 'px';
  forest.appendChild(drop);
  rainDrops.push({el: drop, speed: 4 + Math.random()*3});
}

// Animation loop
function animate(){
  // Humans
  humans.forEach(h=>{
    let x = parseFloat(h.el.style.left);
    x += h.speed;
    if(x > forestWidth) x = -50;
    h.el.style.left = x + 'px';
  });

  // Animals
  animals.forEach(a=>{
    let x = parseFloat(a.el.style.left);
    x += a.speed * a.dir;
    if(x > forestWidth) a.dir = -1;
    if(x < -50) a.dir = 1;
    a.el.style.left = x + 'px';
  });

  // Birds
  birds.forEach(b=>{
    let x = parseFloat(b.el.style.left);
    x += b.speed;
    b.el.style.left = x + 'px';
    b.el.style.top = b.yBase + 20*Math.sin(x/50) + 'px';
    if(x > forestWidth) b.el.style.left = '-20px';
  });

  // Rain
  rainDrops.forEach(r=>{
    let y = parseFloat(r.el.style.top);
    y += r.speed;
    if(y > forestHeight) y = -10;
    r.el.style.top = y + 'px';
  });

  requestAnimationFrame(animate);
}

animate();