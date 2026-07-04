const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Hide button initially
existing.style.display = "none";

// Show button if credentials exist
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existing.style.display = "inline-block";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value;

    alert(`Logged in as ${user}`);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "inline-block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }
});

existing.addEventListener("click", function () {
    const user = localStorage.getItem("username");
    alert(`Logged in as ${user}`);
});