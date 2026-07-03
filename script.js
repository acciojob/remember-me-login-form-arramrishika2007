const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Check saved credentials
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existing.hidden = false;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        existing.hidden = false;
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.hidden = true;
    }
});

existing.addEventListener("click", function () {
    const user = localStorage.getItem("username");
    if (user) {
        alert(`Logged in as ${user}`);
    }
});