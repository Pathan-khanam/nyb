let students = [];

// --- ADD STUDENT ---
function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  const marks = Number(document.getElementById("marksInput").value);

  if (!name || isNaN(marks)) {
    alert("Enter valid name and marks");
    return;
  }

  students.push({ name, marks });
  displayStudents(students);

  document.getElementById("nameInput").value = "";
  document.getElementById("marksInput").value = "";
}

// --- DISPLAY STUDENTS ---
function displayStudents(arr) {
  const container = document.getElementById("studentsContainer");
  container.innerHTML = arr
    .map(s => {
      const grade = s.marks >= 35 ? "Pass" : "Fail";
      return `<div class="studentCard ${grade.toLowerCase()}">
                <h3>${s.name}</h3>
                <p>Marks: ${s.marks}</p>
                <p>Grade: ${grade}</p>
              </div>`;
    })
    .join("");
}

// --- SEARCH ---
function searchStudents() {
  const text = document.getElementById("searchBox").value.toLowerCase();
  const result = students.filter(s => s.name.toLowerCase().includes(text));
  displayStudents(result);
}

// --- SORT ---
function sortAZ() {
  students.sort((a,b) => a.name.localeCompare(b.name));
  displayStudents(students);
}

function sortZA() {
  students.sort((a,b) => b.name.localeCompare(a.name));
  displayStudents(students);
}

function sortMarks() {
  students.sort((a,b) => b.marks - a.marks);
  displayStudents(students);
}

// --- FILTER ---
function filterPassed() {
  displayStudents(students.filter(s => s.marks >= 35));
}

function filterFailed() {
  displayStudents(students.filter(s => s.marks < 35));
}

// --- EXTRA ARRAY METHODS ---
function findStudent(name) {
  return students.find(s => s.name === name);
}

function findStudentIndex(name) {
  return students.findIndex(s => s.name === name);
}

function hasFailed() {
  return students.some(s => s.marks < 35);
}

function allPassed() {
  return students.every(s => s.marks >= 35);
}

function totalMarks() {
  return students.reduce((sum, s) => sum + s.marks, 0);
}

function topThree() {
  return students.slice(0, 3);
}

let sample = ["Alice","Bob","Alice"];
console.log(sample.lastIndexOf("Alice")); // 2
