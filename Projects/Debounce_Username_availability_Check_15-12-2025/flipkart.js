const categories = {
  Home: ["Furniture","Decor","Lighting"],
  Kitchen: ["Pans","Plates","Mixer"],
  Fashion: ["Shirts","Jeans","Shoes"],
  Electronics: ["Laptop","Phone","Headphones"],
  Groceries: ["Rice","Wheat","Vegetables"]
};

// Populate dropdowns
Object.keys(categories).forEach(cat=>{
  const dropdown = document.getElementById(cat.toLowerCase()+"Dropdown");
  if(dropdown){
    categories[cat].forEach(item=>{
      const div = document.createElement("div");
      div.textContent = item;
      div.addEventListener("click", ()=>{
        document.getElementById("search").value = item;
        showAddCart();
      });
      dropdown.appendChild(div);
    });
  }
});

// Dropdown show/hide with null check
document.querySelectorAll(".nav-categories div").forEach(catDiv=>{
  const dropdown = catDiv.querySelector(".dropdown");
  if(dropdown){
    catDiv.addEventListener("mouseenter",()=> dropdown.style.display="flex");
    catDiv.addEventListener("mouseleave",()=> dropdown.style.display="none");
  }
});

// Mode handling
let mode="normal";
const modeButtons = document.querySelectorAll(".mode-btn");
function setMode(m, btn){
  mode = m;
  modeButtons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
}

// Keystroke tracking
const searchInput = document.getElementById("search");
const normalTrack = document.getElementById("normalTrack");
const throttleTrack = document.getElementById("throttleTrack");
const debounceTrack = document.getElementById("debounceTrack");
const timerFill = document.getElementById("timerFill");
const boughtContent = document.getElementById("boughtContent");

let debounceTimer, progressTimer;
let throttleLock=false;
const DELAY = 1200;

searchInput.addEventListener("input", e=>{
  const value = e.target.value.trim();
  if(!value){ resetTracks(); addCartBtn.style.display="none"; document.body.style.background="linear-gradient(135deg,#f7f7f7,#e3f2fd)"; return; }
  const char = value.slice(-1);
  showAddCart();

  // Normal
  normalTrack.innerHTML += `<div class="dot normal">${char}</div>`;

  // Throttle
  if(!throttleLock){
    throttleTrack.innerHTML += `<div class="dot throttle">${char}</div>`;
    throttleLock=true;
    setTimeout(()=> throttleLock=false, DELAY);
  }

  // Debounce
  clearTimeout(debounceTimer);
  clearInterval(progressTimer);
  timerFill.style.width="0%";
  let elapsed=0;
  progressTimer=setInterval(()=>{
    elapsed+=100;
    timerFill.style.width = `${(elapsed/DELAY)*100}%`;
  },100);
  debounceTimer=setTimeout(()=>{
    debounceTrack.innerHTML += `<div class="dot debounce">${char}</div>`;
    clearInterval(progressTimer);
  },DELAY);
});

function resetTracks(){
  normalTrack.innerHTML='<label>Normal:</label>';
  throttleTrack.innerHTML='<label>Throttle:</label>';
  debounceTrack.innerHTML='<label>Debounce:</label>';
  timerFill.style.width="0%";
}

const addCartBtn = document.getElementById("addCartBtn");
function showAddCart(){ addCartBtn.style.display="inline-block"; }

// Cart functionality
let cartItems=[];
const cartPage = document.getElementById("cartPage");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartIcon = document.getElementById("cartIcon");
const cartCount = document.getElementById("cartCount");

function animateToCart(itemName){
  const fly = document.createElement("div");
  fly.className="fly-item";
  fly.textContent = itemName[0];
  document.body.appendChild(fly);
  const rect = searchInput.getBoundingClientRect();
  fly.style.left=rect.left + "px";
  fly.style.top=rect.top + "px";

  const cartRect = cartIcon.getBoundingClientRect();
  setTimeout(()=>{
    fly.style.left=cartRect.left + "px";
    fly.style.top=cartRect.top + "px";
    fly.style.transform="scale(0.3)";
    fly.style.opacity="0.5";
  },50);

  setTimeout(()=> document.body.removeChild(fly),1000);
}

addCartBtn.addEventListener("click", ()=>{
  const item = searchInput.value.trim();
  if(item){
    cartItems.push({name:item, mode:mode});
    updateCartCount();
    animateToCart(item);
    searchInput.value="";
    addCartBtn.style.display="none";
    resetTracks();
  }
});

function updateCartCount(){
  cartCount.textContent = cartItems.length;
}

// Open cart page
cartIcon.addEventListener("click", ()=>{
  cartPage.style.display="flex";
  renderCartPage();
});
function closeCart(){ cartPage.style.display="none"; }

function renderCartPage(){
  cartItemsContainer.innerHTML="";
  if(cartItems.length===0) cartItemsContainer.innerHTML="<p>No items in cart.</p>";
  cartItems.forEach((item,i)=>{
    const div = document.createElement("div");
    div.className="cart-item";
    div.innerHTML = `
      <span>${item.name} (${item.mode})</span>
      <div>
        <button class="buy-btn" onclick="buyItem(${i})">Buy Now</button>
        <button class="shop-btn" onclick="shopItem(${i})">Shop Now</button>
        <button class="remove-btn" onclick="removeItem(${i})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });
}

// Buy item
function buyItem(index){
  const item = cartItems[index];
  cartItemsContainer.innerHTML=`<div class="item-detail">
    <h3>You bought: ${item.name} (${item.mode})</h3>
    <p>Here are the keystrokes related to your item:</p>
    <div style="display:flex; gap:5px; justify-content:center; flex-wrap:wrap;">
      ${item.name.split('').map(c=>`<div class="dot ${item.mode}">${c}</div>`).join('')}
    </div>
   
  </div>`;
}

// Shop item
function shopItem(index){
  const itemsSummary = cartItems.map(it=>`${it.name} (${it.mode})`).join(", ");
  alert(`Items in cart: ${itemsSummary}\nNormal/Throttle/Debounce differences are shown with keystrokes colors!\n🛒 Normal: Pink\n⏱️ Throttle: Orange\n✅ Debounce: Green`);
}

// Remove item
function removeItem(index){
  cartItems.splice(index,1);
  updateCartCount();
  renderCartPage();
}