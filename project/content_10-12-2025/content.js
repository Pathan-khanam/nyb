var addBtn = document.getElementById("addBtn");
var clearBtn = document.getElementById("clearBtn");
var contentBox = document.getElementById("contentBox");

contentBox.style.border = "2px solid black";
contentBox.style.padding = "10px";
contentBox.style.marginTop = "10px";
contentBox.style.background = "#f5f5f5";

var count = 0;

// Function to generate random color
function randomColor() {
  const colors = ["red", "green", "blue", "purple", "orange", "brown", "teal", "maroon"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 1️⃣ Add new content when clicking
addBtn.addEventListener("click", function () {
  count++;

  // Create heading
  var heading = document.createElement("h3");
  heading.textContent = "Heading " + count;
  heading.style.color = randomColor();
  heading.style.background = "lightyellow";
  heading.style.padding = "6px";
  heading.style.border = "1px solid black";

  // Create paragraph
  var para = document.createElement("p");
  para.textContent = "This is paragraph " + count + " created using DOM.";
  para.style.color = randomColor();
  para.style.background = "lightcyan";
  para.style.padding = "6px";
  para.style.border = "1px solid black";

  // Add to box
  contentBox.appendChild(heading);
  contentBox.appendChild(para);

  // Click to highlight
  heading.addEventListener("click", function () {
    this.style.background = "#ffd54f";
    this.style.color = "black";
  });

  para.addEventListener("click", function () {
    this.style.background = "#81d4fa";
  });
});

// 2️⃣ Clear last added item
clearBtn.addEventListener("click", function () {
  if (contentBox.lastElementChild) {
    contentBox.lastElementChild.remove();
  }
});
