

// const food = [];
// const education = [];
// const other = [];
// const likedVideos = [
//   { title: "How to Cook Pasta", description: "Easy recipe" },
//   { title: "Japan Travel Vlog", description: "Food and temples" },
//   { title: "Python Tutorial", description: "Full beginner course" }
// ];

// likedVideos.forEach(video => {
//     const category = detectCategory(video);

//     if (category === "Food/Cooking") food.push(video);
//     else if (category === "Education") education.push(video);
//     else other.push(video);
// });


// console.log("Food/Cooking:", food);
// console.log("Education:", education);
// console.log("Other:", other);


// const categories = {
//   food: [],
//   education: [],
//   other: []
// };

// likedVideos.forEach(video => {
//     const text = (video.title + video.description).toLowerCase();

//     if (text.includes("cook") || text.includes("food") || text.includes("recipe"))
//         categories.food.push(video);

//     else if (text.includes("education") || text.includes("tutorial") || text.includes("course"))
//         categories.education.push(video);

//     else
//         categories.other.push(video);
// });

// console.log(categories);

// 1. Define your videos first
const likedVideos = [
  { title: "How to Cook Pasta", description: "Easy recipe" },
  { title: "Japan Travel Vlog", description: "Food and temples" },
  { title: "Python Tutorial", description: "Full beginner course" }
];

// 2. Prepare category arrays
const categories = {
  food: [],
  education: [],
  other: []
};

// 3. Categorize videos
likedVideos.forEach(video => {
    const text = (
        (video.title || "") + " " +
        (video.description || "")
    ).toLowerCase();

    if (text.includes("cook") || text.includes("food") || text.includes("recipe"))
        categories.food.push(video);

    else if (text.includes("tutorial") || text.includes("course") || text.includes("learn") || text.includes("education"))
        categories.education.push(video);

    else
        categories.other.push(video);
});

// 4. Output results
console.log("Sorted Categories:", categories);



var x=[1,2,3];
var y=[4,5,6];
var z=x.concat(y,[7,8]);
console.log(z);

var usrs=[
  {id:2,name:"hi"},
  {id:1,name:"hello"}
]
var usr=usrs.find(u =>u.id === 1);
console.log(usr);

var arr=["green","pink","blue"]
var index= arr.findIndex(clr => clr === "pink")
console.log(index);

var arr = ['apple', 'banana'];
console.log(arr.includes('banana')); 
console.log(arr.includes('orange'));

var arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); 


var arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2, -2));

let obj1 = {x: 1};
let obj2 = {x: 1};
var arr = [obj1, obj2, obj1];
console.log(arr.lastIndexOf(obj1)); 
console.log(arr.lastIndexOf({x: 1})); 

var arr = ['a', 'b', 'c', 'b', 'a', 'b'];
console.log(arr.lastIndexOf('b'))

var arr = [5, 10, 15, 10, 5];
console.log(arr.lastIndexOf(10, 2)); 

