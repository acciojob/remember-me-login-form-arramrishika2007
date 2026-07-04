const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Show the "existing user" button only if credentials were saved previously
function refreshExistingButton() {
  const hasSavedCredentials =
    localStorage.getItem("username") && localStorage.getItem("password");
  existing.style.display = hasSavedCredentials ? "inline-block" : "none";
}

refreshExistingButton();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = usernameInput.value.trim();
  const pass = passwordInput.value;

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  refreshExistingButton();

  alert(`Logged in as ${user}`);
});

existing.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});