/* ----------------------------------------------------
   1️⃣ MIXED LIKED VIDEOS (NO CATEGORY GIVEN)
---------------------------------------------------- */
const likedVideos = [
  { title: "How to make pasta", description: "Cooking tutorial", url: "https://www.youtube.com/embed/1-SJGQ2HLp8" },
  { title: "Beautiful Bali Travel Vlog", description: "Travel vlog", url: "https://www.youtube.com/embed/OQSNhk5ICTI" },
  { title: "Dodo Episode", description: "Cartoon entertainment", url: "https://www.youtube.com/embed/zGRPON4FcBk?si=VHTqTktugq5O5nlJ" },
  { title: "JavaScript Full Beginner Course", description: "Learning course", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
  { title: "Best Indian Street Food Tour", description: "Food vlog", url: "https://www.youtube.com/embed/LQ5gb3ocwcc?si=shmGOXXW5h8WFFIV" },
  { title: "Make Perfect Omelette", description: "Cooking recipe", url: "https://www.youtube.com/embed/vn9mMeWcgoM" },
  { title: "Disney World Tour", description: "Travel video", url: "https://www.youtube.com/embed/2Xz3_VcFKkw?si=b-rXx9Udm-_Ave6G" },
];

/* ----------------------------------------------------
   2️⃣ AUTO-DETECT CATEGORY
---------------------------------------------------- */
function detectCategory(video) {
    const text = (video.title + " " + video.description).toLowerCase();

    if (text.includes("cook") || text.includes("recipe") || text.includes("kitchen"))
        return "Cooking";

    if (text.includes("food") || text.includes("street food"))
        return "Food";

    if (text.includes("travel") || text.includes("tour") || text.includes("vlog"))
        return "Travel";

    if (text.includes("cartoon") || text.includes("funny") || text.includes("animation"))
        return "Cartoon";

    if (text.includes("learn") || text.includes("course") || text.includes("tutorial"))
        return "Learning";

    return "Other";
}

/* ----------------------------------------------------
   3️⃣ SORT INTO CATEGORIES
---------------------------------------------------- */
const categories = {};

likedVideos.forEach(video => {
    const cat = detectCategory(video);
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(video);
});

/* ----------------------------------------------------
   4️⃣ SHOW MIXED VIDEOS
---------------------------------------------------- */
const mixedContainer = document.getElementById("mixed");

likedVideos.forEach(video => {
    mixedContainer.innerHTML += `
        <div class="video-card">
            <p>${video.title}</p>
            <iframe src="${video.url}" allowfullscreen></iframe>
        </div>
    `;
});

/* ----------------------------------------------------
   5️⃣ SHOW AUTO-SORTED CATEGORIES
---------------------------------------------------- */
function showCategories() {
    const output = document.getElementById("output");

    for (let catName in categories) {
        const section = document.createElement("div");
        section.className = "category-section";

        section.innerHTML = `<h2>📌 ${catName.toUpperCase()}</h2>`;

        const list = document.createElement("div");
        list.className = "video-list";

        categories[catName].forEach(video => {
            list.innerHTML += `
                <div class="video-card">
                    <p>${video.title}</p>
                    <iframe src="${video.url}" allowfullscreen></iframe>
                </div>
            `;
        });

        section.appendChild(list);
        output.appendChild(section);
    }
}

showCategories();
