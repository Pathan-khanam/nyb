
// Import Three.js from the internet (CDN)
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/controls/OrbitControls.js";

// Scene setup
const container = document.getElementById("container");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 70);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Galaxy parameters
let galaxy, geometry, material;
const params = {
  count: 8000,
  size: 0.08,
  radius: 50,
  branches: 5,
  spin: 1,
  randomness: 0.4,
  randomnessPower: 3,
  insideColor: "#00ccff",
  outsideColor: "#ff0066",
  rotationSpeed: 0.001,
};

// Create the galaxy
function generateGalaxy() {
  if (galaxy) {
    geometry.dispose();
    material.dispose();
    scene.remove(galaxy);
  }

  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(params.count * 3);
  const colors = new Float32Array(params.count * 3);

  const colorInside = new THREE.Color(params.insideColor);
  const colorOutside = new THREE.Color(params.outsideColor);

  for (let i = 0; i < params.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * params.radius;
    const spinAngle = radius * params.spin;
    const branchAngle = ((i % params.branches) / params.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      params.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      params.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), params.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      params.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY * 0.3;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / params.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  material = new THREE.PointsMaterial({
    size: params.size,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  galaxy = new THREE.Points(geometry, material);
  scene.add(galaxy);
}
generateGalaxy();

// Animate
function animate() {
  requestAnimationFrame(animate);
  if (galaxy) galaxy.rotation.y += params.rotationSpeed;
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Buttons
const resetBtn = document.getElementById("reset-view");
const activateBtn = document.getElementById("activate-trigger");
const timeBtn = document.getElementById("time-accel");
const themeBtn = document.getElementById("toggle-theme");
const statsPanel = document.getElementById("stats");

// Reset View
resetBtn.addEventListener("click", () => {
  camera.position.set(0, 10, 70);
  controls.reset();
});

// Activate Resonance (Pulse)
let pulseActive = false;
activateBtn.addEventListener("click", () => {
  if (!galaxy || pulseActive) return;
  pulseActive = true;
  const originalScale = galaxy.scale.clone();
  let s = 1;
  const grow = setInterval(() => {
    s += 0.2;
    galaxy.scale.setScalar(s);
    if (s >= 3) {
      clearInterval(grow);
      const shrink = setInterval(() => {
        s -= 0.2;
        galaxy.scale.setScalar(s);
        if (s <= 1) {
          clearInterval(shrink);
          galaxy.scale.copy(originalScale);
          pulseActive = false;
        }
      }, 30);
    }
  }, 30);
});

// Time speed
let timeFactor = 1;
timeBtn.addEventListener("click", () => {
  const speeds = [1, 2, 4];
  const current = speeds.indexOf(timeFactor);
  timeFactor = speeds[(current + 1) % speeds.length];
  params.rotationSpeed = 0.001 * timeFactor;
  timeBtn.querySelector("span:last-of-type").textContent = `Time: ${timeFactor}x`;
});

// Theme toggle
let inferno = false;
themeBtn.addEventListener("click", () => {
  inferno = !inferno;
  if (inferno) {
    params.insideColor = "#ff4c00";
    params.outsideColor = "#ff0000";
    document.body.style.background = "radial-gradient(circle, #1a0000, #000)";
    themeBtn.querySelector("span:last-of-type").textContent = "Theme: Quantum";
  } else {
    params.insideColor = "#00ccff";
    params.outsideColor = "#ff0066";
    document.body.style.background = "radial-gradient(circle, #0a0f1a, #020408)";
    themeBtn.querySelector("span:last-of-type").textContent = "Theme: Inferno";
  }
  generateGalaxy();
});

// Update status text
function updateStats() {
  statsPanel.innerHTML = `
    <div>Systems: <span style="color:#0f0">Active</span></div>
    <div>Resonance: ${
      pulseActive
        ? '<span style="color:#f06">Pulsing</span>'
        : '<span style="color:#0f0">Stable</span>'
    }</div>
    <div>Phase: <span style="color:#0ff">Nominal</span></div>`;
  requestAnimationFrame(updateStats);
}
updateStats();
