document.addEventListener("DOMContentLoaded", () => {
    const syncBtn = document.getElementById("sync-btn");
    const asyncBtn = document.getElementById("async-btn");
    const log = document.getElementById("log");

    // --- Synchronous Tasks ---
    syncBtn.addEventListener("click", () => {
        log.innerHTML = ""; // clear previous log
        for (let i = 1; i <= 5; i++) {
            // Simulate blocking task
            const start = Date.now();
            while (Date.now() - start < 500) {} // 0.5 sec blocking

            const div = document.createElement("div");
            div.textContent = `Sync Task ${i} completed`;
            div.className = "sync-task";
            log.appendChild(div);
        }
        console.log("All synchronous tasks done (UI blocked!)");
    });

    // --- Asynchronous Tasks ---
    asyncBtn.addEventListener("click", () => {
        log.innerHTML = ""; // clear previous log
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                const div = document.createElement("div");
                div.textContent = `Async Task ${i} completed`;
                div.className = "async-task";
                log.appendChild(div);
            }, i * 500); // each task delayed by i*0.5 sec
        }
        console.log("Asynchronous tasks scheduled (UI is responsive!)");
    });
});