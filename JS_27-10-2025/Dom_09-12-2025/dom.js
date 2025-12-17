// By ID
var title = document.getElementById("title");

// By class
var items = document.getElementsByClassName("item");

// CSS selectors
var list = document.querySelector("#list");
var firstItem = document.querySelector(".item");
var allItems = document.querySelectorAll(".item");

var listElement = document.querySelector("#list");
console.log(listElement.parentElement); 
// → <div id="container">

var li = document.querySelector(".item");
console.log(li.parentElement); 
// → the <ul> element

var container = document.querySelector("#container");

console.log(container.children); 
// → h2, ul

console.log(container.firstElementChild);
// → <h2 id="title">

console.log(container.lastElementChild);
// → <ul id="list">

var secondItem = document.querySelectorAll(".item")[1];

console.log(secondItem.previousElementSibling);
// → <li>Item 1</li>

console.log(secondItem.nextElementSibling);
// → <li>Item 3</li>

var listItems = document.querySelector("#list").children;

for (let li of listItems) {
  console.log(li.textContent); 
}

var first = document.querySelector("#list").children[0];
first.remove();

var listEl = document.querySelector("#list");
var oldItem = listEl.children[1]; // Item 2

var replacement = document.createElement("li");
replacement.textContent = "Replaced item";

listEl.replaceChild(replacement, oldItem);

var node = document.querySelector("#list");

console.log(node.nodeType);   // 1 = element node
console.log(node.nodeName);   // "UL"
console.log(node.childNodes); // includes text nodes (spaces)


  // 2️⃣ Children of a Node
  var list = document.getElementById("list");
  console.log("Children of list:", list.children);

  // 3️⃣ First Child
  var firstItem = list.firstElementChild;
  firstItem.style.backgroundColor = "lightgreen";
  firstItem.style.padding = "5px";
  firstItem.style.border = "1px solid black";

  // 4️⃣ Last Child
  var lastItem = list.lastElementChild;
  lastItem.style.backgroundColor = "lightpink";
  lastItem.style.padding = "5px";
  lastItem.style.border = "1px solid black";

//   // 5️⃣ Next Sibling
//   var nextSibling = item2.nextElementSibling;
//   nextSibling.style.backgroundColor = "lightyellow";
//   nextSibling.style.padding = "5px";
//   nextSibling.style.border = "1px solid black";

//   // 6️⃣ Previous Sibling
//   var prevSibling = item2.previousElementSibling;
//   prevSibling.style.backgroundColor = "orange";
//   prevSibling.style.padding = "5px";
//   prevSibling.style.border = "1px solid black";

  // 7️⃣ Parent Node of title
  var title = document.getElementById("title");
  title.parentNode.style.border = "2px solid green";
  title.parentNode.style.padding = "10px";

  // 8️⃣ Change Content
  firstItem.textContent = "Updated Item 1";
  lastItem.textContent = "Updated Item 3";

  // 9️⃣ Loop Through Children
  for (let child of list.children) {
    child.style.fontWeight = "bold";
    child.style.margin = "3px 0";
  }

