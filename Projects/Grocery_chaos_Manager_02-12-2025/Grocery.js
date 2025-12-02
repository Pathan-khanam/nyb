// let groceries = [];

// function addItem() {
//   let item = document.getElementById("itemInput").value.trim();
//   let category = document.getElementById("categoryInput").value;

//   if (!item) return alert("Enter a grocery item!");

//   groceries.push({ item, category }); // PUSH
//   display(groceries);
// }

// function display(arr) {
//   let ul = document.getElementById("list");
//   ul.innerHTML = "";

//   arr.forEach((g, index) => {
//     let li = document.createElement("li");
//     li.innerHTML = `
//       ${g.item} (${g.category})
//       <button class="deleteBtn" onclick="deleteItem(${index})">X</button>
//     `;
//     ul.appendChild(li);
//   });

//   document.getElementById("count").textContent = arr.length;
// }

// function deleteItem(index) {
//   groceries.splice(index, 1); // SPLICE
//   display(groceries);
// }

// function searchItems() {
//   let text = document.getElementById("searchBox").value.toLowerCase();
//   let results = groceries.filter(g => g.item.toLowerCase().includes(text)); // FILTER + INCLUDES
//   display(results);
// }

// function sortAZ() {
//   groceries.sort((a, b) => a.item.localeCompare(b.item)); // SORT
//   display(groceries);
// }

// function sortZA() {
//   groceries.sort((a, b) => b.item.localeCompare(a.item)); // SORT
//   display(groceries);
// }

// function filterHealthy() {
//   let res = groceries.filter(g => g.category === "healthy"); // FILTER
//   display(res);
// }

// function filterJunk() {
//   let res = groceries.filter(g => g.category === "junk");
//   display(res);
// }


let groceries = [];

// Add new item
function addItem() {
  let item = document.getElementById("itemInput").value.trim();
  let category = document.getElementById("categoryInput").value.trim().toLowerCase();

  if (!item) return alert("Enter a grocery item!");

  groceries.push({ item, category });
  display(groceries);

  document.getElementById("itemInput").value = "";
}

// Display list
function display(arr) {
  let ul = document.getElementById("list");
  ul.innerHTML = "";

  arr.forEach((g, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${g.item} (${g.category})
      <button class="deleteBtn" onclick="deleteItem(${index})">X</button>
    `;
    ul.appendChild(li);
  });

  document.getElementById("count").textContent = arr.length;
}

// Delete item
function deleteItem(index) {
  groceries.splice(index, 1);
  display(groceries);
}

// Search items (name or category)
function searchItems() {
  let text = document.getElementById("searchBox").value.toLowerCase();
  let results = groceries.filter(g => 
    g.item.toLowerCase().includes(text) || g.category.toLowerCase().includes(text)
  );
  display(results);
}

// Sort A-Z
function sortAZ() {
  groceries.sort((a,b) => a.item.localeCompare(b.item));
  display(groceries);
}

// Sort Z-A
function sortZA() {
  groceries.sort((a,b) => b.item.localeCompare(a.item));
  display(groceries);
}

// Filter healthy
function filterHealthy() {
  let res = groceries.filter(g => g.category.toLowerCase() === "healthy");
  display(res);
}

// Filter junk
function filterJunk() {
  let res = groceries.filter(g => g.category.toLowerCase() === "junk");
  display(res);
}

// Filter weird
function filterWeird() {
  let res = groceries.filter(g => g.category.toLowerCase() === "weird");
  display(res);
}
