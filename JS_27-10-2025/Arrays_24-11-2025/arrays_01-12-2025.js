

const food = [];
const education = [];
const other = [];

likedVideos.forEach(video => {
    const category = detectCategory(video);

    if (category === "Food/Cooking") food.push(video);
    else if (category === "Education") education.push(video);
    else other.push(video);
});


console.log("Food/Cooking:", food);
console.log("Education:", education);
console.log("Other:", other);


const categories = {
  food: [],
  education: [],
  other: []
};

likedVideos.forEach(video => {
    const text = (video.title + video.description).toLowerCase();

    if (text.includes("cook") || text.includes("food") || text.includes("recipe"))
        categories.food.push(video);

    else if (text.includes("education") || text.includes("tutorial") || text.includes("course"))
        categories.education.push(video);

    else
        categories.other.push(video);
});

console.log(categories);


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