// Function to calculate bill based on selected items
function calculateBill() {
    let items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach(item => {
        if (item.checked) {
            total += parseInt(item.value);
        }
    });

    // Display the total bill in the HTML
    document.getElementById("bill").innerText = "₹" + total;

    // Alert the user that the bill has been calculated
    alert("Your total bill is: ₹" + total);
}

// Cooking steps simulation
let cookingSteps = [
    "Washing rice...",
    "Preparing gravy...",
    "Cooking rice...",
    "Layering rice and gravy...",
    "Dum cooking in progress...",
    "🍽️ Biryani is ready to serve!",
    "Serving Biryani...",
    "🎉 Enjoy your Biryani!"
];

let step = 0;

// Function to start the cooking process
function startCooking() {
    alert("Cooking started! Let's make the best biryani! 🍚");
    step = 0;
    runCooking();
}

// Function to run through the cooking steps with a delay
function runCooking() {
    if (step < cookingSteps.length) {
        document.getElementById("status").innerText = cookingSteps[step];
        step++;

        // Alert each cooking step
        if (step === 1) {
            alert("Step 1: " + cookingSteps[step - 1]);
        } else if (step === 2) {
            alert("Step 2: " + cookingSteps[step - 1]);
        } else if (step === 3) {
            alert("Step 3: " + cookingSteps[step - 1]);
        } else if (step === 4) {
            alert("Step 4: " + cookingSteps[step - 1]);
        } else if (step === 5) {
            alert("Step 5: " + cookingSteps[step - 1]);
        } else if (step === 6) {
            alert("Step 6: " + cookingSteps[step - 1]);
        }

        // Call the next cooking step after 2 seconds
        setTimeout(runCooking, 2000); 
    } else {
        // After the final step, reset for the next order
        setTimeout(function () {
            document.getElementById("status").innerText = "Waiting for order...";
            alert("Your Biryani is served! 🎉 Enjoy!");
        }, 3000); // Wait 3 seconds before resetting
    }
}
