console.log("Loading user...");

fetch("https://api.example.com/user")
  .then(res => res.json())
  .then(data => console.log("User loaded:", data));

console.log("User can still interact!");
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("asyncInput");
    const status = document.getElementById("status");

    input.addEventListener("input", () => {
        const value = input.value;

        // Show typing immediately
        status.textContent = "Processing input asynchronously...";

        // Heavy task simulated asynchronously
        setTimeout(() => {
            // Simulate computation
            let count = 0;
            for (let i = 0; i < 2e8; i++) { count += i; }

            status.textContent = `Processed input: "${value}"`;
            console.log("Done processing:", value);
        }, 0);

        console.log("Input event fired for:", value);
    });
});