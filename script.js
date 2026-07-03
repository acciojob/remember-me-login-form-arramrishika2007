//your JS code here. If required.
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Show existing user button if credentials exist
if (
    localStorage.getItem("username") &&
    localStorage.getItem("password")
) {
    existing.style.display = "inline-block";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        existing.style.display = "inline-block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }
});

existing.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
        alert(`Logged in as ${savedUser}`);
    }
});