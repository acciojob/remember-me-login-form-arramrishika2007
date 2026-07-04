const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Show existing user button if credentials exist
if (localStorage.getItem("user") && localStorage.getItem("pwd")) {
    existing.hidden = false;
} else {
    existing.hidden = true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (checkbox.checked) {
        localStorage.setItem("user", username.value);
        localStorage.setItem("pwd", password.value);
        existing.hidden = false;
    } else {
        localStorage.removeItem("user");
        localStorage.removeItem("pwd");
        existing.hidden = true;
    }
});

existing.addEventListener("click", function () {
    const user = localStorage.getItem("user");
    if (user) {
        alert(`Logged in as ${user}`);
    }
});