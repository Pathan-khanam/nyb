let steps = [
    "Washing and soaking rice...",
    "Preparing biryani gravy...",
    "Cooking rice...",
    "Layering rice and gravy...",
    "Dum cooking in progress...",
    "Biryani is ready to serve 🍽️"
];

let index = 0;

function startCooking() {
    index = 0;
    document.getElementById("status").innerText = "Cooking started...";
    runSteps();
}

function runSteps() {
    if (index < steps.length) {
        document.getElementById("status").innerText = steps[index];
        index++;
        setTimeout(runSteps, 2000); // 2 seconds per step
    }
}





function calculateBill() {
    let items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach(function(item) {
        if (item.checked) {
            total += parseInt(item.value);
        }
    });

    document.getElementById("bill").innerText = "₹" + total;
}