//   // 🔟 Closest Ancestor
//   var closestContainer = item2.closest("#container");
//   closestContainer.style.backgroundColor = "#fff3cd"; // light yellow

   const mainSection = document.getElementById("mainSection");
  const createBtn = document.getElementById("createContentBtn");

  // Style the main section
  mainSection.style.border = "2px solid #333";
  mainSection.style.padding = "15px";
  mainSection.style.backgroundColor = "#f9f9f9";

  // Function to create and style elements
  function buildElement(tagName, textValue, textColor, fontSize) {
    const element = document.createElement(tagName);
    element.textContent = textValue;
    element.style.color = textColor;
    element.style.fontSize = fontSize;
    element.style.margin = "6px 0";
    element.style.padding = "4px";
    element.style.border = "1px solid #888";
    return element;
  }

  let itemCounter = 1;

  createBtn.addEventListener("click", function() {
    itemCounter++;

    // Create new subheading
    const subHeading = buildElement("h3", "Subheading " + itemCounter, "darkmagenta", "18px");
    // Create new paragraph
    const para = buildElement("p", "This is paragraph number " + itemCounter, "darkslateblue", "14px");

    // Append new elements to the main section
    mainSection.appendChild(subHeading);
    mainSection.appendChild(para);

    // Add click events for highlighting
    subHeading.addEventListener("click", function() {
      this.style.backgroundColor = "#ffe0b2"; // highlight heading
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#d1c4e9"; // highlight paragraph
    });

    para.addEventListener("click", function() {
      this.style.backgroundColor = "#c8e6c9"; // highlight paragraph
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#ffcdd2"; // highlight heading
    });
  });


   const appContainer = document.getElementById("appContainer");
  const mainHeading = document.getElementById("mainHeading");
  const dynamicList = document.getElementById("dynamicList");
  const addContentBtn = document.getElementById("addContentBtn");

  // Style main container
  appContainer.style.border = "2px solid black";
  appContainer.style.padding = "15px";
  appContainer.style.backgroundColor = "#691c1cff";

  // Style main heading
  mainHeading.style.color = "darkblue";
  mainHeading.style.marginBottom = "10px";

  // Function to create and style elements
  function createStyledElement(tag, text, color, fontSize, bgColor) {
    const el = document.createElement(tag);
    el.textContent = text;
    el.style.color = color;
    el.style.fontSize = fontSize;
    el.style.backgroundColor = bgColor;
    el.style.margin = "5px 0";
    el.style.padding = "5px";
    el.style.border = "1px solid #555";
    return el;
  }

 var count = 0;

  addContentBtn.addEventListener("click", function() {
    count++;

    // Create subheading
    const subHeading = createStyledElement("h3", "Subheading " + count, "darkmagenta", "18px", "#ffe0b2");
    // Create paragraph
    const paragraph = createStyledElement("p", "This is paragraph " + count, "darkgreen", "14px", "#d1f2eb");
    // Create list item
    const listItem = createStyledElement("li", "List item " + count, "darkred", "14px", "#fce4ec");

    // Append elements to container
    appContainer.appendChild(subHeading);
    appContainer.appendChild(paragraph);
    dynamicList.appendChild(listItem);

    // Add click events to highlight parent and siblings
    subHeading.addEventListener("click", function() {
      this.style.backgroundColor = "#ffd54f"; // clicked heading
      if (this.nextElementSibling && this.nextElementSibling.tagName === "P") {
        this.nextElementSibling.style.backgroundColor = "#81d4fa"; // paragraph sibling
      }
    });

    paragraph.addEventListener("click", function() {
      this.style.backgroundColor = "#aed581"; // clicked paragraph
      if (this.previousElementSibling && this.previousElementSibling.tagName === "H3") {
        this.previousElementSibling.style.backgroundColor = "#f48fb1"; // heading sibling
      }
    });

    listItem.addEventListener("click", function() {
      this.style.backgroundColor = "#ffcc80"; // clicked list item
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#c5cae9"; // previous sibling
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#b2dfdb"; // next sibling
    });
  });

   var container = document.getElementById("contentContainer");
  var header = document.getElementById("mainHeader");
   var colorList = document.getElementById("colorList");
  var addButton = document.getElementById("addContentBtn");

  // Style the container
  container.style.border = "2px solid black";
  container.style.padding = "15px";
  container.style.backgroundColor = "#f0f0f0";

  header.style.color = "navy";
  header.style.marginBottom = "10px";

  // Arrays of colors for dynamic elements
  var headingColors = ["darkmagenta", "darkorange", "darkblue", "darkgreen"];
  var paragraphColors = ["lightcoral", "lightseagreen", "lightpink", "lightyellow"];
  var listColors = ["#ffcc80", "#80deea", "#c5e1a5", "#f48fb1"];

  var counter = 0;

  addButton.addEventListener("click", function() {
    counter++;

    // Choose colors in a round-robin fashion
    var headingColor = headingColors[counter % headingColors.length];
    var paragraphColor = paragraphColors[counter % paragraphColors.length];
    var listColor = listColors[counter % listColors.length];

    // Create heading
    var newHeading = document.createElement("h3");
    newHeading.textContent = "Heading " + counter;
    newHeading.style.color = headingColor;
    newHeading.style.backgroundColor = "#fff3e0";
    newHeading.style.padding = "5px";
    newHeading.style.border = "1px solid #555";
    newHeading.style.margin = "5px 0";

    // Create paragraph
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Paragraph " + counter;
    newParagraph.style.color = paragraphColor;
    newParagraph.style.backgroundColor = "#e8f5e9";
    newParagraph.style.padding = "5px";
    newParagraph.style.border = "1px solid #555";
    newParagraph.style.margin = "5px 0";

    // Create list item
    var newListItem = document.createElement("li");
    newListItem.textContent = "List Item " + counter;
    newListItem.style.color = listColor;
    newListItem.style.backgroundColor = "#fff9c4";
    newListItem.style.padding = "5px";
    newListItem.style.border = "1px solid #555";
    newListItem.style.margin = "3px 0";

    // Append elements to container and list
    container.appendChild(newHeading);
    container.appendChild(newParagraph);
    colorList.appendChild(newListItem);

    // Optional: click events to highlight
    newHeading.addEventListener("click", function() {
      this.style.backgroundColor = "#ffd54f";
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#81d4fa";
    });

    newParagraph.addEventListener("click", function() {
      this.style.backgroundColor = "#aed581";
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#f48fb1";
    });

    newListItem.addEventListener("click", function() {
      this.style.backgroundColor = "#ffab91";
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#b2dfdb";
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#c5cae9";
    });
  });

 var container = document.getElementById("dynamicContainer");
  var mainTitle = document.getElementById("mainTitle");
  var list = document.getElementById("itemList");
  var addButton = document.getElementById("addContentBtn");

  // Style container and title
  container.style.border = "2px solid black";
  container.style.padding = "15px";
  container.style.backgroundColor = "#f9f9f9";

  mainTitle.style.color = "darkblue";
  mainTitle.style.marginBottom = "10px";

  var count = 0;

  addButton.addEventListener("click", function() {
    count++;

    // 1️⃣ Create heading
    const heading = document.createElement("h3");
    heading.innerHTML = "Subheading " + count; // HTML content
    heading.style.color = "darkmagenta";
    heading.style.backgroundColor = "#ffe0b2";
    heading.style.padding = "5px";
    heading.style.border = "1px solid #555";
    heading.style.margin = "5px 0";

    // 2️⃣ Create paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "This is paragraph number <strong>" + count + "</strong>"; // HTML content
    paragraph.style.color = "darkgreen";
    paragraph.style.backgroundColor = "#d1f2eb";
    paragraph.style.padding = "5px";
    paragraph.style.border = "1px solid #555";
    paragraph.style.margin = "5px 0";

    // 3️⃣ Create list item
    const listItem = document.createElement("li");
    listItem.innerHTML = "List item <em>" + count + "</em>"; // HTML content
    listItem.style.color = "darkred";
    listItem.style.backgroundColor = "#fce4ec";
    listItem.style.padding = "5px";
    listItem.style.border = "1px solid #555";
    listItem.style.margin = "3px 0";

    // Append elements to container
    container.appendChild(heading);
    container.appendChild(paragraph);
    list.appendChild(listItem);

    // Optional: click event to highlight parent/child/sibling
    heading.addEventListener("click", function() {
      this.style.backgroundColor = "#ffd54f"; // highlight heading
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#81d4fa"; // paragraph
    });

    paragraph.addEventListener("click", function() {
      this.style.backgroundColor = "#aed581"; // highlight paragraph
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#f48fb1"; // heading
    });

    listItem.addEventListener("click", function() {
      this.style.backgroundColor = "#ffab91"; // highlight list item
      if (this.previousElementSibling) this.previousElementSibling.style.backgroundColor = "#c5cae9"; // prev sibling
      if (this.nextElementSibling) this.nextElementSibling.style.backgroundColor = "#b2dfdb"; // next sibling
    });
  });
  var container = document.getElementById("appContainer");
  var mainTitle = document.getElementById("mainTitle");
  var listContainer = document.getElementById("listContainer");
  var addBtn = document.getElementById("addBtn");

  var counter = 0;

  addBtn.addEventListener("click", function() {
    counter++;

    // Heading
    var heading = document.createElement("h3");
    heading.textContent = "Heading " + counter;
    heading.style.color = "white";            // Text color
    heading.style.backgroundColor = "darkblue"; // Background color
    heading.style.padding = "5px";

    // Paragraph
    var para = document.createElement("p");
    para.textContent = "Paragraph " + counter;
    para.style.color = "black";
    para.style.backgroundColor = "lightgreen";
    para.style.padding = "5px";

    // List item
    var li = document.createElement("li");
    li.textContent = "List item " + counter;
    li.style.color = "white";
    li.style.backgroundColor = "purple";
    li.style.padding = "5px";

    // Append to container
    container.appendChild(heading);
    container.appendChild(para);
    listContainer.appendChild(li);
  });

    var list = document.getElementById("list");

  // 1️⃣ First Child
  var firstItem = list.firstElementChild;
  firstItem.style.backgroundColor = "lightgreen";
  firstItem.style.padding = "5px";
  firstItem.style.border = "1px solid black";

  // 2️⃣ Last Child
  var lastItem = list.lastElementChild;
  lastItem.style.backgroundColor = "lightpink";
  lastItem.style.padding = "5px";
  lastItem.style.border = "1px solid black";

  // 3️⃣ Next Sibling of first item
  var nextSibling = firstItem.nextElementSibling;
  nextSibling.style.backgroundColor = "lightyellow";
  nextSibling.style.padding = "5px";
  nextSibling.style.border = "1px solid black";

  // 4️⃣ Previous Sibling of last item
  var prevSibling = lastItem.previousElementSibling;
  prevSibling.style.backgroundColor = "orange";
  prevSibling.style.padding = "5px";
  prevSibling.style.border = "1px solid black";

  // 5️⃣ Parent of list
  var parent = list.parentElement;
  parent.style.border = "2px solid green";
  parent.style.padding = "10px";

  // 6️⃣ Add a new list item dynamically
  var newItem = document.createElement("li");
  newItem.textContent = "Item 4";
  newItem.style.backgroundColor = "lightblue";
  newItem.style.padding = "5px";
  newItem.style.border = "1px solid black";
  list.appendChild(newItem);