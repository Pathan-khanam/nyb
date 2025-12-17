function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function checkUsername(name) {
    var status = document.getElementById("status");
    status.innerText = `checking availability for "${name}"...`;

    setTimeout(() => {
        status.innerText = `"${name}" is available ✅`;
    }, 500);
}

const debouncedcheck = debounce(checkUsername, 1000);

document.getElementById("username").addEventListener("input", (e) => {
    document.getElementById("status").innerText = "Typing...";
    debouncedcheck(e.target.value);
});
